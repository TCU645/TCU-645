import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images: string[] = [
    "assets/img/home-slides/slide (1).jpg",
    "assets/img/home-slides/slide (2).jpg",
    "assets/img/home-slides/slide (3).jpg",
    "assets/img/home-slides/slide (4).jpg",
    "assets/img/home-slides/slide (5).jpg",
    "assets/img/home-slides/slide (6).jpg",
    "assets/img/home-slides/slide (7).jpg",
    "assets/img/home-slides/slide (8).jpg",
    "assets/img/home-slides/slide (9).jpg",
    "assets/img/home-slides/slide (10).jpg",
    "assets/img/home-slides/slide (11).jpg",
    "assets/img/home-slides/slide (12).jpg",
    "assets/img/home-slides/slide (13).jpg",
    "assets/img/home-slides/slide (14).jpg",
    "assets/img/home-slides/slide (15).jpg",
    "assets/img/home-slides/slide (16).jpg",
    "assets/img/home-slides/slide (17).jpg",
    "assets/img/home-slides/slide (18).jpg"
  ]

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.pauseOnHover = false;
    config.pauseOnFocus = false;
  }
}
