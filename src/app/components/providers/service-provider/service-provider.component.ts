import { Component, Inject, OnInit} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { TestService } from 'src/app/services/test.service';

export function factoryFunction(USE_VALUE: string, classValue: DataService) {
  console.log(USE_VALUE);
  return classValue.getData();
}

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.scss'],
  providers: [
    {
      // useValue can also return function 
      provide: 'USE_VALUE', useValue: 'Hello from use value'
    },
    {
      provide: 'USE_CLASS', useClass: DataService
    },
    {
      // use factory returns a function which is already invoke, we will directly get value of invoked function
      provide: 'USE_FACTORY', useFactory: factoryFunction, deps: ['USE_VALUE', 'USE_CLASS']
    },
    {
      provide: 'USE_EXISTING', useExisting: 'USE_VALUE'
    },
    {
      provide: TestService, useClass: TestService
    }
  ]
})
export class ServiceProviderComponent implements OnInit {
  constructor(
    @Inject('USE_VALUE') public useValue: string,
    @Inject('USE_CLASS') public dataService: DataService,
    @Inject('USE_FACTORY') public useFactory: any,
    @Inject('USE_EXISTING') public useExisting: any,
    private testService: TestService
  ) {

  }

  ngOnInit(): void {
      console.log(this.useValue);
      console.log(this.dataService.getData().subscribe());
      console.log(this.useFactory);
      console.log(this.useExisting);
  }
}
