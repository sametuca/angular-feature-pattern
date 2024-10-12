import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component'; // Kullanıcı bileşeni

@NgModule({
  declarations: [
    UserListComponent // UserComponent'i burada tanımlayın
  ],
  imports: [
    CommonModule // Diğer Angular modüllerini buraya ekleyebilirsiniz
  ],
  exports: [
  ]
})
export class UserModule { }
