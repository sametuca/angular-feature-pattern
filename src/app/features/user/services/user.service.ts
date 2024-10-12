import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.interface';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  async getAllUsers(): Promise<User[]> {
    try {
      return await firstValueFrom(this.http.get<User[]>('https://jsonplaceholder.typicode.com/users'));
    } catch (error) {
      console.error('Failed to fetch users', error);
      throw error; // Hatanın dışarıya fırlatılması
    }
  }
}