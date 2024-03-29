import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../services/GuardsService/auth.guard';
import {HikeStateService} from '../../services/HikeStateService/hike-state.service';

/**
 * Definition des routes de l'application
 * @type {({path: string; pathMatch: string; redirectTo: string} | {path: string; canActivate: AuthGuard[]; loadChildren: string} | {path: string; redirectTo: string})[]}
 */
const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'list', loadChildren: '../ListModule/list.module#ListPageModule', canActivate: [AuthGuard]},
    { path: 'login', loadChildren: '../LoginModule/login.module#LoginPageModule' , canActivate: [AuthGuard]},
    { path: 'hike-detail', loadChildren: '../HikeDetailModule/hike-detail.module#HikeDetailPageModule', canActivate: [AuthGuard] },
    { path: 'hike-running', loadChildren: '../HikeRunningModule/hike-running.module#HikeRunningPageModule', canActivate: [AuthGuard]},
    { path: '**', redirectTo: 'login' }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
