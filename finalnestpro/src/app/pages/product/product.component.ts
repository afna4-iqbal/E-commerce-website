import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CardComponent } from '../../unit/card/card.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

}
