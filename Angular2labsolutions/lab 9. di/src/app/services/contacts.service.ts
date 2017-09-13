import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Contact } from '../models/contact';

@Injectable()
export class ContactsService {
	constructor(private http: Http) { }
	private url = 'http://127.0.0.1:9688/contacts';

	query() {
		return this.http
			.get(this.url)
			.map(resp => resp.json())
	}

	post(newContact: Contact) {
		return this.http
			.post(this.url, newContact)
			.map(resp => resp.json());
	}

	put(editedContact: Contact) {
		return this.http
			.put(`${this.url}/${editedContact.id}`, editedContact)
			.map(resp => resp.json());
	}

	delete(contact: Contact) {
		return this.http
			.delete(`${this.url}/${contact.id}`)
			.map(resp => resp.json());
	}
}