import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

const routesConfig: Routes = [
    { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routesConfig)
    ],
    declarations: [
        DashboardComponent
    ],
    exports: [ RouterModule ]
})

export class DashboardModule {}
