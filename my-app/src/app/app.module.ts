import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule} from '@angular/router';
import { AuthguardService } from './authguard.service';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { NewcompComponent } from './newcomp/newcomp.component';

import { DescriptionComponent } from './description/description.component';
import { SttingsComponent } from './sttings/sttings.component';
import { AddsetttingsComponent } from './addsetttings/addsetttings.component';
import { MenuComponent } from './menu/menu.component';
import { UsereditComponent } from './useredit/useredit.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SearchuserComponent } from './searchuser/searchuser.component';



const appRoutes: Routes = [
  { path: 'description', component: DescriptionComponent, canActivate :[AuthguardService]},
  
  { path: 'settings', component: SttingsComponent, canActivate :[AuthguardService]},
  { path: 'additionalsettings', component: AddsetttingsComponent, canActivate :[AuthguardService]},
  { path: 'newuser', component: MenuComponent },
  { path: 'edituser/:id', component: UsereditComponent, canActivate :[AuthguardService]},
  { path: 'login', component: LoginComponent },
  { path: 'logout',component: LogoutComponent, canActivate :[AuthguardService] },
  { path: 'searchuser',component: SearchuserComponent, canActivate :[AuthguardService] }

];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NewcompComponent,
    
    DescriptionComponent,
    SttingsComponent,
    AddsetttingsComponent,
    MenuComponent,
    UsereditComponent,
    LoginComponent,
    LogoutComponent,
    SearchuserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
