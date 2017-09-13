import { Component, Input, DoCheck } from '@angular/core';
import { Http } from '@angular/http';
import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';

@Component({
	selector: 'contact-list',
	templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements DoCheck {
	@Input() contacts: Contact[];
	selected: number[] = [];

	constructor(private contactsService: ContactsService) { }

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
		this.contactsService.put(contact).subscribe(() => contact.editing = false);
	}

	deleteContact(contact: Contact) {
		let index = this.contacts.indexOf(contact);
		this.contactsService.delete(contact).subscribe(() => this.contacts.splice(index, 1));
	}
}