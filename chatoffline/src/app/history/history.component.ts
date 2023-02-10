import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../classes/message';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  @Input()
  historique:Message[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
