import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terapia-pareja',
  templateUrl: './terapia-pareja.component.html',
  styleUrls: ['./terapia-pareja.component.scss']
})
export class TerapiaParejaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goWhatsapp() {
    const url = 'https://api.whatsapp.com/send?phone=+51972676287&text=¡Hola!, quisiera obtener información sobre los servicios de psicología.'
    window.open(url)
  }

}
