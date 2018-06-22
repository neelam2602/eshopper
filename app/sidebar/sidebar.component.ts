import { Component, OnInit } from '@angular/core';

import {CrudService} from '../crud.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	public category;
	public brands;
  constructor(private crud:CrudService) { }

  ngOnInit() {
    this.crud.getdata("category").subscribe(
      (result)=>{
        this.category = result.json();
      }
      
    );
  	// console.log(this.catg);
    this.crud.getdata("brand").subscribe(
      (result)=>{
        this.brands = result.json();
      }
      
    );
  	
  	
  }
  filter_cat(id,e){
    // alert(id);
    // console.log(id)
    // console.log(e)
    e.preventDefault();
    this.crud.filter_data(id,"cat")
  }
  filter_br(id,e){
    // alert(id);
    // console.log(id)
    // console.log(e)
    e.preventDefault();
    this.crud.filter_data(id,"br")
  }

}
