import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  whishList:any
  emsg:string = ''

  constructor(private api:ApiService,private cart:CartService,private router:Router) { }

  ngOnInit(): void {
  this.api.getWishlist()
  .subscribe(
    (data:any)=>{
      this.whishList = data.result
      if(this.whishList.length==0){
        this.emsg = 'empty wishlist'
      }
    },
    (data:any)=>{
       this.emsg = data.error.message
    }
  )
  }

  //deletefrmwishlist

  deletefrmwishlist(product:any){
    this.api.deletefrmwishlist(product.id)
    .subscribe(
      (result:any)=>{
        this.whishList = result.Wishlist
        if(this.whishList.length==0){
          this.emsg = 'empty wishlist'
        }
      },
      (result:any)=>{
        alert(result.error.message)
      }

    )
  }

  //addToCart
  addToCart(product:any){
    this.cart.addToCart(product)
    this.deletefrmwishlist(product)
    
  

  }

}
