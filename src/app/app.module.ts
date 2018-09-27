import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AlertService, AuthenticationService } from './_services';

import {AppComponent} from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './_layouts/header/header.component';
import { FooterComponent } from './_layouts/footer/footer.component';
import { NavbarComponent } from './_layouts/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './_directives';
import { SiteLayoutComponent } from './_layouts/site-layout/site-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        NavbarComponent,
        LoginComponent,
        AlertComponent,
        SiteLayoutComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        AlertService,
        AuthenticationService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
