import { Injectable } from '@angular/core';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [
    { id: 1, firstName: 'John', lastName: 'Adams', phone: '701-000-1000', email: 'john@example.com' },
    { id: 2, firstName: 'Mary', lastName: 'Jane', phone: '701-000-1000', email: 'mary@example.com' }
  ];

  getContacts() {
    return this.contacts;
  }

  addContact(contact: Contact) {
    contact.id = Date.now();
    this.contacts.push(contact);
  }

  updateContact(contact: Contact) {
    const index = this.contacts.findIndex(c => c.id === contact.id);
    if (index > -1) this.contacts[index] = contact;
  }

  deleteContact(id: number) {
    this.contacts = this.contacts.filter(c => c.id !== id);
  }
}
