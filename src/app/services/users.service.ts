import { inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { UserEntity } from '../types/UserEntity';
import { SearchUsersResponse } from '../types/SearchUsersResponse';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly api = inject(ApiService);

  private readonly _users$ = new BehaviorSubject<UserEntity[]>([]);
  public readonly users$ = this._users$.asObservable();

  constructor() {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.api.get<UserEntity[]>('/users').subscribe((users) => {
      this._users$.next(users);
    });
  }

  public getUsersByLogin(login: string): Observable<UserEntity[]> {
    if (login === '') {
      return this.users$;
    }

    const params = new HttpParams().set('q', login);
    return this.api.get<SearchUsersResponse>('/search/users', params).pipe(
      map((response) => response.items)
    )
  }
}
