import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terapia-individual',
  templateUrl: './terapia-individual.component.html',
  styleUrls: ['./terapia-individual.component.scss']
})
export class TerapiaIndividualComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goWhatsapp() {
    const url = 'https://api.whatsapp.com/send?phone=+51972676287&text=¡Hola!, quisiera obtener información sobre los servicios de psicología.'
    window.open(url)
  }

}
