import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactNamePipe } from './contact-name/contact-name.pipe';
import { MyHoverDirective } from './my-hover/my-hover.directive';
import { SelectableDirective } from './selectable/selectable.directive';

@NgModule({
	declarations: [
		AppComponent,
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
		HttpModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
