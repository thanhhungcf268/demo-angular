import {Component, OnInit} from '@angular/core';
import {IProduct} from './iproduct';
import {Products} from '../list-product/products';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  check = false;
  product: IProduct = {};
  constructor() {
  }

  ngOnInit() {
  }

  FCheckS() {
    Products.push(this.product)
    if (this.check) {
      this.check = false;
    }
  }

  FCheck() {
    if (!this.check) {
      this.check = true;
    }
  }
}
