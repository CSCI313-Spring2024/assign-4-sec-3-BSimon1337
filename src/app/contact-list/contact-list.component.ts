import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { Router, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }

  deleteContact(id: number) {
    this.contactService.deleteContact(id);
    this.contacts = this.contactService.getContacts();
  }

  editContact(contact: Contact) {
    this.router.navigate(['/edit', contact.id]);
  }
}
