import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'Quiz02';

  mostrar = 0;
  
  formulario:FormGroup;
  lista:Array<any> = [];
  
  constructor(public form:FormBuilder) { 

    this.formulario = this.form.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      genero:['',Validators.required],
      pais:['',Validators.required],
      ciudad:['',Validators.required]
    });

  }
  ngOnInit():void{

  }

  onSubmit(){
    this.lista.push(this.formulario.value);
    
  }

 
  setMostrar(valor:number){
    this.mostrar = valor;

    var elem = null;
    if(valor == 1){ 
      elem = document.getElementById("menu1"); 
      if(elem != null) elem.style.color = "cyan";
      elem = document.getElementById("menu2"); 
      if(elem != null) elem.style.color = "black";
      elem = document.getElementById("menu3"); 
      if(elem != null) elem.style.color = "black";
      }
    else if(valor == 2){
      elem = document.getElementById("menu1"); 
      if(elem != null) elem.style.color = "black";
      elem = document.getElementById("menu2"); 
      if(elem != null) elem.style.color = "cyan";
      elem = document.getElementById("menu3"); 
      if(elem != null) elem.style.color = "black";
     }
    else if(valor == 3){
      elem = document.getElementById("menu1"); 
      if(elem != null) elem.style.color = "black";
      elem = document.getElementById("menu2"); 
      if(elem != null) elem.style.color = "black";
      elem = document.getElementById("menu3"); 
      if(elem != null) elem.style.color = "cyan";
    }

  }

}
