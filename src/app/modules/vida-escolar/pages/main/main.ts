import { Component } from '@angular/core';

interface Evento {
  titulo: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.sass',
  
})

export class Main  {

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  eventos: Evento[] = [
    {
      titulo: 'Proyecto Humanidades',
      descripcion: 'El Proyecto de Humanidades de nuestro colegio representa un compromiso apasionado con la excelencia académica y el desarrollo integral de nuestros estudiantes, centrándose específicamente en la potenciación de habilidades comunicativas en español e inglés. Este enfoque innovador no solo busca fortalecer la capacidad lingüística de los alumnos, sino también cultivar su capacidad para expresarse de manera efectiva, tanto de manera oral como escrita, en ambas lenguas. A través de una combinación de lecturas, debates, proyectos y actividades creativas, el proyecto de humanidades crea un entorno estimulante donde los estudiantes pueden explorar y perfeccionar sus habilidades comunicativas, fomentando el pensamiento crítico y la expresión artística. Además de proporcionar una sólida base en las lenguas española e inglesa, el Proyecto de Humanidades busca inspirar la apreciación por la diversidad cultural y la riqueza de la expresión humana. Los estudiantes se sumergirán en obras literarias significativas, participarán en discusiones enriquecedoras y desarrollarán proyectos creativos que no solo refuercen sus habilidades lingüísticas, sino que también los preparen para enfrentar desafíos en un mundo globalizado. Al centrarse en la comunicación efectiva en dos idiomas clave, este proyecto aspira a equipar a nuestros estudiantes con las herramientas necesarias para prosperar en un entorno académico y profesional cada vez más interconectado y multicultural.',
      imagen: 'assets/eventos/estudiante.jpg'
    },
    {
      titulo: 'Proyecto Democracia',
      descripcion: 'El proyecto de democracia en nuestro colegio se fundamenta en la creación y fortalecimiento del gobierno escolar como una plataforma para la participación activa y democrática de los estudiantes en la toma de decisiones. Este sistema busca fomentar la inclusión, la representatividad y el respeto por la diversidad de opiniones dentro de nuestra comunidad estudiantil. A través del gobierno escolar, los estudiantes tienen la oportunidad de expresar sus inquietudes, plantear propuestas y contribuir de manera significativa al desarrollo de políticas y actividades que afectan directamente su entorno educativo. El gobierno escolar no solo actúa como un medio para la voz estudiantil, sino también como una herramienta pedagógica que promueve la educación cívica y la formación de líderes responsables. Los estudiantes participantes en este proceso aprenden sobre el funcionamiento de la democracia, el valor de la responsabilidad y la importancia de trabajar en conjunto para el bien común. A través de elecciones transparentes y un proceso de toma de decisiones inclusivo, nuestro proyecto de democracia en el colegio busca cultivar ciudadanos activos y comprometidos con la construcción de un ambiente educativo que refleje los valores de participación, equidad y respeto mutuo.',
      imagen: 'assets/eventos/ciencia.jpg'
    },
    {
      titulo: 'Proyecto Tiempo Libre',
      descripcion: 'Nuestro proyecto de tiempo libre en el colegio se centra en proporcionar a los estudiantes un espacio enriquecedor y diverso que promueva su desarrollo integral. Reconocemos la importancia del deporte como elemento clave para fomentar la salud física y mental, así como para cultivar valores como el trabajo en equipo, la disciplina y la resiliencia. A través de la inauguración deportiva, pretendemos no solo celebrar la diversidad de disciplinas deportivas disponibles, sino también crear un ambiente de entusiasmo y participación, inspirando a los estudiantes a explorar nuevas actividades y a mantener un estilo de vida activo y saludable. Además de la práctica deportiva, nuestro proyecto incluye la implementación de pausas activas durante la jornada escolar, proporcionando momentos estratégicos para que los estudiantes se involucren en actividades físicas lúdicas que estimulen su energía y concentración. Paralelamente, hemos diseñado talleres de alimentación saludable que buscan educar a los estudiantes sobre la importancia de una dieta equilibrada, nutrición adecuada y hábitos alimenticios conscientes. A través de estas iniciativas, aspiramos a inculcar hábitos de vida saludables que perduren a lo largo de la vida de los estudiantes, contribuyendo así a su bienestar general y al desarrollo de una comunidad educativa comprometida con la salud y el bienestar.',
      imagen: 'assets/eventos/cultural.jpg'
    },
    {
      titulo: 'Proyecto Prevención De Riesgos',
      descripcion: 'El proyecto de prevención del riesgo y cambio climático en nuestro colegio es una iniciativa crucial para salvaguardar la seguridad y bienestar de nuestra comunidad educativa. En un mundo cada vez más afectado por eventos climáticos extremos, es imperativo que adoptemos medidas proactivas para mitigar los riesgos asociados. En este contexto, los simulacros contra desastres naturales se erigen como piedra angular de nuestra estrategia, permitiendo a estudiantes, personal y padres de familia practicar protocolos de emergencia de manera regular. La capacidad de reacción rápida y coordinada adquirida a través de estos simulacros no solo protege vidas, sino que también fortalece la resiliencia de nuestra institución ante eventos imprevisibles. Además, la identificación de riesgos y vulnerabilidades específicas en nuestra infraestructura y entorno inmediato es esencial para personalizar y perfeccionar nuestras medidas preventivas. A través de evaluaciones exhaustivas, podremos anticipar posibles amenazas, ya sean fenómenos climáticos, sismos u otros eventos naturales, y diseñar estrategias adaptativas que minimicen el impacto en la integridad física y la seguridad de todos los miembros de la comunidad educativa. Este enfoque proactivo no solo protege el presente, sino que sienta las bases para un futuro más seguro y sostenible para nuestro colegio.',
      imagen: 'assets/eventos/deportes.jpg'
    },
    {
      titulo: 'Proyecto Ambiente Escolar',
      descripcion: 'El proyecto ambiental escolar PRAE, se encuentra comprometido con la construcción de un entorno educativo sostenible y respetuoso con nuestro planeta. Nuestra labor se centra en la promoción de prácticas amigables con el medio ambiente, la concientización sobre la importancia de la conservación y la implementación de medidas que contribuyan a la reducción de nuestra huella ecológica. A través de programas educativos, jornadas de limpieza y proyectos colaborativos, buscamos inspirar a estudiantes, profesores y en general a toda la comunidad a adoptar hábitos responsables que no solo beneficien a nuestro colegio, sino que también generen un impacto positivo en la comunidad. El Proyecto Ambiente Escolar se fundamente como agente de cambio, alentando a todos los miembros de la comunidad educativa a unirse a esta causa. Creemos firmemente que, al trabajar juntos, podemos crear un ambiente escolar que no solo nutra mentes jóvenes, sino que también promueva un sentido profundo de responsabilidad ambiental, cultivando así líderes del mañana comprometidos con la preservación del mundo que compartimos.',
      imagen: 'assets/eventos/graduacion.jpg'
    }
  ];

  eventoSeleccionado: Evento = this.eventos[0];

  seleccionarEvento(evento: Evento): void {
    this.eventoSeleccionado = evento;
  }

}

