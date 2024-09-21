import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {
  //*ngIf = true or false
  
  productos:any[]=[
    {
      "productId": 1,
      "Modelo": "Sentra",
      "Description": "4 puertas, 145 HP Potencia, 145 lb-pie Torque, transmisión X-Tronic CVT mejorada de octava generación",
      "Precio": 2000,
      "Year": 2023,
      "Marca": "NISSAN",
      "Color": "Azul",
      "ImagenUrl": "https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/ldm-images/2020-nissan-sentra-ELECTRIC-BLUE-METALLIC.png"
    },
    {
      "productId": 2,
      "Modelo": "Rio",
      "Description": "Motor 1.6 L de 121 hp",
      "Precio": 4000,
      "Year": 2023,
      "Marca": "KIA",
      "Color": "Rojo",
      "ImagenUrl": "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/rio_hatchback/rio_HB_2019/Componente-RioHB_EX_Pack.png"
    },
    {
      "productId": 3,
      "Modelo": "A4",
      "Description": "4 puertas",
      "Precio": 3000,
      "Year": 2022,
      "Marca": "AUDI",
      "Color": "Blanco",
      "ImagenUrl": "https://th.bing.com/th/id/OIP.rljVcQUH6E-VaJYyNBP1gQAAAA?rs=1&pid=ImgDetMain"
    }
  ]
}
