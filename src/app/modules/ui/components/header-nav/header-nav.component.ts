import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../users/services/user.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss'
})
export class HeaderNavComponent {
  userToken = this.userService.userToken;
  constructor(private userService: UserService) {}

}
