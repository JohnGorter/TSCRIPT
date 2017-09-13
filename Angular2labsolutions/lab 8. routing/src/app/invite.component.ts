import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Contact } from './models/contact';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import 'rxjs/add/operator/map'

@Component({
	templateUrl: './invite.component.html'
})
export class InviteComponent implements OnInit {
	contacts: Contact[];
	private url = 'http://127.0.0.1:9688/contacts';

	nrOfPossibleDates = 3;
	nrOfPossibleDatesArray = Array(this.nrOfPossibleDates); // *ngFor only accepts collections. See http://stackoverflow.com/a/40822960/888093 for a much better solution
	inviteForm: FormGroup;

	constructor(
		private http: Http,
		private fb: FormBuilder) { }

	ngOnInit() {
		// retrieve the contacts
		this.http
			.get(this.url)
			.map(resp => resp.json())
			.subscribe(contacts => {
				this.contacts = contacts;

				// set up the contacts portion of the form
				let formContacts = <FormArray>this.inviteForm.get('contacts');
				for (let c of contacts) {
					formContacts.push(this.fb.group({
						id: [c.id, Validators.required],
						selected: [false]
					}));
				}
			});


		// set up the dates portion of the form
		let dates = [];
		for (let i = 0; i < this.nrOfPossibleDates; i++) {
			dates.push(this.fb.group({
				date: ['', Validators.required]
			}));
		}

		// define form
		this.inviteForm = this.fb.group({
			event: ['', Validators.required],
			dates: this.fb.array(dates),
			contacts: this.fb.array([]) // contacts are filled when they've been retrieved
		});
	}

	invite() {
		console.log('Invitation data:', this.inviteForm.value);
	}
}