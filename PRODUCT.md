# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

El público principal son recruiters y responsables de contratación de ingeniería que evalúan a Sebastian Castañeda para puestos senior de backend o de AI engineering. Necesitan comprender su experiencia, revisar evidencia de su trabajo y encontrar cómo contactarlo.

## Product Purpose

Portfolio profesional y blog personal de Carlos Sebastian Castañeda. Su objetivo confirmado es que quien contrata entienda su experiencia y lo contacte para una entrevista.

El CV, los proyectos, las certificaciones, el blog y el AI twin ayudan a evaluar su perfil. El resultado prioritario es el contacto para una entrevista.

## Positioning

El contenido actual presenta a Sebastian como Senior Software Engineer con más de diez años de experiencia en sistemas de producción, especialmente backend con Python y AWS, y experiencia en fintech, cripto y health tech, entre otros sectores. Está profundizando en AI engineering mediante formación y proyectos prácticos.

La trayectoria profesional, los proyectos propios y el AI twin aportan evidencia concreta de esa evolución. Las afirmaciones profesionales y cifras proceden del contenido del propietario en `data/site.ts`; esta inicialización no las verifica de forma independiente. La transición hacia AI engineering debe describirse con precisión, sin convertir formación o experimentación en experiencia profesional no documentada.

## Operating Context

- El visitante puede revisar el perfil, tecnologías, proyectos destacados, experiencia y certificaciones desde la página principal.
- Puede descargar el CV y contactar por correo o LinkedIn mediante los enlaces existentes.
- Los archivos de proyectos y certificaciones permiten consultar más detalles y enlaces externos.
- El blog publica artículos en inglés y español. Un mismo slug identifica las versiones de un artículo; puede existir solo una de ellas.
- El AI twin permite consultar la carrera, habilidades y experiencia mediante un chatbot alojado en Hugging Face Spaces. Se puede abrir desde la página principal o mediante un enlace externo.

## Capabilities and Constraints

### Contenido que debe conservarse

El propietario confirmó que futuros cambios deben conservar:

- CV y enlaces de contacto.
- Proyectos.
- Certificaciones.
- Blog en inglés y español.
- Demo del AI twin.

### Restricciones del proyecto existente

- Sitio estático construido con Astro, TypeScript estricto y Tailwind CSS. No hay backend propio ni rutas de API.
- El contenido estructurado de las páginas se mantiene en `data/site.ts`, y la navegación en `data/nav.ts`. Los artículos viven en `src/content/blog/{en,es}/` y los recursos públicos en `public/`.
- Las traducciones de un artículo mantienen el mismo nombre de archivo. Los borradores quedan fuera de los archivos públicos y de las rutas generadas.
- El AI twin depende de un servicio externo. El widget carga el iframe cuando el visitante lo abre y ofrece espera, reintento y apertura externa si tarda en estar disponible.
- Las funcionalidades y la identidad existentes son el punto de partida para refinamientos; esta inicialización no autoriza un rediseño.

## Brand Commitments

- Identidad profesional: Carlos Sebastian Castañeda; nombre habitual: Sebastian Castañeda.
- Dominio configurado: `https://sebastiancastaneda.dev`.
- Conservar la fidelidad de nombres, cargos, fechas, credenciales y autoría de proyectos. Las modificaciones factuales necesitan respaldo del propietario o evidencia identificable.
- La dirección visual y nuevas decisiones de voz quedan sin definir en esta inicialización.

## Evidence on Hand

- `data/site.ts`: biografía, experiencia, proyectos, tecnologías, estudios, certificaciones y enlaces de contacto y credenciales.
- `public/CarlosSebastianCastaneda_SoftwareEngineer.pdf`: CV disponible para descarga.
- `public/profile_v2.webp`: fotografía de perfil.
- `public/projects/juana-y-lola.webp` y `public/projects/digital-twin.webp`: capturas de los proyectos destacados.
- `src/content/blog/en/` y `src/content/blog/es/`: artículos sobre la actividad profesional, Juana y Lola Digital y el aprendizaje de AI engineering.
- El contenido enlaza a repositorios, proyectos publicados y credenciales; son fuentes existentes, no validaciones realizadas durante init.
- No inventar testimonios, métricas, clientes, credenciales ni resultados para completar una propuesta de contenido.

## Product Principles

1. Ayudar a quien contrata a comprender la experiencia y encontrar cómo contactar para una entrevista.
2. Respaldar el perfil con proyectos, trayectoria y credenciales reales.
3. Explicar con honestidad la experiencia consolidada en backend y la evolución hacia AI engineering.
4. Preservar el contenido confirmado y el acceso a las versiones inglesa y española del blog.
5. Mantener el contenido fácil de actualizar y el sitio compatible con publicación estática.

## Accessibility & Inclusion

Las instrucciones del repositorio requieren HTML semántico, nombres accesibles en navegación y controles, encabezados de tabla identificados y respeto por las preferencias de movimiento reducido. Los cambios deben preservar estas garantías y el uso adaptable a distintos tamaños de pantalla. No se ha establecido una necesidad de accesibilidad adicional específica del público ni un objetivo formal de certificación WCAG.
