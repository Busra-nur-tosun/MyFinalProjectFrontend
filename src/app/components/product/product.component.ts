import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
 import { SnackbarService } from 'src/app/services/snackbar.service';
 import { trigger, state, style, animate, transition } from '@angular/animations';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0,
      })),
      state('show', style({
        opacity: 1,
      })),
      transition('void => *', [
        animate('300ms')
      ]),
      transition('* => void', [
        animate('300ms')
      ]),
    ]), 
  ]
})
export class ProductComponent implements OnInit {
  [x: string]: any;
  products: Product[] = [];
  dataLoaded = false;
  filterText="";

  constructor(private productService: ProductService,
    private activatedRoute:ActivatedRoute, 
    private snackbarService: SnackbarService,
    private cartService:CartService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts()
      }
    })
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  getProductsByCategory(categoryId:number) {
    this.productService.getProductsByCategory(categoryId).subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }
  addToCart(product:Product){
 if(product.productId==1)
 {
  this['snackbarService']['open'](`${product.productName} sepete eklendi.`);
 }
 else{
  this['snackbarService']['open'](`${product.productName} sepete eklenemedi.`);
  this.cartService.addToCart(product);
 }
  }
}
