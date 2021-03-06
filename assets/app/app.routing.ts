import {Routes, RouterModule} from "@angular/router";
import {MessagesComponent} from "./messages/messages.component";
import {AuthenticationComponent} from  "./auth/authentication.component";
import {AUTH_ROUTES} from "./auth/auth.route";
const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/messages', pathMatch: 'full' }, // pathMath: full means we have to redirect to /messages only when default path (i.e is Emplty)
    {path: 'messages', component: MessagesComponent},
    {path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES } /// Children is keyboard for child route which come from auth.route.ts

];


// to Make angular js aware about route
export const routing  = RouterModule.forRoot(APP_ROUTES);