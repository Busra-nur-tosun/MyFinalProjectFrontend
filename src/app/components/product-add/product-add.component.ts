import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { ProductService } from 'src/app/services/product.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit{
 
productAddForm:FormGroup;

 constructor(private formBuilder:FormBuilder,private productService:ProductService, private snackbarService: SnackbarService) {
  

 }
  ngOnInit(): void {
    this.createProductAddForm();
  }
  createProductAddForm(){
    this.productAddForm=this.formBuilder.group({
      productName:["",Validators.required],
      unitPrice:["",Validators.required],
      unitsInStock:["",Validators.required],
      categoryId:["",Validators.required]
    })
  }
  add()
  {
    if(this.productAddForm.valid)
    {
  let productModel =Object.assign({},this.productAddForm.value)
 this.productService.add(productModel).subscribe(data=>{
  console.log(data)
  this.snackbarService.open("ürün eklendi başarılı")},responseError=>
  {
    if(responseError.errors.length>0)
    {
      console.log(responseError.error.Errors)
      for(let i=0; i<responseError.error.Errors;i++){
        this.snackbarService.error(responseError.error.Errors[i].ErrorMessage)

      }
     
     }
    })
   }
    else{
      this.snackbarService.error("Formunuz eksik");
 
      
    }
  }

}
