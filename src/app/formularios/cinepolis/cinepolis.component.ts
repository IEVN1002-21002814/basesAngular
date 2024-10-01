import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']  // Cambiado a styleUrls
})
export class CinepolisComponent{
  formulario!: FormGroup;
  valorTotal!: number;
  ValorDescuento!: number;
  primerDescuento!: number;

  constructor(){

  }
  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      compradores: new FormControl('', Validators.required),
      boletos: new FormControl('', Validators.required),
      tarjeta: new FormControl('no', Validators.required)
    });
  }

  sumarCostoBoletos(): void {
    const nombre = this.formulario.get('nombre')?.value;
    const compradores = this.formulario.get('compradores')?.value;
    const boletos = this.formulario.get('boletos')?.value;
    const tarjeta = this.formulario.get('tarjeta')?.value;

    let maxBol = compradores * 7;
    const boleto = 12;

    if (boletos > maxBol) {
      this.valorTotal = 0;
      this.ValorDescuento = 0;
    } else {
      this.valorTotal = boletos * boleto;

      if (boletos > 5) {
        this.primerDescuento = this.valorTotal - (this.valorTotal * 0.15); 

      } else if (boletos >= 3 && boletos < 6) {
        this.primerDescuento = this.valorTotal - (this.valorTotal * 0.10); 

      } else {
        this.primerDescuento = this.valorTotal;

      }

      if (tarjeta === 'si') {
        this.ValorDescuento = this.primerDescuento - (this.primerDescuento * 0.10);

      } else {
        this.ValorDescuento = this.primerDescuento;
        
      }
    }
  }
}
