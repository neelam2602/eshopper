import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
// import 'rxjs/add/operator/map'
import { Subject } from 'rxjs'
// import { Observable, Subject, pipe } from 'rxjs';
// import 'rxjs/Rx'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  public subObj =  new Subject();

	public url ="http://localhost:3200/";
  constructor(private catg:Http) { 
  	
  }
  getdata = function(crudPara){
  		// console.log(this.catg)
  		return this.catg.get(this.url+crudPara).pipe(map(
  			(result) =>{
  				return result;
  			}
  		))
  }
  postdata = function(crudPara,data){
      // console.log(this.catg)
      return this.catg.post(this.url+crudPara,data).pipe(map(
        (result) =>{
          return result;
        }
      ))
  }
  filter_data = function(id,type){
    this.subObj.next({id:id,type:type})
  }
}
