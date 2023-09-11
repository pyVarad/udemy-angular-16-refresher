import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  description: string;
  serverElements: {name: string, content: string, type: string}[] = [
    {
      name: 'Test Server',
      content: 'This is test server',
      type: 'server'
    }
  ];

  getServerDetails(data: {name: string, description: string}) {
    this.name = data.name;
    this.description = data.description;

    console.log(this.name);
    console.log(this.description);
  }

  addServer() {
    this.serverElements.push({
      name: this.name,
      content: this.description,
      type: 'server'
    })
  }

  addBluePrint() {
    this.serverElements.push({
      name: this.name,
      content: this.description,
      type: 'blueprint'
    })
  }
}
