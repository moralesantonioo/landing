import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  services: boolean = false;
  nosotros: boolean = false;
  text: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  dropdownListServices() {
    this.services = !this.services
  }

  dropdownListNosotros() {
    this.nosotros = !this.nosotros
  }

  goWhatsapp() {
    const url = 'https://api.whatsapp.com/send?phone=+51972676287&text=¡Hola!, quisiera obtener información sobre los servicios de psicología.'
    window.open(url)
  }

  menuHamburguesa(){
    this.text = !this.text
  }

  goHome(){
    this.router.navigate(['inicio']);
    this.text = false
    this.nosotros = false
    this.services = false
  }

  quienesSomos(){
    this.router.navigate(['/nosotros/quienes-somos']);
    this.nosotros = false
    this.text = false
    this.services = false
  }

  queOfrecemos(){
    this.router.navigate(['nosotros/que-ofrecemos']);
    this.nosotros = false
    this.text = false
    this.services = false
  }

  terapiaIndividual(){
    this.router.navigate(['servicios/teparia-individual']);
    this.nosotros = false
    this.text = false
    this.services = false
  }

  terapiaParejas(){
    this.router.navigate(['servicios/teparia-de-parejas']);
    this.nosotros = false
    this.text = false
    this.services = false
  }

  terapiaFamiliar(){
    this.router.navigate(['servicios/teparia-familiar']);
    this.nosotros = false
    this.text = false
    this.services = false
  }

  terapiaInfantil(){
    this.router.navigate(['servicios/teparia-infantil']);
    this.nosotros = false
    this.text = false
    this.services = false
  }

  terapiaAdolecentes(){
    this.router.navigate(['servicios/teparia-para-adolecentes']);
    this.nosotros = false
    this.text = false
    this.services = false
  }

  dependenciaEmocional(){
    this.router.navigate(['servicios/terapia-de-dependencia-emocional']);
    this.nosotros = false
    this.text = false
    this.services = false
  }

  orientacionVocacional(){
    this.router.navigate(['servicios/orientacion-vocacional']);
    this.nosotros = false
    this.text = false
    this.services = false
  }
}
