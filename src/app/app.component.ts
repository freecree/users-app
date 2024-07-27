import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersFilterComponent } from './components/users-filter/users-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersListComponent, UsersFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
