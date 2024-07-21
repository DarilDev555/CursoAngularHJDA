  import { Component } from '@angular/core';
  import { RouterOutlet } from '@angular/router';
  import { CommonModule } from '@angular/common';
  import { Router } from '@angular/router';
  import { RouterLink, RouterLinkActive } from '@angular/router';

  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet,
      CommonModule,
      RouterLink,
      RouterLinkActive,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })
  export class AppComponent {

    constructor(private router: Router) {
      this.router.navigate(['']);
    }


    title = 'CursoAngularHJDA';
    textoPrueba = 'Es un texto de prueba';

    cambiarTexto() {
      this.textoPrueba = 'Texto cambiado';
    }

  }
