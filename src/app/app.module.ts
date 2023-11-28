import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NammabaggeComponent } from './nammabagge/nammabagge.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './service/auth.service';
import { AuthguardService } from './service/authguard.service';
import { UserService } from './service/user.service';
import { FileUpload } from './models/fileupload';
import { UploadService } from './service/upload.service';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AdminguardService } from './service/adminguard.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NammabaggeComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireStorageModule,
    RouterModule.forRoot([
      {path:'login',component:LoginComponent},

      {path:'',component:HomeComponent,canActivate:[AuthguardService]},
      {path:'nammabagge',component:NammabaggeComponent,canActivate:[AuthguardService]},
    ]),
  ],
  providers: [
    AuthService,
    AuthguardService,
    UserService,
    UploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
