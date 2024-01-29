import { Component } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username! : string ;
  password! :string;

  _uname:string | null | undefined  = localStorage.getItem("name")?.replace(/\"/g, "")
 
  

  loginUser(){
    if(this.username===this._uname && this.password==="123"){
      alert("Login")
      console.log(this._uname);
      // localStorage.setItem("name",JSON.stringify(this.username))
    }else{
      alert("Please Try Agin !!!")
    }
    
    
  }

}
