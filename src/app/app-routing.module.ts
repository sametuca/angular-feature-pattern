import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRoutingModule } from './features/user/user-routing.module';

const routes: Routes = [
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UserRoutingModule 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
