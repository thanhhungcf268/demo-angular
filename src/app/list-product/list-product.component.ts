import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../create-product/iproduct';
import {Products} from './products';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: IProduct[] = Products;
  product?: IProduct;
  @Input() check?: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  show(product?: IProduct): void {
    this.check = true;
    this.product = product;
  }

  delete(pr?: IProduct){
    for (let prKey in this.products) {
      if (this.products[prKey]==pr){
        this.products.splice(parseInt(prKey),1);
      }
    }
  }

}
