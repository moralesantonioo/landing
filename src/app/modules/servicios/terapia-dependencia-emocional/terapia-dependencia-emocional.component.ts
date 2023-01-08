import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terapia-dependencia-emocional',
  templateUrl: './terapia-dependencia-emocional.component.html',
  styleUrls: ['./terapia-dependencia-emocional.component.scss']
})
export class TerapiaDependenciaEmocionalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goWhatsapp() {
    const url = 'https://api.whatsapp.com/send?phone=+51972676287&text=¡Hola!, quisiera obtener información sobre los servicios de psicología.'
    window.open(url)
  }
}
