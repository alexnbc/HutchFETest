import { Injectable } from '@angular/core';
import { UserAppProfile } from '../interfaces/models/UserAppProfile';
import { PortalSync } from '../interfaces/responses/PortalSync';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  constructor( private http: HttpClient) {}
  private jsonURL = 'assets/data.json';

  public getData(): Observable<any> {
    return this.http.get(this.jsonURL);
  }
}
