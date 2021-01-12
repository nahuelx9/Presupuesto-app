import { EgresoService } from './../egreso/egreso.service';
import { IngresoService } from './../ingreso/ingreso.service';
import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  tipo:string="ingresoOperacion";
  descripcionInput:string;
  valorInput:number;

  constructor(private ingresoService:IngresoService, private egresoService:EgresoService) { }

  ngOnInit() {
  }
  tipoOperacion(evento){
    this.tipo = evento.target.value;
  }

  agregarValor(){
    if(this.tipo ==="ingresoOperacion"){
      this.ingresoService.ingresos.push(new Ingreso(this.descripcionInput,this.valorInput));
    }else{
      this.egresoService.egresos.push(new Egreso(this.descripcionInput,this.valorInput));

    }
  }
}
