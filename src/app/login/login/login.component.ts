import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  public myForm!:FormGroup;

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.myForm = this.createMyForm();
  }

  private createMyForm():FormGroup{
    return this.fb.group({
      usuario:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }
  public submitFormulario(){
    if(this.myForm.invalid){
      Object.values(this.myForm.controls).forEach(control=>{
        control.markAllAsTouched();
      });
      return;
    }
  }

  public get f():any{
    return this.myForm.controls;
  }
}
