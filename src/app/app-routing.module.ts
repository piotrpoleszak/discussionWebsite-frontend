import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/signup/signup.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { CreateSubpostComponent } from './subpost/create-subpost/create-subpost.component';
import { ListSubpostsComponent } from './subpost/list-subposts/list-subposts.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'view-post/:id', component: ViewPostComponent},
    { path: 'user-profile/:name', component: UserProfileComponent},
    { path: 'list-subposts', component: ListSubpostsComponent},
    { path: 'create-post', component: CreatePostComponent },
    { path: 'create-subpost', component: CreateSubpostComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }