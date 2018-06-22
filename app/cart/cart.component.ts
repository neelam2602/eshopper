import { Component, OnInit } from '@angular/core';
import {CrudService} from '../crud.service';

import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	public arr=[];
  constructor(private crud:CrudService,private cookieService:CookieService) { }

  ngOnInit() {
  	if(this.cookieService.get("product")){
  		var cookieData = this.cookieService.get("product")
      	var check = cookieData.split(",");
      	this.crud.getdata("product").subscribe((result)=>{
      		// console.log(result.json());
      		for(var i=0;i<result.json().length;i++){
      			// console.log(typeof result.json()[i]['id'])
      			if(check.indexOf(result.json()[i]['id'].toString()) > -1)
      			{
      				this.arr.push(result.json()[i])
      			}
      		}
      		// console.log(this.arr)
      	})
  	}
  }

  delete_to_cart = function(id,e){
  	e.preventDefault();
  	// console.log(id)
  	var cookieData = this.cookieService.get("product")
    var check = cookieData.split(",");
    var pos = check.indexOf(id.toString());
    check.splice(pos,1);
    var newval = check.join(",");
    // console.log(newval)
    this.cookieService.set("product",newval);
    e.target.parentNode.parentNode.parentNode.parentNode.parentNode.style.display='none';
  }
}


// phalak.girish@gmail.com