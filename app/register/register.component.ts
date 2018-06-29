import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {

    this.user = this.fb.group({

  name: ['', [Validators.required, Validators.minLength(2)]],      
  mobile: ['', [Validators.required, Validators.minLength(2)]],
  emailid: ['', [Validators.required, Validators.email, Validators.minLength(2)]],
  pass: ['', [Validators.required, Validators.minLength(2)]],
    })
  }

  onSubmit(data){
    console.log(data);
  }

}
