import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

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

  @ViewChild('serverNameElRef', {static: true}) serverNameElementRef: ElementRef;

  addNewServer() {
    this.serverCreated.emit({
      // name: this.name,
      name: this.serverNameElementRef.nativeElement.value,
      description: this.description
    })
  }

  addBlueprintSever() {
    this.serverCreated.emit({
      // name: this.name,
      name: this.serverNameElementRef.nativeElement.value,
      description: this.description
    })
  }

  getNameUsingLocalRef(nameInput: HTMLInputElement) {
    console.log("Pass the local input element: ", nameInput.value)
  }

  getNameUsingElementRef() {
    console.log("Data coming from Element Reference: ", this.serverNameElementRef.nativeElement.value);
  }
}
