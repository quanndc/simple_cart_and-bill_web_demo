import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(protected router: Router ,public cartService: CartService) {
    console.log(this.cartService.cart);
  }

  navigateToBill(){
    this.router.navigate(['/bill']);
  }

  ngOnInit(): void {
  }

}
