import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  submitted=false

  registerForm=this.RF.group({
    name:['',[Validators.required,Validators.minLength(4)]],  
    Dob:['',[Validators.required]],  
    address:['',[Validators.required]],
    Role:['',[Validators.required]],
    Phone:['',[Validators.required]],
    Gender:['',[Validators.required]]
  })
  
  constructor(private RF:FormBuilder) { }

  ngOnInit(): void {

  }

  submit(){
    this.submitted=true
    

    if(this.registerForm.invalid){
      return
    }
    
    var name=this.registerForm.value.name
    var Dob=this.registerForm.value.Dob
    var address=this.registerForm.value.address
    var Role=this.registerForm.value.Role
    var Gender=this.registerForm.value.Gender
  
    if(this.registerForm.valid){
      localStorage.setItem('employeeData',JSON.stringify(this.registerForm.value))
      console.log("value",this.registerForm.value)  
      alert("Employee submited")
      
    }

  }

}
