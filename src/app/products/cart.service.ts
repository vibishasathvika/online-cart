import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartitemlistArray:any=[]
  cartitemlist = new BehaviorSubject([])

  constructor() { }

  //add to cart
  addToCart(product:any){
    this.cartitemlistArray.push(product)
    this.cartitemlist.next(this.cartitemlistArray)
    console.log(this.cartitemlist);
    let total = this.getTotal()
    console.log(total);
    

    

  }
  //total function
  getTotal(){
    let grantsum =0
    this.cartitemlistArray.map((item:any)=>{
      grantsum += item.price
    })
    return grantsum
  }


  // remove a single item form the cart

removeCartItem(product:any){
  this.cartitemlistArray.map((item:any,index:any)=>{
    if(product.id === item.id){
      this.cartitemlistArray.splice(index,1)
    }
  })
  this.cartitemlist.next(this.cartitemlistArray)


}
 //remove all items
 removeallitems(){
  this.cartitemlistArray = []
  this.cartitemlist.next(this.cartitemlistArray)
 }





    
}
