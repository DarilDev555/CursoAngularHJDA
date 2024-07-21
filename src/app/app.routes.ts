import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
export const routes: Routes = [
    {
        path: 'contact',
        title: 'Contacto',
        component : ContactComponent
    },

    {
        path: 'products',
        title: 'Productos',
        component : ProductsComponent
    }
];
