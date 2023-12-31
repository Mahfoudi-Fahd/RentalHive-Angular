import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule } from '@coreui/angular';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [RouterLink,CarouselModule, CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit{

    slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});
  
    constructor() { }
  
    ngOnInit(): void {
      this.slides[0] = {
        id: 0,
        src: '../../../assets/images/carousel-img1.jpg',
        title: 'First slide',
        subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
      };
      this.slides[1] = {
        id: 1,
        src: '../../../assets/images/carousel-img2.jpg',
        title: 'Second slide',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      }
      this.slides[2] = {
        id: 2,
        src: '../../../assets/images/carousel-img3.jpg',
        title: 'Third slide',
        subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
      }
    }
  }


