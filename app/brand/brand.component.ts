import { Component, OnInit } from '@angular/core';
import {CrudService} from '../crud.service';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  public obj;
  constructor(private crud:CrudService) { }

  ngOnInit() {
  }
  add_br = function(val){
  	// alert(val)
  	if(val.length > 0){
  		this.obj = {br_name:val}
  		this.crud.postdata("brand",this.obj).subscribe(
      (result)=>{
        alert("added")
      }
      
    );
  	}
  }
}
