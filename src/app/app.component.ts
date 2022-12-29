import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { NavigationStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router, Event as RouterEvent } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'landing';
  moreIcon: boolean = true;
  loader: boolean = false;
  color: ThemePalette = 'primary';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof RouteConfigLoadStart) {
        this.loader = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        setTimeout(() => {
          this.loader = false;
        }, 900)
        
      }
    })
  }



  goWhatsapp() {
    const url = 'https://api.whatsapp.com/send?phone=+51972676287&text=¡Hola!, quisiera obtener información sobre los servicios de psicología.'
    window.open(url)
  }

  showRedes() {
    this.moreIcon = !this.moreIcon
  }
}
