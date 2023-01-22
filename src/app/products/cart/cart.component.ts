import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartitems:any=[]
  grantTotal:any=0
  total=0
  updatedtotal:any=0


  constructor(private cart:CartService,private router:Router) { }

  ngOnInit(): void {
    this.cart.cartitemlist.subscribe(
      (data)=>{
        console.log(data);
        this.cartitems = data
        
      }
    )
      this.total= this.cart.getTotal()
      this.grantTotal = this.total.toFixed(2)
  }

  //removeItem
  removeItem(product:any){
    this.cart.removeCartItem(product)
    this.total= this.cart.getTotal()
    this.grantTotal = this.total.toFixed(2)
  }
  //removeallitems

  removeallitems(){
    this.cart.removeallitems()
  }

  discount3per(){
    let discount = (this.grantTotal *3)/100
    let discountvalue = this.grantTotal - discount
    this.updatedtotal = discountvalue.toFixed(2)

  }

  discount5per(){
    let discount = (this.grantTotal *5)/100
    let discountvalue = this.grantTotal - discount
    this.updatedtotal = discountvalue.toFixed(2)

  }
  discount30per(){
    let discount = (this.grantTotal *30)/100
    let discountvalue = this.grantTotal - discount
    this.updatedtotal = discountvalue.toFixed(2)

  }
  discount50per(){
    let discount = (this.grantTotal *50)/100
    let discountvalue = this.grantTotal - discount
    this.updatedtotal = discountvalue.toFixed(2)

  }
  proceed(){
    alert('order placed successfully')
    this.removeallitems
    this.router.navigateByUrl('')
  }

}
