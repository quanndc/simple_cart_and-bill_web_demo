import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {}

  cart:any = [];
  total = 0;

  addToCart(item: any){
    if(this.cart.length === 0){
      this.cart.push(item);
      console.log(this.cart);
    }else{
      for(let i = 0; i < this.cart.length; i++){
        if(this.cart[i].id === item.id){
          this.cart[i].quantity ++;
          console.log(this.cart);
          return;
        }
      }
      this.cart.push(item);
      console.log(this.cart);
    }
  }

  purchase(){
    let subtotal = 0;
    for(let i = 0; i < this.cart.length; i++){
      subtotal += (this.cart[i].price * this.cart[i].quantity);
    }
    this.total = subtotal;
    // alert("Your bill is: " + this.total + "$");
  }


  tshirt = [
    {
      id: 1,
      name: 'T-Shirt 1',
      price: 10,
      photoURL: "https://minasafety.com/upload/images/ao-phan-quang-mau-cam_thumb.png",
      subPhoto: [
        "https://cf.shopee.vn/file/d8eceb8faa676bb4bfc67a4d8edd6074_tn",
        "https://cf.shopee.vn/file/d8eceb8faa676bb4bfc67a4d8edd6074_tn",
      ],
      quantity: 1,
    },


    {
      id: 2,
      name: 'T-Shirt 2',
      price: 15,
      photoURL: "https://product.hstatic.net/1000341630/product/mid03229_930e91af55f94df2bc724af2e042b94c_large.jpg",
      quantity: 1,
    },
    {
      id: 3,
      name: 'T-Shirt 3',
      price: 20,
      photoURL: "https://product.hstatic.net/200000349543/product/28990018_1_67fa4b5a9b3c450c9b98518cf0e6e9f3_grande.png",
      quantity: 1,
    },

    {
      id:4,
      name: 'T-Shirt 4',
      price: 5,
      photoURL: "https://aristino.com/Data/ResizeImage/images/product/ao-tshirt/ats040s2/ao-thun-nam-aristino-ATS040S2-10x500x500x4.webp",
      quantity: 1,
    },
  ]


}
