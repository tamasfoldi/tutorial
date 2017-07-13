import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  model = {
    text: 't',
    email: '@',
    number: -1
  }

  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      text: [this.model.text, Validators.minLength(3)],
      email: [this.model.email, Validators.email],
      number: [this.model.text, Validators.required]
    });
  }

  onSubmit() {
  }

}
