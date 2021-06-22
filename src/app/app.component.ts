import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;
  projects = [];
  projectForm: FormGroup;
  edit= false;
  editIndex;
  
  constructor() {
    this.projectForm= new FormGroup({
      projectName: new FormControl(null),
      customerName: new FormControl(null),
      location: new FormControl(null),
    })  
  }

  onsubmit() {
    if(this.edit === false) {
    this.projects.push(this.projectForm.value);
    this.projectForm.reset();
    this.showForm=false;
    } else {
      this.projects[this.editIndex] = this.projectForm.value;
      this.oncancel();
    }
  }
  oncancel()
  {
    this.projectForm.reset();
    this.showForm=false;
  }
  ondelete(index)
  {
    this.projects.splice(index,1)
  }
  onedit(index)
  {
    this.showForm=true;
    this.edit= true;
    this.editIndex= index; 
    this.projectForm.patchValue(this.projects[index]);
  }
}

