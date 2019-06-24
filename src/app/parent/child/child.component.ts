import { Component, OnInit, Input } from '@angular/core';
import { ParentComponent } from '../../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input() childComponentMsg : string

  constructor() { }

  ngOnInit() {
  }

viewchildFromChild = "I am the vine"
}
