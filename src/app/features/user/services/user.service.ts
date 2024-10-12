import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, filter, map, Observable, throwError } from 'rxjs';
import { User } from '../models/user.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        catchError(error => {
          console.error('Users fetching failed:', error);
          return throwError(() => new Error('An error occurred while fetching users.'));
        })
      );
  }
}