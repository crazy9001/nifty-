import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import {LoginComponent} from './login/login.component';

const routesConfig: Routes = [
    { path: 'login', component: LoginComponent},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
    imports: [
        DashboardModule,
        RouterModule.forRoot(routesConfig),
        CommonModule
    ],
    declarations: []
    ,
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
