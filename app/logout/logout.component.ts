import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
	public status:boolean;
	public email="";
  constructor(private route:Router) { }

  ngOnInit() {
  	if(localStorage.email && localStorage.email.length>0)
  	{
  		localStorage.removeItem("email")
  		this.status = false;
  		this.email = "";
  		this.route.navigate(['/'])
  	}
  }

}
