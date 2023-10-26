import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}

export class contact {
  firstname!: string;
  lastname!: string;
  email!: string;
  gender!: string;
  isMarried!: boolean;
  country!: string;
  address!: {
    city: string;
    street: string;
    pincode: string;
  };
}

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements AfterViewInit {

  @ViewChild('contactForm') contactForm!: NgForm;

  contactData: contact = {
    firstname: 'Jack',
    lastname: 'Reacher',
    email: 'reacher@gmail.com',
    gender: 'Male',
    isMarried: false,
    country: '2',
    address: {
      city: 'New york',
      street: 'Gujarat',
      pincode: '32123'
    }
  }

  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.contactForm.setValue(this.contactData);
    }, 2000);
  }

  onSubmit(contactForm: NgForm) {
    console.log(contactForm);
    
  }

  resetForm(contactForm: NgForm) {
    this.contactForm.reset();
    }

}
