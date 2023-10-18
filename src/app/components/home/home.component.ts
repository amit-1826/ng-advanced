import {Component} from '@angular/core';
import {DataService} from "../../services/data.service";
import {noop, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private unSubscription$ =  new Subject<any>()

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    console.log('init')
    this.getData();
  }

  private getData() {
    this.dataService
      .getData()
      .pipe(takeUntil(this.unSubscription$))
      .subscribe({
        next: noop
      })
  }
}
