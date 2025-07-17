// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public isLoggedIn = new BehaviorSubject<boolean>(!!this.getUserInfo());

  login(username: string, password: string): boolean {
    if (username === 'touchworld' && password === 'touchworldTech') {
      localStorage.setItem('user', JSON.stringify({ username }));
      this.isLoggedIn.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('user');
    this.isLoggedIn.next(false);
  }

  getUserInfo() {
    return localStorage.getItem('user');
  }
}
