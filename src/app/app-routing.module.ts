import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './note/home/home.component';
import { CreateComponent } from './note/create/create.component';
import { EditComponent } from './note/edit/edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'note/home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'note', redirectTo: 'note/home', pathMatch:'full'},
  {path: '', component: FavoriteComponent },
  {path: 'note/create', component: CreateComponent},
  {path: 'note/edit/:id', component: EditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
