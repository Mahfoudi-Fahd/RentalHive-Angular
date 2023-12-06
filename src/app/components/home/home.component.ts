import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CarouselComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
