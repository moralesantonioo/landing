import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataEmosiones = [
    {
      id: 1,
      img: '../../../assets/feliz.png',
      title: 'Feliz',
    },
    {
      id: 2,
      img: '../../../assets/triste.png',
      title: 'Triste',
    },
    {
      id: 3,
      img: '../../../assets/enojado.png',
      title: 'Enojado',
    },
    {
      id: 3,
      img: '../../../assets/terrible.png',
      title: 'Terrible',
    }
  ]

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
  ]

  dataServicios = [
    {
      id: 1,
      img: '../../../assets/t-individual.png',
      title: 'Terapia individual',
      url: 'servicios/teparia-individual'
    },
    {
      id: 2,
      img: '../../../assets/t-pareja.png',
      title: 'Terapia de pareja',
      url: 'servicios/teparia-de-parejas'
    },
    {
      id: 3,
      img: '../../../assets/t-familia.png',
      title: 'Terapia familiar',
      url: 'servicios/teparia-familiar'
    },
    {
      id: 4,
      img: '../../../assets/t-nino2.png',
      title: 'Terapia infantil',
      url: 'servicios/teparia-infantil'
    },
    {
      id: 5,
      img: '../../../assets/t-adolecentes.png',
      title: 'Terapia para adolescentes',
      url: 'servicios/teparia-para-adolecentes'
    },
    {
      id: 6,
      img: '../../../assets/cursos-talleres.png',
      title: 'Cursos y talleres',
      url: 'servicios/cursos-talleres'
    },
    {
      id: 7,
      img: '../../../assets/capacitaciones.png',
      title: 'Capacitaciones',
      url: 'servicios/capacitaciones'
    },
    {
      id: 8,
      img: '../../../assets/t-orientacion.png',
      title: 'Programas de prevención y promoción de la salud mental',
      url: 'servicios/salud-mental'
    },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void { 
    setInterval(() => {
      this.dataContador.map((res) => {
        if(res.min < res.max){
          res.min++
        }
      })    
    }, 40)
    
  }

  goWhatsapp() {
    const url = 'https://api.whatsapp.com/send?phone=+51972676287&text=¡Hola!, quisiera obtener información sobre los servicios de psicología.'
    window.open(url)
  }

  goServices(url:any){
    console.log(url, 'url')
    this.router.navigate([url]);
  }
}
