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
    this.router.navigate(['']);
    this.text = false
    this.nosotros = false
    this.services = false
  }

  quienesSomos(){
    this.router.navigate(['nosotros/quienes-somos']);
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

  cursosTalleres(){
    this.router.navigate(['servicios/cursos-talleres']);
    this.nosotros = false
    this.text = false
    this.services = false
  }

  capacitaciones(){
    this.router.navigate(['servicios/capacitaciones']);
    this.nosotros = false
    this.text = false
    this.services = false
  }

  saludMental(){
    this.router.navigate(['servicios/salud-mental']);
    this.nosotros = false
    this.text = false
    this.services = false
  } 
}
