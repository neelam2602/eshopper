import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

import {CrudService} from '../crud.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private crud:CrudService,private route:Router) { }
  public msg="";
  ngOnInit() {
  }
  register = function(rec){
  	console.log(rec)
  	// return false;
  	this.crud.getdata("register").subscribe(
      (result)=>{
        for(var i=0;i<result.json().length;i++){
        	if(result.json()[i]['emailid'] == rec.emailid && result.json()[i]['pass'] == rec.pass){
        		// alert("ok")
        		// console.log(localStorage);
        		localStorage.setItem("email",rec.emailid)
        		this.route.navigate(['/'])
        	}else{
        		this.msg="invalid data"
        	}
        }
      }
      
    );
  }

}
