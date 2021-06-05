import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [ Validators.required, Validators.minLength(3) ]   ],
    precio: [ , [ Validators.required, Validators.min(0)] ],
    existencias: [ , [ Validators.required, Validators.min(0)] ],
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.miFormulario.reset({
      nombre: 'Play Station 5',
      precio: 200000
    })
  }


  campoEsValido( campo: string ) {

    return this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched;
  }

  guardar() {

    if ( this.miFormulario.invalid )  {
      this.miFormulario.markAllAsTouched();
      return;
    }


    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }



}
