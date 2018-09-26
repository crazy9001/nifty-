import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

const routesConfig: Routes = [
    { path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routesConfig)
    ],
    declarations: [
        LoginComponent
    ],
    exports: [ RouterModule ]
})

export class LoginModule {}
