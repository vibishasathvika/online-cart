import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
    allproducts:any = []
    searchTerm = ''
    
  constructor(private api:ApiService,private cart:CartService) { }

  ngOnInit(): void {
    this.api.getAllProducts().subscribe(
      (data:any)=>{
        this.allproducts = data.result
        console.log(this.allproducts);
        

      }
    )

    this.api.searchKey.subscribe(
      (data:any)=>{
        this.searchTerm = data
      }
    )
  }

  addToWishlist(product:any){
    this.api.addToWishlist(product).subscribe(
      (result:any)=>{
        alert(result.message)
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }


  //add to cart

  addToCart(product:any){
  this.cart.addToCart(product)

  }

}
