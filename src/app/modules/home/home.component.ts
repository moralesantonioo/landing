import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
  position = 'above';
  value: string = ''
  form: FormGroup;
  loading: boolean = false;
  contador: number = 0
  notificacion: boolean = false;

  /* 
    dataContador = [
      {
        id: 1,
        img: '../../../assets/pacientes.png',
        title: 'Pacientes atendidos',
        min: 0,
        max: 1300,
      },
      {
        id: 2,
        img: '../../../assets/experiencia.png',
        title: 'Años de experiencia',
        min: 0,
        max: 7,
      },
      {
        id: 3,
        img: '../../../assets/condicion.png',
        title: 'Mejoraron su condición',
        min: 0,
        max: 90,
      },
      {
        id: 3,
        img: '../../../assets/tiktok.png',
        title: 'Seguidores en tiktok',
        min: 0,
        max: 375,
      }
    ] */

  servicios = [
    {
      id: 1,
      img: '../../../assets/t-individual.jpg',
      title: 'Terapia individual',
      url: 'servicios/teparia-individual'
    },
    {
      id: 2,
      img: '../../../assets/t-pareja.jpg',
      title: 'Terapia de pareja',
      url: 'servicios/teparia-de-parejas'
    },
    {
      id: 3,
      img: '../../../assets/t-familia.jpg',
      title: 'Terapia familiar',
      url: 'servicios/teparia-familiar'
    },
    {
      id: 4,
      img: '../../../assets/t-infantil2.jpg',
      title: 'Terapia infantil',
      url: 'servicios/teparia-infantil'
    },
    {
      id: 5,
      img: '../../../assets/t-adolecentes.jpg',
      title: 'Terapia para adolescentes',
      url: 'servicios/teparia-para-adolecentes'
    },
    {
      id: 6,
      img: '../../../assets/cursosytalleres.jpg',
      title: 'Cursos y talleres',
      url: 'servicios/cursos-talleres'
    },
    {
      id: 7,
      img: './../../../assets/capacitaciones.jpg',
      title: 'Capacitaciones',
      url: 'servicios/capacitaciones'
    },
    {
      id: 8,
      img: '../../../assets/saludmental.jpg',
      title: 'Programas de prevención y promoción de la salud mental',
      url: 'servicios/salud-mental'
    },
  ]

  agendaCita = [
    {
      img: '../../../assets/numero1.png',
      title: 'Contáctame',
      body: 'En la página web encontrarás el ícono de WhatsApp que te direccionará al chat corporativo o por medio de mis redes sociales (TikTok, Instagram y Facebook) para aclarar todas tus dudas sobre el proceso de citas.'
    },
    {
      img: '../../../assets/numero2.png',
      title: 'Agenda tu sesión en el horario que te resulte más conveniente',
      body: 'Solicita los datos de cita como medios de pago, fecha y hora a través de nuestro WhatsApp, refiere el motivo de consulta y la especialidad que estés buscando.'
    },
    {
      img: '../../../assets/numero3.png',
      title: 'Confirmación de cita e ingresa a sesión. ',
      body: 'Para la programación de su sesión deberá enviar su comprobante de pago como mínimo 1 día antes de su consulta. Enviando una foto con el comprobante de pago y los datos del evaluado (nombre completo y día/hora de cita).'
    }
  ]

  questions = [
    {
      id: '1',
      title: '¿Qué es la consulta psicológica?',
      body: 'Es la relación que establece el psicólogo con el evaluado, en donde se busca conocer la situación actual, condición y afectación que puedes estar pasando, permitiendo así recibir la orientación idónea a tu problema.'
    },
    {
      id: '2',
      title: '¿Qué es la evaluación psicológica?',
      body: 'La evaluación psicológica esta conformada por un conjunto de pruebas psicológicas psicométricas y proyectivas que nos permiten evaluar tu condición actual, brindando un diagnostico y tratamiento acorde a tus necesidades.'
    },
    {
      id: '3',
      title: '¿Qué es la terapia psicológica?',
      body: 'La terapia psicológica es el proceso en el que se aborda mediante un plan de tratamiento las necesidades y objetivos terapéuticos encontrados en el proceso de evaluación psicológico.'
    },
    {
      id: '4',
      title: '¿Qué metodología aplica en terapia?',
      body: 'Utilizamos la terapia cognitivo conductual como base siendo uno de los métodos más efectivos para usar en psicoterapia. Así mismo, trabajamos con estructuras humanistas para lograr un cambio estable en el tiempo, mejorando así la consistencia del proceso de terapia y la efectividad de la misma.'
    },
    {
      id: '5',
      title: '¿Qué es un consultorio online?',
      body: 'Es una página psicoeducativa de corte psicológico, con la misión de apoyar a todas las personas que buscan vivir mejor y cuidar de sí mismos. Estés donde estés, tienes la oportunidad de tener a un profesional que se adapte a ti, a lo que necesitas, a tus horarios y que habla en tu idioma. Ahora, trabajar en ti ya no es un lujo, sino una oportunidad que puedes tomar en 1 segundo.'
    },
    {
      id: '6',
      title: '¿Cómo sé si la consulta online es para mí?',
      body: 'Buscar apoyo profesional online es tan reconfortante que tomar una consulta presencial, esta nueva era tecnológica te invita a descubrir las herramientas que te permitan afrontar tus dificultades, y a tener un espacio para enfocarte en ti, de una manera fácil y adaptable a tus necesidad y horarios. “Estar mejor” tiene significados distintos para cada persona, porque somos únicos. Puede significar aprender a comunicarte mejor, o mejorar tu manera de encarar los retos profesionales. ¡La consulta online es para ti, sin duda alguna!'
    },
    {
      id: '7',
      title: '¿La consulta online puede sustituir las sesiones presenciales?',
      body: 'Si estás pasando por una situación donde tu seguridad o la de otras personas está en peligro, bajo una situación de emergencia o presentas un diagnóstico severo NO SUSTITUYE UNA SESIÓN PRESENCIAL, en este caso, si te recomendaría acudir a consulta presencial. '
    },
    {
      infoExtra: [
        {
          id: '1',
          title: '¿Qué voy a logra asistiendo a Terapia de Pareja?',
          body: 'La terapia de pareja entrena y guía a la pareja en nuevas habilidades de comunicación. Ayuda construir nuevas estrategias para la solución de problemas. Enseña a la pareja a expresar apropiadamente aspectos positivos como negativos. Es un espacio para superar conflictos y resentimientos. La terapia promueve y repara daños y dificultades en el entorno familiar, social y laboral de la pareja.'
        },
        {
          id: '1',
          title: '¿Cuándo acudir a Terapia de Pareja?',
          body: 'Cuando la pareja o un miembro de la pareja descubre que hay frecuentes discusiones, o infidelidades y desencuentros conyugales que alteran negativamente la comunicación. Esta realidad favorece el distanciamiento entre ambos, ocasionando insatisfacción en la relación y muchas veces malestar físico y emocional. También, cuando la pareja o un miembro de la pareja piensa o ha expresado la posibilidad de separarse, pero considera valioso intentar buscar otra alternativa antes de tomar una decisión. Es necesario asistir a terapia cuando la dinámica de la relación altera y perjudica negativamente al entorno familiar (hijos, padres, hermanos, etc.) y cuando colisiona con actividades laborales, académicas y personales.'
        },
        {
          id: '1',
          title: '¿Cómo trabaja el terapeuta de parejas?',
          body: 'Primero se escucha las necesidades de la pareja y se realiza una evaluación de los aspectos que interfieren en la relación. Se utilizan entrevistas en pareja e individuales, las cuales permitirán establecer el vínculo terapéutico para generar los objetivos a lograr.'
        }
      ]
    }
  ]

  planes = [
    {
      title: 'Plan Económico',
      subTitle: 'Plan Económico Online',
      description: 'Esta modalidad tiene una duración sólo de 30 minutos mediante video llamada de WhatsApp, Zoom o Google Meet, sin embargo, funciona muy bien para quienes desean iniciar un proceso terapéutico y cuentan con algunas limitaciones económicas.',
      time: '30 minutos',
      price: '50.00 soles',
      paquetes: []
    },
    {
      title: 'Plan Regular',
      subTitle: 'Plan Regular Online',
      description: 'Consiste en un acompañamiento psicológico mediante una video llamada de WhatsApp, o por la plataforma Zoom o Google Meet. Es vivir una experiencia terapéutica, donde estaré del otro lado de la pantalla atenta a tus necesidades, se te asignaran recomendaciones en cada sesión, podrás comunicarte con tu terapeuta vía chat en los espacios entre sesiones.',
      time: '1 hora',
      price: '80.00 soles',
      paquetes: []
    },
    {
      title: 'Paquetes Psicológicos',
      subTitle: 'Paquetes Psicológicos Online',
      description: 'Acompañamiento semanal, seguimiento de tu proceso terapéutico durante la semana con tu psicóloga de cabecera vía WhatsApp, análisis, diagnóstico, test psicológicos, ejercicios terapéuticos y recomendaciones. Mediante video llamada de WhatsApp o la plataforma de Zoom o Google Meet.',
      time: '1 hora',
      price: '',
      paquetes: [
        {
          text: 'Paquete de 2 sesiones',
          value: '140.00 soles'
        },
        {
          text: 'Paquete de 4 sesiones',
          value: '280.00 soles'
        },
        {
          text: 'Paquete de 6 sesiones',
          value: '420.00 soles'
        },
        {
          text: 'Paquete de 8 sesiones',
          value: '560.00 soles'
        }
      ]
    }
  ]

  beneficios = [
    {
      id: 1,
      title: 'Mejora tu Salud Mental',
      body: 'Al igual que tu salud física, la salud mental es prioridad para nuestro buen funcionamiento, resolución de problemas y disfrute del momento presente.'
    },
    {
      id: 2,
      title: 'Monitoreo de tu Proceso',
      body: 'Esta permitido tener conversaciones entre semana vía WhatsApp, estamos atentos a tu proceso.'
    },
    {
      id: 3,
      title: 'Horarios Flexibles',
      body: 'Si no dispones de tiempo suficiente para asistir a una terapia presencial, la terapia Online te permite horarios que se adapten a ti y a tu tiempo. '
    },
    {
      id: 4,
      title: 'Empatía y Confianza',
      body: 'Todo lo que abordes en tu proceso será confidencial, un profesional de la salud mental no te juzgará, crear un lazo terapéutico es primordial.'
    },
    {
      id: 5,
      title: 'Directo a la Raíz',
      body: 'Atacamos la raíz del conflicto para que así los resultados se evidencien a largo plazo y generen un cambio significativo en tu vida.'
    },
    {
      id: 6,
      title: 'Asesoramiento Personalizado',
      body: 'Todo en tu proceso será enfocado en ti, adaptándose a tus necesidades y objetivos personales.'
    }
  ]

  data = {
    name: '',
    email: '',
    telefono: '',
    mensaje: ''
  }

  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      mensaje: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    /* setInterval(() => {
      this.dataContador.map((res) => {
        if (res.min < res.max) {
          res.min++
        }
      })
    }, 40) */
  }

  onKey(event: any) {
    this.contador = event.target.value.length
  }

  enviarData() {
    this.loading = true;
    this.notificacion = true;
    this.http.post('https://formspree.io/f/xzbqpkaz', this.form.value).subscribe((res: any) => {
      this.loading = false;
      setTimeout(() => {
        this.notificacion = false;
      }, 3000)
      if (res.ok) {
        this.form.reset();
        this.contador = 0;
      }
    })
  }


  goWhatsapp() {
    const url = 'https://api.whatsapp.com/send?phone=+51972676287&text=¡Hola!, quisiera obtener información sobre los servicios de psicología.'
    window.open(url)
  }

  moreInformation(url: any) {
    console.log(url, 'url')
    this.router.navigate([url]);
  }
}
