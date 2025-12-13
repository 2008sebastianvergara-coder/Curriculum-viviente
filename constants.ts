import { ResumeData } from './types';

export const mockResumeData: ResumeData = {
  personalInfo: {
    name: "Jorge Agustín Rosales Salas",
    title: "PhD en Sistemas de Ingeniería | Investigador",
    tagline: "Especialista en uso, valor y pobreza del tiempo, políticas públicas y optimización.",
    location: "Santiago, Chile",
    email: "jorge@jorgerosales.cl",
    phone: "+56984106372",
    about: "Doctor en Sistemas de Ingeniería por la Universidad de Chile con trayectoria consolidada en investigación interdisciplinaria. Mi foco está en la economía, políticas públicas y análisis cuantitativo. He liderado centros de investigación y programas académicos innovadores como los Proyectos VIP. Me apasiona modelar cómo las personas valoran y utilizan su recurso más escaso: el tiempo.",
    avatarUrl: "https://i.postimg.cc/KjjC6Y6K/1704991759135.jpg", 
    cvUrl: "https://drive.google.com/file/d/1zVoyHbTdPAPnRWV6nXHSpd3NgiS4GtQW/view?usp=sharing",
    linkedinUrl: "https://www.linkedin.com/in/jorge-rosales-salas-58817020/",
    xUrl: "https://x.com/jrosalessalas"
  },
  stats: {
    yearsExperience: 18, 
    papersPublished: 25, 
    thesesSupervised: 15, 
    awardsWon: 23, 
  },
  highlightBook: {
    title: "Sistema Nacional de Ocio para Chile",
    subtitle: "Doctor Tiempo",
    description: "Una obra transformadora que explora la importancia del tiempo libre, el bienestar y la calidad de vida en nuestra sociedad. Este libro propone un Sistema Nacional de Ocio fundamentado en experiencias internacionales para garantizar el acceso equitativo a los beneficios del tiempo libre, especialmente relevante ante la reducción de la jornada laboral.",
    downloadUrl: "https://drive.google.com/file/d/1kePTX-loIPK7SNK4-JSDOtaEuNYM_qK1/view?usp=sharing",
    coverUrl: "https://i.postimg.cc/NFLfdBb4/image.png"
  },
  highlightManual: {
    title: "Manual de Planificación Estratégica para Instituciones de Salud",
    subtitle: "Editores: Jorge Rosales Salas, PhD & Dr. Sebastián Pizarro",
    description: "Una guía integral diseñada para equipos directivos y profesionales de la salud que busca transformar la planificación en una práctica viva. Ofrece herramientas rigurosas para diseñar, implementar y evaluar procesos estratégicos orientados a resultados clínicos, organizacionales y sociales en entornos de alta incertidumbre.",
    downloadUrl: "https://drive.google.com/file/d/1AOQBldDyOxo5IdhwIFbBZpGv-X496w7S/view?usp=sharing",
    webUrl: "https://manualestrategicodesalud.cl/",
    coverUrl: "https://i.postimg.cc/W1rpQ8ZY/image.png"
  },
  skills: [
    { name: "Microeconomía & Macroeconomía", level: 95, category: "core" },
    { name: "Políticas Públicas", level: 90, category: "core" },
    { name: "Modelación de Uso del Tiempo", level: 100, category: "core" },
    { name: "Data Mining / Análisis Cuantitativo", level: 85, category: "methodology" },
    { name: "Diseño Curricular", level: 90, category: "methodology" },
    { name: "Liderazgo Académico", level: 85, category: "soft" },
    { name: "Docencia Universitaria", level: 95, category: "soft" },
  ],
  education: [
    {
      id: "edu-1",
      degree: "PhD en Sistemas de Ingeniería",
      institution: "Universidad de Chile",
      year: "2015",
      details: ["Ranking 1 de egreso", "Tesis: Modelación y valoración del uso del tiempo: hacia un enfoque integrado."]
    },
    {
      id: "edu-2",
      degree: "Magíster en Ciencias de la Administración, mención Finanzas",
      institution: "Universidad del Desarrollo",
      year: "2009",
      details: ["Distinción máxima y ranking 1 de egreso"]
    },
    {
      id: "edu-3",
      degree: "Ingeniero Civil Industrial",
      institution: "Universidad del Desarrollo",
      year: "2007",
      details: ["Distinción máxima y ranking 1 de egreso"]
    },
    {
      id: "edu-4",
      degree: "Minor en Ciencias Políticas",
      institution: "Universidad del Desarrollo",
      year: "2007",
      details: ["Facultad de Gobierno"]
    }
  ],
  honors: [
    { id: "h-23", title: "Global Young Academy membership", institution: "Global Young Academy", year: "2023" },
    { id: "h-22", title: "Luksic Scholar", institution: "Sciences Po, París", year: "2022" },
    { id: "h-20", title: "Runner up '8th way to think like a 21th century economist'", institution: "Global Contest", year: "2020" },
    { id: "h-18-1", title: "Investigador Responsable FONDECYT Iniciación", institution: "ANID/CONICYT", year: "2018" },
    { id: "h-18-2", title: "Beca Iberoamérica Jóvenes Profesores e Investigadores", institution: "Santander Universidades", year: "2018" },
    { id: "h-16", title: "Investigador Responsable FONDECYT Postdoctorado", institution: "ANID/CONICYT", year: "2016" },
    { id: "h-15", title: "Ranking 1° de egreso Doctorado", institution: "Universidad de Chile", year: "2015" },
    { id: "h-13-1", title: "Beca asistencia IATUR training workshop", institution: "SPM / IATUR / IAFFE (Brasil)", year: "2013" },
    { id: "h-13-2", title: "Beca asistencia 35th IATUR Conference", institution: "Centre for Time Use Research (CTUR)", year: "2013" },
    { id: "h-12", title: "Beca Pasantía Doctoral en el Extranjero", institution: "BECAS CHILE - CONICYT (Bélgica)", year: "2012" },
    { id: "h-09-1", title: "Beca Doctorado Nacional", institution: "CONICYT", year: "2009–2013" },
    { id: "h-09-2", title: "Distinción Máxima Magíster", institution: "Universidad del Desarrollo", year: "2009" },
    { id: "h-09-3", title: "Ranking 1° de egreso Magíster", institution: "Universidad del Desarrollo", year: "2009" },
    { id: "h-09-4", title: "Beca Excelencia Académica Magíster", institution: "Universidad del Desarrollo", year: "2008–2009" },
    { id: "h-08", title: "Beca Conferencia Internacional Michael Porter", institution: "Santiago, Chile", year: "2008" },
    { id: "h-07-1", title: "Distinción Máxima Ingeniería Civil Industrial", institution: "Universidad del Desarrollo", year: "2007" },
    { id: "h-07-2", title: "Ranking 1° de egreso Ingeniería Civil Industrial", institution: "Universidad del Desarrollo", year: "2007" },
    { id: "h-07-3", title: "Beca Embajadores del Futuro (China)", institution: "Delegación Académica", year: "2007" },
    { id: "h-07-4", title: "Beca Excelencia Académica Pregrado", institution: "Universidad del Desarrollo", year: "2002–2007" },
    { id: "h-06", title: "Beca Intercambio University of Nottingham", institution: "Universidad del Desarrollo", year: "2005-2006" },
    { id: "h-04", title: "Beca Conferencia Nobel Physics Laureates", institution: "Lindau, Alemania", year: "2004" },
    { id: "h-03", title: "Premio Mejor Alumno Promoción", institution: "Universidad del Desarrollo", year: "2003" },
    { id: "h-02", title: "Premio Mejor Alumno Promoción", institution: "Universidad del Desarrollo", year: "2002" }
  ],
  experience: [
    {
      id: "job-1",
      role: "Director del Centro de Innovación y Desarrollo en Ingeniería Aplicada (CIDIA)",
      company: "Universidad Finis Terrae",
      period: "2025 – Presente",
      description: "Liderazgo estratégico del centro de investigación, fomentando el desarrollo científico y tecnológico en ingeniería.",
      achievements: ["Gestión de investigación aplicada.", "Desarrollo de proyectos interdisciplinarios."],
      type: "management"
    },
    {
      id: "job-2",
      role: "Académico Investigador",
      company: "Universidad Finis Terrae",
      period: "2025 – Presente",
      description: "Investigación en Ingeniería Civil Industrial y docencia de pregrado.",
      achievements: [],
      type: "academic"
    },
    {
      id: "job-3",
      role: "Director de Proyectos Verticalmente Integrados (VIP)",
      company: "Universidad Mayor",
      period: "2020 – 2024",
      description: "Director del programa internacional de docencia investigativa e innovación educativa.",
      achievements: ["Implementación de estrategias para fortalecer la investigación interdisciplinaria.", "Coordinación Facultad de Estudios Interdisciplinarios."],
      type: "management"
    },
    {
      id: "job-4",
      role: "Profesor Asistente e Investigador",
      company: "Universidad Mayor (Centro de Economía y Políticas Sociales)",
      period: "2017 – 2024",
      description: "Investigación académica y docencia en el área de economía y políticas sociales.",
      achievements: ["Encuesta de Uso de Tiempo Académicos (2023)", "Proyectos InES Género"],
      type: "academic"
    },
    {
      id: "job-5",
      role: "Director de Investigación",
      company: "Universidad Bernardo O'Higgins (Escuela Ingeniería Comercial)",
      period: "2017",
      description: "Dirección de investigación y fomento de productividad científica.",
      achievements: [],
      type: "management"
    },
    {
      id: "job-6",
      role: "Investigador Postdoctoral",
      company: "Universidad de los Andes",
      period: "2015 – 2017",
      description: "Investigación en Facultad de Ingeniería y Ciencias Aplicadas.",
      achievements: [],
      type: "academic"
    }
  ],
  researchProjects: [
    {
      id: "res-1",
      title: "TIME USE IN CHILE: NEW MODELING FRAMEWORKS AND SURVEY APPLICATION",
      role: "Investigador Responsable",
      source: "FONDECYT INICIACION",
      year: "2018 – 2021"
    },
    {
      id: "res-2",
      title: "TIME USE VALUATION USING DATA MINING TECHNIQUES",
      role: "Investigador Responsable",
      source: "FONDECYT POSTDOCTORADO",
      year: "2015 – 2017"
    },
    {
      id: "res-3",
      title: "ENCUESTA NACIONAL DE USO DE TIEMPO Y BIENESTAR PARA LA COMUNIDAD LGBTQIANB+ EN CHILE",
      role: "Investigador Principal",
      source: "Red Diversa / OTD",
      year: "2022"
    }
  ],
  publications: [
    {
      id: "pub-9",
      title: "The job of public transport, ride-hailing and delivery drivers: Conditions during the COVID-19 pandemic and implications for a post-pandemic future",
      type: "paper",
      year: "2023",
      authors: "Fielbaum, A., Ruiz, F., Boccardo, G., Rubio, D., Tirachini, A., Rosales-Salas, J.",
      link: "https://drive.google.com/file/d/1XR8qHpWwd2UiNEBAs1ogO4EvwfaKxBgl/view?usp=sharing"
    },
    {
      id: "pub-8",
      title: "Pobreza de tiempo, género y vivienda social en Santiago de Chile. Un análisis cualitativo",
      type: "paper",
      year: "2022",
      authors: "Castillo, M., Sanhueza, C., Rosales-Salas, J., & Sandoval, D.",
      link: "https://drive.google.com/file/d/18xRY-2hXELBw61L1CkvGMOIMd6nrCg-S/view?usp=sharing"
    },
    {
      id: "pub-7",
      title: "Socio-demographic patterns of public, private and active travel in Latin America: Cross-sectional findings from the ELANS study",
      type: "paper",
      year: "2020",
      authors: "Rosales-Salas, J. et al.",
      link: "https://drive.google.com/file/d/1kUqu7ptrVJJBxB25-UE1MESrX1nUly_e/view?usp=sharing"
    },
    {
      id: "pub-6",
      title: "Time use: The role of sleep",
      type: "paper",
      year: "2020",
      authors: "Jara-Díaz, S., and Rosales-Salas, J.",
      link: "https://drive.google.com/file/d/1tdAB6uY6LMBnAfMsrbsyfgG4J6eHNoVW/view?usp=sharing"
    },
    {
      id: "pub-5",
      title: "Mining sequences in activities for time use analysis",
      type: "paper",
      year: "2019",
      authors: "Rosales-Salas, J.",
      link: "https://drive.google.com/file/d/1-zndQP4nmCUJpqqjW6mjoAxh-Sk1BzlK/view?usp=sharing"
    },
    {
      id: "pub-4",
      title: "Understanding time use via data mining: A clustering-based framework",
      type: "paper",
      year: "2018",
      authors: "Rosales-Salas, J.",
      link: "https://drive.google.com/file/d/1qhqpbrsJmeUVIYofAlOv2_clnuf9mc8X/view?usp=sharing"
    },
    {
      id: "pub-3",
      title: "A time allocation model considering external providers",
      type: "paper",
      year: "2017",
      authors: "Rosales-Salas, J.",
      link: "https://drive.google.com/file/d/1k97bRhi9l9Ka82_BbdGvdH8LiBg9-XEz/view?usp=sharing"
    },
    {
      id: "pub-2",
      title: "Beyond transport time: A review of time use modeling",
      type: "paper",
      year: "2017",
      authors: "Rosales-Salas, J.",
      link: "https://drive.google.com/file/d/1IY80S2R6xcD1xy3KwOiFmNKlF_xw8XMo/view?usp=sharing"
    },
    {
      id: "pub-1",
      title: "Understanding time use: Daily or weekly data?",
      type: "paper",
      year: "2015",
      authors: "Rosales-Salas, J.",
      link: "https://drive.google.com/file/d/12ol1TalYCjWvnd02J7Od51VAlZRqDgAS/view?usp=sharing"
    }
  ],
  conferences: [
    {
      id: "conf-22-1",
      title: "¿Por qué las 40 horas?",
      event: "Mesa técnica de las 40 horas del Ministerio del Trabajo",
      location: "Chile",
      year: "2022"
    },
    {
      id: "conf-22-2",
      title: "Teletrabajo y tiempo de trabajo",
      event: "Mesa técnica de la ley de Conciliación Laboral, Ministerio del Trabajo",
      location: "Chile",
      year: "2022"
    },
    {
      id: "conf-22-3",
      title: "Reducción del Empleo",
      event: "Primera Cumbre Mundial de la Semana Laboral de 4 Días",
      location: "Valencia, España",
      year: "2022"
    },
    {
      id: "conf-19-1",
      title: "Time Poverty in Chile",
      event: "41th IATUR Conference on Time Use Research",
      location: "Washington, D.C., USA",
      year: "2019"
    },
    {
      id: "conf-17-1",
      title: "Time Use Modeling: The role of Sleep",
      event: "39th IATUR Conference on Time Use Research",
      location: "Madrid, España",
      year: "2017"
    },
    {
      id: "conf-16-1",
      title: "Internal and external domestic work within time use modeling",
      event: "38th IATUR Conference on Time Use Research",
      location: "Seúl, Corea del Sur",
      year: "2016"
    },
    {
      id: "conf-16-2",
      title: "A time allocation model considering external providers",
      event: "ITEA Annual Conference and School on Transportation Economics",
      location: "Santiago, Chile",
      year: "2016"
    },
    {
      id: "conf-15-1",
      title: "Time Use Modeling: Towards and extended framework",
      event: "IV Encuentro de Investigación de Estudiantes de Postgrado (U. Bío Bío)",
      location: "Concepción, Chile",
      year: "2015"
    },
    {
      id: "conf-14-1",
      title: "Medir, modelar y valorar el uso del tiempo: ¿Para qué sirve?",
      event: "Universidad de Concepción",
      location: "Concepción, Chile",
      year: "2014"
    },
    {
      id: "conf-14-2",
      title: "Definición del tipo de investigación a realizar y Formulación de la hipótesis",
      event: "Primer Simposio de Metodología de la Investigación (U. San Sebastián)",
      location: "Concepción, Chile",
      year: "2014"
    },
    {
      id: "conf-14-3",
      title: "Time Use Modeling: a Multidisciplinary Review",
      event: "Fourth Time Use Observatory (TUO 4)",
      location: "Marchihue, Chile",
      year: "2014"
    },
    {
      id: "conf-14-4",
      title: "Time Use Databases: What do we have?",
      event: "Fourth Time Use Observatory (TUO 4)",
      location: "Marchihue, Chile",
      year: "2014"
    },
    {
      id: "conf-13-1",
      title: "The role of the observation period in a better understanding of time use",
      event: "35th Conference of the IATUR",
      location: "Rio de Janeiro, Brasil",
      year: "2013"
    },
    {
      id: "conf-13-2",
      title: "Modeling the value of time",
      event: "35th Conference of the IATUR",
      location: "Rio de Janeiro, Brasil",
      year: "2013"
    },
    {
      id: "conf-13-3",
      title: "Promoting policy applications of time use research",
      event: "35th Conference of the IATUR",
      location: "Rio de Janeiro, Brasil",
      year: "2013"
    },
    {
      id: "conf-13-4",
      title: "Households’ food consumption patterns, convenience orientation and meal practices",
      event: "35th Conference of the IATUR",
      location: "Rio de Janeiro, Brasil",
      year: "2013"
    },
    {
      id: "conf-13-5",
      title: "Gender egalitarian beliefs, gender egalitarian time-use?",
      event: "35th Conference of the IATUR",
      location: "Rio de Janeiro, Brasil",
      year: "2013"
    },
    {
      id: "conf-13-6",
      title: "Examining the observation period of data regarding time-use research",
      event: "Vrije Universiteit Brussel",
      location: "Bruselas, Bélgica",
      year: "2013"
    },
    {
      id: "conf-12-1",
      title: "RIE²: Ampliando las expectativas profesionales del estudiante de Ingeniería",
      event: "XXV Congreso Chileno de Educación en Ingeniería SOCHEDI",
      location: "Antofagasta, Chile",
      year: "2012"
    },
    {
      id: "conf-12-2",
      title: "Vives la U: ¿Y luego qué?",
      event: "Facultad de Odontología, Universidad San Sebastián",
      location: "Concepción, Chile",
      year: "2012"
    },
    {
      id: "conf-12-3",
      title: "Saldrás de la U: ¿Y luego qué?",
      event: "Universidad Católica de Temuco",
      location: "Temuco, Chile",
      year: "2012"
    },
    {
      id: "conf-12-4",
      title: "Understanding time use: daily or weekly data?",
      event: "Third Time Use Observatory (TUO 3)",
      location: "Santiago, Chile",
      year: "2012"
    }
  ],
  personalProjects: [
    {
      id: "pp-1",
      title: "TimeAllocator AI",
      description: "Herramienta basada en Python y TensorFlow para optimizar agendas personales utilizando algoritmos de uso del tiempo derivados de mi investigación doctoral.",
      techStack: ["Python", "TensorFlow", "React", "FastAPI"],
      githubUrl: "https://github.com/jorgerosales/time-allocator"
    },
    {
      id: "pp-2",
      title: "Santiago Transit Viz",
      description: "Visualización interactiva de patrones de movilidad en Santiago post-pandemia utilizando D3.js y datos públicos de transporte.",
      techStack: ["JavaScript", "D3.js", "Mapbox GL"],
      githubUrl: "https://github.com/jorgerosales/santiago-transit"
    },
    {
      id: "pp-3",
      title: "Academic Paper Parser",
      description: "Utilidad de procesamiento de lenguaje natural (NLP) para extraer y resumir automáticamente hallazgos clave de papers académicos en formato PDF.",
      techStack: ["Python", "NLTK", "OpenAI API"],
      githubUrl: "https://github.com/jorgerosales/paper-parser"
    }
  ]
};