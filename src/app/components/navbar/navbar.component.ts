import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public cartService: CartService) {
  }


  navigateToTshirt(){
    this.router.navigate(['/tshirt']);
  }

  navigateToHome(){
    this.router.navigate(['']);
  }

  navigateToCart(){
    this.router.navigate(['/cart'])
  }

  ngOnInit(): void {
  }

}
