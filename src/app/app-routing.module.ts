import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component';
import {SiteLayoutComponent} from './_layouts/site-layout/site-layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routesConfig: Routes = [
    {
        path: '',
        component: SiteLayoutComponent,
        children: [
            { path: '', component: DashboardComponent, pathMatch: 'full'},
            { path: 'dashboard', component: DashboardComponent}
        ]
    },
    { path: 'login', component: LoginComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routesConfig),
        CommonModule
    ],
    declarations: []
    ,
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
