import { IngresoService } from './ingreso.service';
import { Ingreso } from './ingreso.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos : Ingreso[]=[];


  constructor(private ingresoService: IngresoService) {
  }

  ngOnInit() {
    this.ingresos = this.ingresoService.ingresos;
  }

  eliminarRegistro(ingreso:Ingreso){
      this.ingresoService.eliminar(ingreso);
  }


}
