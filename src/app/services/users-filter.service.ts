import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersFilterService {
  private readonly _loginFilter$ = new BehaviorSubject<string>('');
  public readonly loginFilter$ = this._loginFilter$.asObservable();

  public setLoginFilter(login: string): void {
    this._loginFilter$.next(login);
  }
}
