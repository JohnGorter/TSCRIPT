import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Contact } from './models/contact';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ContactsService } from './services/contacts.service';
import 'rxjs/add/operator/map'

function emailValidator(control: AbstractControl) {
	let regex = /^.+@.+\.[a-zA-Z]+$/;
	return regex.test(control.value) ? null : { email: { valid: false } };
}

@Component({
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
	contacts: Contact[];

	constructor(private contactsService: ContactsService) { }

	ngOnInit() {
		this.contactsService.query().subscribe(contacts => this.contacts = contacts);
	}

	addContact(newContact: Contact) {
		// this REST-services returns the updated contact (id has been added).
		// we're simply adding it to the local array here, but you can also 
		// do a new HTTP call where you retrieve a full list of contacts.
		// this does place more load on your server and it costs a bit more time,
		// but the data is then fully in sync with the server. All up to you.
		this.contactsService.post(newContact).subscribe((updatedContact: Contact) => this.contacts.push(updatedContact));
	}
}