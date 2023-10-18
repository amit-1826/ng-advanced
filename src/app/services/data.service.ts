import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  getData() {
    return this.httpClient.get('someUrl')
      .pipe(delay(3000));
  }
}
