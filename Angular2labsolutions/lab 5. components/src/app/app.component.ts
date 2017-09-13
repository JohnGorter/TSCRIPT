import { Component } from '@angular/core';
import { Contact } from './models/contact';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

function emailValidator(control: AbstractControl) {
	let regex = /^.+@.+\.[a-zA-Z]+$/;
	return regex.test(control.value) ? null : { email: { valid: false } };
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	contacts: Contact[] = [
		new Contact('Sam', 'Smith', 'sam.smith@music.com'),
		new Contact('Frank', 'Muscles', 'frank@muscles.com'),
		new Contact('Eddy', 'Valentino', 'eddy@valfam.co.uk')
	];

	addContact(newContact: Contact) {
		this.contacts.push(newContact);
	}
}