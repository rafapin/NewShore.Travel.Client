import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flights-start',
  templateUrl: './flights-start.component.html',
  styleUrls: ['./flights-start.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(500)
      ])
    ])
  ]
})
export class FlightsStartComponent {  
  loading: boolean = false;

  constructor(private router: Router,private renderer: Renderer2) {}

  start() {
    this.loading = true; 
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/flights']); 
    }, 3000);
  }
}
