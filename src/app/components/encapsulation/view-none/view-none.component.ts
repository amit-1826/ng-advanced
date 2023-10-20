import { Component, ViewEncapsulation } from '@angular/core';

@Component({  
  selector: 'app-view-none',
  templateUrl: './view-none.component.html',
  styleUrls: ['./view-none.component.scss'],
  encapsulation: ViewEncapsulation.None,
  inputs: ['bankName']
})
export class ViewNoneComponent {
  bankName = 'Bank Name';
}
