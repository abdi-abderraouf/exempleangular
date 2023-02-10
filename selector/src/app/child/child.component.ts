import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 @Input()
 myname?:string;
 names=['kacem','akhil','fatma','racha','maryam'];
 search='';
 selected='';
  constructor() { }

  ngOnInit(): void {
  }

  changedata (n:any)
  {
     this.selected=n;
  }

}
