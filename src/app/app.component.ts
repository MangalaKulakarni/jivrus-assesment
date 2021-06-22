import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { noop } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;
  projects = [];
  projectForm: FormGroup;
  
  constructor() {
    this.projectForm= new FormGroup({
      projectName: new FormControl(null),
      customerName: new FormControl(null),
      location: new FormControl(null),
    })  
  }

  onsubmit() {
    this.projects.push(this.projectForm.value);
  }
}
