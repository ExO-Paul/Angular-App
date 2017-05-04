import {Component, OnInit} from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: '.app-servers',
  // templateUrl: './servers.component.html'/,
  template: `
    <button class="btn btn-primary" [disabled]="!allowNewServer">Add Server</button>
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;

  addNewServer(){
    
  }

  constructor() {
    setTimeout(() => {this.allowNewServer = true}, 2000)
  }

  ngOnInit() {
  }

}
