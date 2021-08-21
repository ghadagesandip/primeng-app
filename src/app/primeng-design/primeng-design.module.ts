import { NgModule, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { RadioButtonModule } from "primeng/radiobutton";
import { FormsModule } from "@angular/forms";
import { CardModule } from 'primeng/card';

const classes = [
  
  FormsModule,
  CardModule,
  ButtonModule,
  InputTextModule,
  CheckboxModule,
  RadioButtonModule,
]
@NgModule({
  declarations: [],
  imports: [...classes ],
  exports:[...classes ],
})
export class PrimengDesignModule implements OnInit {

  constructor(private primengConfig: PrimeNGConfig){
  
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
