import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private api:ApiService){}
  product:any=""
  ngOnInit()
  {
    this.api.getProduct().subscribe((data:any)=>{this.product=data})
  }

}
