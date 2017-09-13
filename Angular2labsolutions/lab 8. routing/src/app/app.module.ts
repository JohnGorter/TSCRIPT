import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { InviteComponent } from './invite.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactNamePipe } from './contact-name/contact-name.pipe';
import { MyHoverDirective } from './my-hover/my-hover.directive';
import { SelectableDirective } from './selectable/selectable.directive';
import { routes } from './app.routes';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		InviteComponent,
		MyHoverDirective,
		SelectableDirective,
		ContactFormComponent,
		ContactListComponent,
		ContactNamePipe
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule.forRoot(routes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
