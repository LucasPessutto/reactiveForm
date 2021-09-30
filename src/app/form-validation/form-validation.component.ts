import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  client = {
    firstName: "",
    lastName: "",
    birth: new Date(),
    email: "",
    age: 0,
    street: "",
    city: "",
    state: "",
    phone1: "",
    phone2: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.client)
  }

}
