import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/AuthentificationService/authentication.service';
import {Component} from '@angular/core';
import { Storage } from '@ionic/storage';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    /**
     * Module principale de l'application initalisant le state du login
     *
     * @param {Platform} platform
     * @param {SplashScreen} splashScreen
     * @param {StatusBar} statusBar
     * @param {AuthenticationService} authenticationService
     * @param {Router} router
     */
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private authenticationService: AuthenticationService,
        private router: Router
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();

            this.authenticationService.authenticationState.subscribe(state => {
                if (state) {
                } else {
                    this.router.navigate(['login']);
                }
            }
            );

        });
    }
}
