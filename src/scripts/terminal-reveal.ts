type Phase = 'pending' | 'typing' | 'settling' | 'revealing' | 'complete';
interface Reveal {
  root: HTMLElement;
  heading: HTMLElement;
  text: HTMLElement;
  body: HTMLElement;
  title: string[];
  phase: Phase;
  timer?: ReturnType<typeof setTimeout>;
}

const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
// Two cursor cycles before typing, one after the final character.
const CURSOR_INTRO_MS = 1200;
const CURSOR_OUTRO_MS = 600;
const FADE_FALLBACK_MS = 750;
let reveals: Reveal[] = [];
let observer: IntersectionObserver | undefined;
let events: AbortController | undefined;

function complete(item: Reveal) {
  if (item.phase === 'complete') return;
  clearTimeout(item.timer);
  item.text.textContent = item.title.join('');
  item.phase = 'complete';
  item.root.dataset.terminalState = 'complete';
  observer?.unobserve(item.root);
}

function start(item: Reveal) {
  if (item.phase !== 'pending') return;
  item.phase = 'typing';
  item.root.dataset.terminalState = 'typing';
  let count = 0;
  const step = Math.min(35, 700 / Math.max(1, item.title.length));
  function type() {
    count++;
    item.text.textContent = item.title.slice(0, count).join('');
    if (count < item.title.length) item.timer = setTimeout(type, step);
    else {
      item.phase = 'settling';
      item.root.dataset.terminalState = 'settling';
      item.timer = setTimeout(() => {
        item.phase = 'revealing';
        item.root.dataset.terminalState = 'revealing';
        // transitionend normally completes the fade; this covers omitted events.
        item.timer = setTimeout(() => complete(item), FADE_FALLBACK_MS);
      }, CURSOR_OUTRO_MS);
    }
  }
  item.timer = setTimeout(type, CURSOR_INTRO_MS);
}

function cleanup() {
  observer?.disconnect();
  events?.abort();
  reveals.forEach(item => clearTimeout(item.timer));
  reveals = [];
}

function prepare() {
  cleanup();
  document.querySelectorAll<HTMLElement>('terminal-reveal').forEach(root => {
    const heading = root.querySelector<HTMLElement>('.terminal-heading');
    const text = root.querySelector<HTMLElement>('[data-terminal-text]');
    const body = root.querySelector<HTMLElement>('[data-terminal-body]');
    if (!heading || !text || !body) return;
    const item: Reveal = { root, heading, text, body, title: Array.from(root.dataset.title ?? ''), phase: 'pending' };
    reveals.push(item);
    if (motion.matches || !('IntersectionObserver' in window)) complete(item);
    else {
      root.dataset.terminalState = 'pending';
      text.textContent = '';
    }
  });
}

function activate() {
  // The router has now restored scroll, including direct hash landings.
  if (!reveals.length) prepare();
  if (!('IntersectionObserver' in window)) return;
  observer?.disconnect();
  events?.abort();
  events = new AbortController();
  const { signal } = events;
  const headerHeight = document.querySelector('.terminal-header')?.getBoundingClientRect().height ?? 0;
  observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const item = reveals.find(candidate => candidate.root === entry.target);
      // Once content starts appearing, scrolling must not interrupt its fade.
      if (!item || item.phase === 'complete' || item.phase === 'revealing') continue;
      if (entry.isIntersecting) {
        if (item.heading.getBoundingClientRect().bottom <= headerHeight) complete(item);
        else start(item);
      } else if (item.phase !== 'pending') complete(item);
    }
  }, { rootMargin: `-${headerHeight}px 0px -10% 0px` });
  for (const item of reveals) {
    if (motion.matches || item.heading.getBoundingClientRect().bottom <= headerHeight) complete(item);
    else if (item.phase !== 'complete') observer.observe(item.root);
    item.root.addEventListener('focusin', () => complete(item), { signal });
    item.body.addEventListener('transitionend', event => {
      if (item.phase === 'revealing' && event.target === item.body && event.propertyName === 'opacity') {
        complete(item);
      }
    }, { signal });
  }
  motion.addEventListener('change', () => {
    if (motion.matches) reveals.forEach(complete);
  }, { signal });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) reveals.filter(item => item.phase !== 'pending').forEach(complete);
  }, { signal });
}

prepare();
document.addEventListener('astro:after-swap', prepare);
document.addEventListener('astro:page-load', activate);
document.addEventListener('astro:before-swap', cleanup);
