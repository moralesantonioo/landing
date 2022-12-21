import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salud-mental',
  templateUrl: './salud-mental.component.html',
  styleUrls: ['./salud-mental.component.scss']
})
export class SaludMentalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goWhatsapp() {
    const url = 'https://api.whatsapp.com/send?phone=+51972676287&text=¡Hola!, quisiera obtener información sobre los servicios de psicología.'
    window.open(url)
  }

}
