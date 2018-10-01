import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    users: any;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get(environment.apiEndPoin + 'user/list')
            .subscribe((data: any) => this.users = data.data);
    }

}
