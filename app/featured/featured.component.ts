import { Component, OnInit } from '@angular/core';
import {CrudService} from '../crud.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
	public products;
  i:number;
  public arr=[];
  public typeFilter:string;
  constructor(private crud:CrudService) { }

  ngOnInit() {
    this.crud.getdata("product").subscribe(
      (result)=>{
        this.products = result.json();
      }
      
    );
    this.crud.subObj.subscribe(
      (response) =>{
        // console.log(response)
        this.arr =[];
        this.crud.getdata("product").subscribe((result) =>{
          // console.log(result.json())
          for(this.i=0;this.i<result.json().length;this.i++){
            // console.log(this.i)
            if(response['type'] == "cat"){
              this.typeFilter = 'proca_id';
            }
            else if(response['type'] == "br"){
              this.typeFilter = 'pro_brid';
            }
            if(result.json()[this.i][this.typeFilter] == response['id']){
              // console.log(result.json()[this.i])
              this.arr.push(result.json()[this.i]);
            }
          }
          this.products = this.arr;
        })
      }
    )
  	
  }

}
