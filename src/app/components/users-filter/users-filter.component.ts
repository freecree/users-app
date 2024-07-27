import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormField, MatInput } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { UsersFilterService } from '../../services/users-filter.service';

@Component({
  selector: 'app-users-filter',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInput,
    MatFormField,
    MatButton
  ],
  templateUrl: './users-filter.component.html',
  styleUrl: './users-filter.component.css'
})
export class UsersFilterComponent {
  private readonly usersFilterService = inject(UsersFilterService);
  readonly loginFilterControl = new FormControl('', { nonNullable: true }); 

  submitFilter(): void {
    this.usersFilterService.setLoginFilter(this.loginFilterControl.value);
  }
}
