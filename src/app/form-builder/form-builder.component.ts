import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  /*
  formClient = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    adress: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl('')
    })
  })
  */

  formClient = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: ['']
    })
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.formClient.value)
  }

}
