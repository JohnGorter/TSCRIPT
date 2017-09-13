import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { InviteComponent } from './invite.component';

export const routes: Route[] = [
	{ path: '', component: HomeComponent },
	{ path: 'invite', component: InviteComponent },
];