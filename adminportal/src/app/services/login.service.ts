import { Injectable } from '@angular/core';
import { UserAppProfile } from '../interfaces/models/UserAppProfile';

@Injectable()
export class LoginService {
  signIncallBack(): Promise<UserAppProfile> {
    return new Promise<UserAppProfile>((resolve, reject) => {
      resolve();
    });
  }
}
