import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terapia-adolecentes',
  templateUrl: './terapia-adolecentes.component.html',
  styleUrls: ['./terapia-adolecentes.component.scss']
})
export class TerapiaAdolecentesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goWhatsapp() {
    const url = 'https://api.whatsapp.com/send?phone=+51972676287&text=¡Hola!, quisiera obtener información sobre los servicios de psicología.'
    window.open(url)
  }

}
