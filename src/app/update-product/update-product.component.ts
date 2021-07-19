import {Component, Input, OnInit, Output} from '@angular/core';
import {IProduct} from '../create-product/iproduct';
import {Products} from '../list-product/products';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  @Input() product?: IProduct;
  // product_: IProduct = {};
  check?: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  update() {
    this.check = false;
  }

}
