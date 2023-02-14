import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-tshirt',
  templateUrl: './tshirt.component.html',
  styleUrls: ['./tshirt.component.scss']
})
export class TshirtComponent implements OnInit {

  constructor(public cartService: CartService) {
    // console.log(cartService.tshirt)
  }

  

  ngOnInit(): void {
  }

}
