import { Component, OnInit, Output, AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit {
  @ViewChild(ChildComponent) viewChildMessage


  parentMessage ="You are sharing data using parent to child component. Using @Input"
  viewchildFromParent: string
  outputParentMessage ="Yes we did it!!!!!"
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.viewchildFromParent = this.viewChildMessage.viewchildFromChild
  }
}
