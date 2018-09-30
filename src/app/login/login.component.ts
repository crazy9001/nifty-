import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '../_services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    formSingin: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
    ) {}

    ngOnInit(): void {
        this.formSingin = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.formSingin.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.formSingin.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService
            .login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error.error.error);
                    this.loading = false;
                });

    }
}
