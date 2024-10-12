import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  constructor() {
    this.userService = inject(UserService);    
  }
  private userService;

  users!: User[];

  async ngOnInit() {
    this.users = await this.getAllCustomers();
  }

  async getAllCustomers() {
    return await this.userService.getAllUsers();
  }
}
