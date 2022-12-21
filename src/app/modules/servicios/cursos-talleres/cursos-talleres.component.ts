import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-talleres',
  templateUrl: './cursos-talleres.component.html',
  styleUrls: ['./cursos-talleres.component.scss']
})
export class CursosTalleresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goWhatsapp() {
    const url = 'https://api.whatsapp.com/send?phone=+51972676287&text=¡Hola!, quisiera obtener información sobre los servicios de psicología.'
    window.open(url)
  }

}
