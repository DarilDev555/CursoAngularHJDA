import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,
    NgOptimizedImage,
    ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  // @Input() productoMostar!: Product;

  @Input() productoMostar: Product = {
    id: 0,
    title: '',
    price: 0,
    images: []
  };

  adjustImageSize(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    const width = imgElement.naturalWidth/2;
    const height = imgElement.naturalHeight/2;

    imgElement.width = width;
    imgElement.height = height;
  }
}
