import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terapia-familiar',
  templateUrl: './terapia-familiar.component.html',
  styleUrls: ['./terapia-familiar.component.scss']
})
export class TerapiaFamiliarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goWhatsapp() {
    const url = 'https://api.whatsapp.com/send?phone=+51972676287&text=¡Hola!, quisiera obtener información sobre los servicios de psicología.'
    window.open(url)
  }

}
