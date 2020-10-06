import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  @Input() data;

  title = 'User logs';
  constructor() { }

  ngOnInit(): void {
  }

}
