import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

export class contact {
  firstname!: string;
  lastname!: string;
  gender!: string;
  isToc!: boolean;
  email!: string;
} 

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent {
  @ViewChild('contactForm') contactForm!: NgForm;
 
  contact!: contact;
 
  ngOnInit() {
 
    this.contact = { 
      firstname:"",
      lastname:"",
      gender:"male",
      isToc:true,
      email:"",
    };
 
  }
 
  onSubmit() {
    console.log(this.contactForm.value);
  }
}
