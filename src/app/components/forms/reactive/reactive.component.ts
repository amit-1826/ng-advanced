import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { forbiddenNameValidator } from './forbiddenNameValidator';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  get firstName(): FormControl {
    return this.contactForm.get('firstname') as FormControl;
  }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstname: ['', [Validators.required, forbiddenNameValidator('Amit')]],
      lastname: [],
      email: [, Validators.email],
      gender: [],
      isMarried: [],
      country: []
    })
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
