
export const knowledgeBase = {
  book: {
    title: "Sistema Nacional de Ocio para Chile",
    content: `
      AUTOR: Jorge Rosales-Salas.
      RESUMEN: Una obra transformadora que explora la importancia del tiempo libre, el bienestar y la calidad de vida en nuestra sociedad. Propone un Sistema Nacional de Ocio fundamentado en experiencias internacionales para garantizar el acceso equitativo a los beneficios del tiempo libre.
      
      TEMAS CLAVE:
      1. Importancia del ocio: Fundamental para la salud mental, física y el desarrollo personal.
      2. Contexto Chileno: Diversidad geográfica, desigualdad en acceso a ocio, falta de espacios públicos de calidad.
      3. Oportunidades: Inclusión social, desarrollo local/regional, fortalecimiento de la interculturalidad.
      4. Pobreza de tiempo: Falta de tiempo libre debido a demandas laborales y de cuidado. Impacto en salud y bienestar.
      5. Sistema Nacional de Cuidados: Interconexión necesaria para liberar tiempo, especialmente para mujeres.
      6. Componentes del Sistema: Red de espacios públicos, programas recreativos, integración con educación/trabajo, medidas de inclusión.
      7. Género y Ocio: Abordar desigualdades, promover equidad, corresponsabilidad en cuidados.
      8. Sostenibilidad: Promover prácticas ambientales sostenibles, economía circular en el ocio.
      9. Tecnología: Uso de IA, realidad virtual, y herramientas digitales para promover y gestionar el ocio.
      10. Financiamiento: Recursos públicos, privados, internacionales y mecanismos innovadores.
      
      PROPUESTA CENTRAL: Implementar un sistema que articule políticas públicas, infraestructura y programas para democratizar el ocio como un derecho, no un privilegio, especialmente ante la reducción de la jornada laboral a 40 horas.
    `
  },
  manual: {
    title: "Manual de Planificación Estratégica para Instituciones de Salud",
    content: `
      EDITORES: Jorge Rosales Salas, PhD & Dr. Sebastián Pizarro.
      RESUMEN: Guía integral para equipos directivos y profesionales de la salud para transformar la planificación en una práctica viva.
      
      CONTENIDOS PRINCIPALES:
      1. Importancia: La planificación estratégica en salud es crítica por su impacto en la vida y dignidad de las personas. Permite definir misión, priorizar objetivos y asignar recursos racionalmente.
      2. Diferencias Público/Privado:
         - Público: Misión sanitaria central, alta complejidad institucional, entornos politizados, lógica de red asistencial.
         - Privado: Sostenibilidad financiera, competitividad, fidelización, pero convergiendo hacia responsabilidad social y calidad.
      3. Marco Conceptual: Definición operativa sectorial, principios de gestión moderna (centrado en personas, gobernanza clínica, integración).
      4. Metodología: Ciclo de planificación (Diagnóstico -> Formulación -> Plan Operativo -> Implementación -> Seguimiento -> Evaluación).
      5. Diagnóstico: Análisis PESTEL (entorno externo), FODA, caracterización institucional.
      6. Formulación: Misión, Visión, Valores. Objetivos estratégicos (SMART).
      7. Herramientas: Balanced Scorecard (BSC) adaptado a salud, Mapas estratégicos, Carta Gantt.
      8. Indicadores (KPI): De proceso, resultado, eficiencia, calidad clínica, satisfacción usuaria.
      9. Resiliencia: Capacidad de absorción, adaptación y transformación ante crisis (ej. pandemias).
      10. Liderazgo: Transformacional, distribuido y clínico-lateral. Importancia de la comunicación interna.
    `
  },
  papers: [
    {
      title: "Mining sequences in activities for time use analysis",
      year: "2020",
      journal: "Intelligent Data Analysis",
      content: `
        Autores: Jorge Rosales-Salas, Sebastián Maldonado, Alex Seret.
        Resumen: Propone un marco de minería de datos (algoritmo Generalized Sequential Pattern - GSP) para analizar secuencias de actividades en encuestas de uso del tiempo (ATUS 2003-2012).
        Hallazgos:
        - Las secuencias revelan patrones complejos que el análisis descriptivo ignora.
        - Actividades "ancla": Dormir y trabajar estructuran el día.
        - Patrones detectados: "Viajar al trabajo" precede al trabajo (obvio pero cuantificado). Comer o snacks sucede frecuentemente después del trabajo.
        - Diferencias fin de semana: Las siestas (sleep) aumentan significativamente y se asocian a ver TV.
        - Clustering: Se identificaron 15 clústeres homogéneos. Variables clave: empleo, género, hijos. El género no fue tan influyente en el modelo general de sueño como se pensaba, pero sí el empleo.
      `
    },
    {
      title: "Socio-demographic patterns of public, private and active travel in Latin America (ELANS)",
      year: "2020",
      journal: "Journal of Transport & Health",
      content: `
        Autores: Gerson Luis de Moraes Ferrari, Jorge Rosales-Salas, et al.
        Resumen: Análisis del transporte público, privado y activo en 8 países de Latam (ELANS, n=9218).
        Hallazgos:
        - Transporte privado (48.2%) y público (34.9%) dominan. Transporte activo (caminar/bicicleta) es bajo (17% del tiempo total).
        - Venezuela: Mayor uso de transporte público (48.4%).
        - Perú: Mayor uso de transporte privado (52.5%).
        - Costa Rica: Mayor transporte activo (caminar 14.8%, bicicleta 12.2%).
        - Género: Mujeres caminan más que los hombres (12.6% vs 9.8%). Hombres usan más bicicleta (7.1% vs 3.1%).
        - Conclusión: Promover infraestructura para transporte activo es crucial para la salud pública en la región.
      `
    },
    {
      title: "The job of public transport, ride-hailing and delivery drivers: Conditions during COVID-19",
      year: "2023",
      journal: "Travel Behaviour and Society",
      content: `
        Autores: Andrés Fielbaum, Felipe Ruiz, Giorgio Boccardo, Daniela Rubio, Alejandro Tirachini, Jorge Rosales-Salas.
        Resumen: Encuesta a conductores en Santiago durante la pandemia.
        Hallazgos:
        - Precarización: Conductores de apps (Uber, Rappi) sufrieron más que los de transporte público (contratos formales).
        - Ride-hailing: Demanda cayó drásticamente, muchos perdieron el trabajo o se cambiaron a delivery.
        - Delivery: Aumentó la demanda pero bajaron los ingresos por hora. Mayor agotamiento y estrés.
        - Riesgo COVID: 2/3 de conductores de pasajeros (buses/apps) reportaron llevar pasajeros con síntomas sospechosos.
        - Satisfacción laboral: Cayó significativamente, especialmente en delivery.
        - Recomendación: Necesidad urgente de regular el trabajo de plataformas para brindar protección social.
      `
    },
    {
      title: "Time use: The role of sleep",
      year: "2020",
      journal: "Transportation Research Part A",
      content: `
        Autores: Sergio R. Jara-Díaz, Jorge Rosales-Salas.
        Resumen: Modelo microeconómico que trata el sueño como una decisión endógena, no fija.
        Conceptos Clave:
        - El sueño afecta la productividad (salarios) y la percepción (utilidad de otras actividades).
        - Alerta: El sueño produce "alerta", que mejora el disfrute del ocio y el rendimiento laboral.
        - Valor del sueño: Tiene un valor total que iguala al valor del ocio en el margen óptimo.
        - Relaciones técnicas: Actividades que inducen sueño (ej. ejercicio) o consumo que induce sueño (ej. medicamentos).
        - Conclusión: Dormir no es "tiempo perdido", es una inversión en alerta y productividad. Modelar el sueño endógenamente mejora la estimación del valor del tiempo.
      `
    },
    {
      title: "Understanding time use: Daily or weekly data?",
      year: "2015",
      journal: "Transportation Research Part A",
      content: `
        Autores: Sergio Jara-Díaz, Jorge Rosales-Salas.
        Resumen: Analiza la duración óptima de las encuestas de uso del tiempo (diarios de vida).
        Hallazgos:
        - Comparación de encuestas de 1, 2, 3 y 7 días.
        - Variabilidad: Los días de semana son similares entre sí, pero el fin de semana es muy distinto.
        - Recomendación: Una encuesta de 2 o 3 días (que incluya días de semana y fin de semana ponderados) es un sustituto adecuado y más barato que una encuesta de 7 días completa para modelar el ciclo trabajo-ocio.
      `
    },
    {
      title: "A time allocation model considering external providers",
      year: "2017",
      journal: "Transportation Research Part B",
      content: `
        Autores: Jorge Rosales-Salas, Sergio R. Jara-Díaz.
        Resumen: Extiende el modelo de uso del tiempo para incluir la contratación de ayuda externa (servicio doméstico, niñeras).
        Hallazgos:
        - Actividades productivas vs. improductivas (ocio). Las productivas (limpiar, cocinar) se pueden delegar.
        - Si se ignora la posibilidad de contratar ayuda, se sobreestima el valor del tiempo de ocio.
        - El valor del trabajo doméstico propio no es necesariamente igual al salario de mercado ni al salario de la empleada, es un valor sombra interno influenciado por ambos.
        - Aplicación: Datos de Holanda (LISS panel) sobre cuidado de niños.
      `
    },
    {
      title: "Beyond transport time: A review of time use modeling",
      year: "2017",
      journal: "Transportation Research Part A",
      content: `
        Autores: Sergio Jara-Díaz, Jorge Rosales-Salas.
        Resumen: Revisión exhaustiva de la literatura de modelación de uso del tiempo.
        Clasificación:
        - Histórica: Desde estudios soviéticos y americanos en 1920 hasta hoy.
        - Disciplinaria: Sociología, Economía, Transporte, Psicología.
        - Analítica: Descriptiva vs. Modelos Microeconómicos vs. Modelos Basados en Actividades.
        - Conclusión: Existe una desconexión entre disciplinas. Se propone integrar enfoques (ej. restricciones técnicas de consumo de bienes y tiempo) para enriquecer los modelos de transporte.
      `
    },
    {
      title: "Pobreza de tiempo, género y vivienda social en Santiago de Chile",
      year: "2022",
      journal: "EURE",
      content: `
        Autores: Mayarí Castillo, Claudia Sanhueza, Jorge Rosales-Salas, Diego Sandoval.
        Resumen: Estudio cualitativo en Bajos de Mena (Puente Alto).
        Hallazgos:
        - Pobreza de tiempo: Falta de tiempo para descanso y ocio debido a largas jornadas laborales y de traslado.
        - Género: Las mujeres sufren más pobreza de tiempo por la "doble jornada" (trabajo remunerado + cuidados/doméstico).
        - Vivienda Social: La segregación espacial (lejanía) aumenta los tiempos de viaje, exacerbando la pobreza de tiempo.
        - Estrategias: Las mujeres a menudo abandonan el mercado laboral formal por trabajos informales precarios en el barrio para conciliar cuidados.
        - Conclusión: El tiempo es un recurso crítico para el bienestar que está mal distribuido territorial y socialmente.
      `
    }
  ]
};
