import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orientacion-vocacional',
  templateUrl: './orientacion-vocacional.component.html',
  styleUrls: ['./orientacion-vocacional.component.scss']
})
export class OrientacionVocacionalComponent implements OnInit {

  dataOrientacion = [
    {
      id: 0,
      title: '1. Descubrir tu Vocación',
      content: 'Muchos confundimos los conceptos de “Vocación”, “Carrera” y “Trabajo”, pensando que son lo mismo. Sin embargo, no es así. La vocación va más allá de una carrera. Se refiere a la huella que queremos dejar, nuestro “llamado interior”. TODOS tenemos un llamado, pero a veces no es fácil identificarlo.'
    },
    {
      id: 2,
      title: '2. Elegir tu Carrera',
      content: 'Otro error común es pensar que solo hay UNA carrera en específico para nosotros. Que solamente UNA carrera se puede alinear a nuestra forma de ser. La Carrera vendría siendo “el escalón” para nuestro futuro, y lo más importante es identificar “¿Qué queremos lograr?” para definir las carreras que nos acercarán a eso.'
    },
    {
      id: 3,
      title: '3. Encontrar tu trabajo ideal',
      content: 'La vida no solo se trata de trabajar, trabajar y trabajar. Para encontrar ese “trabajo ideal” es muy importante que analicemos nuestra forma de ser, nuestras fortalezas, nuestras habilidades y nuestros intereses y pasiones.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  goWhatsapp() {
    const url = 'https://api.whatsapp.com/send?phone=+51972676287&text=¡Hola!, quisiera obtener información sobre los servicios de psicología.'
    window.open(url)
  }
}
