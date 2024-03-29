import {AuthenticationService} from '../../services/AuthentificationService/authentication.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    loginModel = '';
    passwordModel: string = '';

    /**
     * Module permettant de gérer la page le login en appelant le service d'authentification
     * @param {AuthenticationService} authService
     * @param {Router} router
     */
    constructor(private authService: AuthenticationService, private  router: Router) {
    }

    ngOnInit() {
    }

    login() {
        if (this.loginModel === 'Bob' && this.passwordModel === 'toto') {
            this.authService.login();
            this.router.navigate(['list']);
        } else {
            alert('invalid login and/or password');
        }
    }

}
