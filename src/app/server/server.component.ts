import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: number = 10;
  serverState: string = 'Ok';

  getServerStatus(){
    return this.serverState
  }

  constructor() { }

  ngOnInit() {
  }

}
