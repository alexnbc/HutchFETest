import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  @Input() data;
  title = 'User ads';

  constructor() { }

  ngOnInit(): void {
  }

}
