import { Component, Input } from '@angular/core';
import { Notes } from './data';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  @Input() leadId!: number;
  Notesdata=Notes[0].data
  
  constructor() {
    console.log(this.Notesdata); // Logging the Notesdata property to the console
  }
  

}
