import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CrudService} from '../crud.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private crud:CrudService) { }

  ngOnInit() {
  }
  register = function(rec){
  	console.log(rec)
  	// return false;
  	this.crud.postdata("register",rec).subscribe(
      (result)=>{
        alert("added")
      }
      
    );
  }
}
