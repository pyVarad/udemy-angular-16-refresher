import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serverName: string = 'Test Server';
  servers: string[] = [];


  addNewServer() {
    this.servers.push(this.serverName);
  }
}
