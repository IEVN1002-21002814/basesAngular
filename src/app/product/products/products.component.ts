import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {
  productos:any[]=[
    {
      "productId": 1,
      "Modulo": "Sentra",
      "Description:": "4 puertas",
      "Precio": 2000,
      "Year": 2023,
      "Marca": "NISSAN",
      "Color": "Azul",
      "ImagenUrl": ""
    },
    {
      "productId": 2,
      "Modulo": "Rio",
      "Description:": "4 puertas",
      "Precio": 4000,
      "Year": 2023,
      "Marca": "KIA",
      "Color": "Rojo",
      "ImagenUrl": ""
    },
    {
      "productId": 3,
      "Modulo": "A4",
      "Description:": "4 puertas",
      "Precio": 3000,
      "Year": 2022,
      "Marca": "AUDI",
      "Color": "Blanco",
      "ImagenUrl": ""
    }
  ]
}
