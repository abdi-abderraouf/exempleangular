import { Component, OnInit } from '@angular/core';
import { Message } from '../classes/message';

@Component({
  selector: 'app-pseudoname',
  templateUrl: './pseudoname.component.html',
  styleUrls: ['./pseudoname.component.css']
})
export class PseudonameComponent implements OnInit {
  pseudo:string='';
  message:string='';
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("pseudo")!=null)
    {
      window.location.replace("messages");
    }
  }
  login()
  {
    localStorage.setItem("pseudo",this.pseudo)
    window.location.replace('messages');
  }
  sendMessage()
  {
    
  }
}
