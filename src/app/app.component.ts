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
  edit = false;
  editIndex;

  constructor() {
    this.projectForm = new FormGroup({
      projectName: new FormControl(null),
      customerName: new FormControl(null),
      location: new FormControl(null)
    });
  }

  onsubmit() {
    /** Push the data to projects array to hold the data */
    if (this.edit === false) {
      this.projects.push(this.projectForm.value);
      this.projectForm.reset();
      this.showForm = false;
    } else {
      /** When the User clicks on the edit update the data based on the selected index */
      this.edit = false; //Once the user clicks on save while editing reset edit to false.
      this.projects[this.editIndex] = this.projectForm.value; //Update the data to the selected index
      this.oncancel(); //Reset form and form availability.
    }
  }

  /** When the user clicks on the cancel button don't do anything, just reset the form and hide the form. */
  oncancel() {
    this.projectForm.reset(); //Reset the project form
    this.showForm = false; //Hide the form.
    this.edit = false; //Once the user clicks on edit and clicks on the cancel button.
  }

  /**** When the user clicks on the index, delete the selected index. */
  ondelete(index) {
    this.projects.splice(index, 1);
  }

  /** When the user clicks on edit pencil mark get the index of selected row and show the form
   * and patch the loaded value.
   */
  onedit(index) {
    this.showForm = true; //Show the form
    this.edit = true; //Set the edit flag to true perform the submition operations.
    this.editIndex = index; //Assign the selected row index to a global variable to update the data on submit.
    this.projectForm.patchValue(this.projects[index]); //Patch the already added value.
  }
}
