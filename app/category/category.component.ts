import { Component, OnInit } from '@angular/core';
import {CrudService} from '../crud.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
	public obj;
  constructor(private crud:CrudService) { }

  ngOnInit() {
  }
  add_cat = function(val){
  	// alert(val)
  	if(val.length > 0){
  		this.obj = {cat_name:val}
  		this.crud.postdata("category",this.obj).subscribe(
      (result)=>{
        alert("added")
      }
      
    );
  	}
  }

}
