import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  name: string;
  description: string;

  @Output() serverCreated = new EventEmitter<{name: string, description: string}>();
  @Output() blueprintCreated = new EventEmitter<{name: string, description: string}>();

  addNewServer() {
    this.serverCreated.emit({
      name: this.name,
      description: this.description
    })
  }

  addBlueprintSever() {
    this.serverCreated.emit({
      name: this.name,
      description: this.description
    })
  }

}
