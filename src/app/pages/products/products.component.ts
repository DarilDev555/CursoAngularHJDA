import { Component, inject } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent, HttpClientModule, CommonModule, ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {


  http = inject(HttpClient);
  productos: Product[] = [];

  ngOnInit(): void {
    this.http.get<Product[]>("https://api.escuelajs.co/api/v1/products")
    .subscribe((data) => {
        this.productos = data;
      });
  }

}
