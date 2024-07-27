import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { UsersFilterService } from '../../services/users-filter.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    MatTableModule,
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  private readonly usersService = inject(UsersService);
  private readonly usersFilterService = inject(UsersFilterService);

  displayedColumns: string[] = ['id', 'login', 'type'];

  readonly filteredUsers$ = this.usersFilterService.loginFilter$.pipe(
    switchMap((loginFilter) => {
      return this.usersService.getUsersByLogin(loginFilter);
    })
  );
}
