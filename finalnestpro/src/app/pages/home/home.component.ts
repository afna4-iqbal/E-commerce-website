import { Component } from '@angular/core';
import { NavbarComponent } from '../../unit/navbar/navbar.component';
import { CarouselComponent } from '../../unit/carousel/carousel.component';
import { SingleComponent } from "../../single/single.component";
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CarouselComponent, SingleComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
