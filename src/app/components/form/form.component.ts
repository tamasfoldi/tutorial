import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('sadf');
  }

}
