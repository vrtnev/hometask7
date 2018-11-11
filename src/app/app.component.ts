import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

interface MyUser {
  name?: string;
  surname?: string;
  emails?: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userForm: FormGroup;
  users: MyUser[] = [];

  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      emails: new FormArray([
        new FormControl(null, [Validators.required])
      ])
    });
  }
  onUserFormSubmit() {
    this.users.push(this.userForm.value);
    this.userForm.reset();
  }

  onAddEmail() {
    (<FormArray>this.userForm.controls['emails']).push(new FormControl(null, [Validators.required]));
  }

  onDelEmail(index) {
    (<FormArray>this.userForm.controls['emails']).removeAt(index);
  }
}
