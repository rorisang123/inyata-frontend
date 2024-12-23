import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-user',
  templateUrl: './user.component.html',
  imports: [FormsModule]
})
export class UserComponent implements OnInit {
  users: any[] = [];
  newUser = { name: '', email: '' };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  addUser(): void {
    this.userService.addUser(this.newUser).subscribe((user) => {
      this.users.push(user); // Update the list dynamically
      this.newUser = { name: '', email: '' }; // Reset form
    });
  }
}
