import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	public status:boolean;
	public email="";
  constructor() { }

  ngOnInit() {
  	this.getLocalData();
  }
  getLocalData(){
  	if(localStorage.email && localStorage.email.length>0)
  	{
  		this.status = true;
  		this.email = localStorage.email;
  	}else{
  		this.status = false;
  		this.email = "";
  	}
  }

}
