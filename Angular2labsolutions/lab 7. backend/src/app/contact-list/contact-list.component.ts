import { Component, Input, DoCheck } from '@angular/core';
import { Http } from '@angular/http';
import { Contact } from '../models/contact';

@Component({
	selector: 'contact-list',
	templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements DoCheck {
	@Input() contacts: Contact[];
	selected: number[] = [];
	private url = 'http://127.0.0.1:9688/contacts/';

	constructor(private http: Http) { }

	// When selecting rows, ngOnChanges does not get called because the reference to the array 
	// doesn't change, only the content. Use ngDoCheck and possibly combine it with manually addressing  
	// change detection
	previousNumberOfIndexes = 0;
	ngDoCheck() {
		if (this.selected.length !== this.previousNumberOfIndexes) {
			console.log('List of indexes has changed:', this.selected);
			this.previousNumberOfIndexes = this.selected.length;
		}
	}

	editContact(contact: Contact) {
		contact.editing = true;
	}

	saveContact(contact: Contact) {
		// as said at AppComponent, you can also retrieve a full list to fully stay in sync,
		// but that takes a bit longer
		this.http
			.put(this.url + contact.id, contact)
			.map(resp => resp.json())
			.subscribe(() => contact.editing = false);
	}

	deleteContact(contact: Contact) {
		let index = this.contacts.indexOf(contact);
		this.http
			.delete(this.url + contact.id)
			.map(resp => resp.json())
			.subscribe(() => this.contacts.splice(index, 1));

	}
}