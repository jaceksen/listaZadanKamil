import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input()
  tasks: any;

  @Output()
  eventTask = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  select(task: string | undefined){
    this.eventTask.emit(task);
  }
}
