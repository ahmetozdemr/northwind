import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from 'src/app/models/productResponseModel';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  products:any = [];

  //apiUrl = 'https://localhost:44381/api/products/getall';
  apiUrl = 'https://demodata.grapecity.com/northwind/api/v1/Products';
   
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.httpClient
      .get(this.apiUrl)
      .subscribe((response) => {
        this.products = response;
      });
  }
}

/*   todos:any = [];
  apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.httpClient
      .get(this.apiUrl)
      .subscribe((response) => {
        this.todos = response;
      });
  }
} */

 
