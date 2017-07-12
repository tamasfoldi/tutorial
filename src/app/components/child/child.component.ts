import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  counter = 0;
  @Input('counterStream')
  counterStream: Observable<number>;

  ngOnInit() {
    this.counterStream.subscribe(i => { // leaks
      this.counter += i;
    })
  }

}
