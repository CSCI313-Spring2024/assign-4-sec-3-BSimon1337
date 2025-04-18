import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { Contact } from '../contact.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contact: Contact = { id: 0, firstName: '', lastName: '', phone: '', email: '' };

  constructor(private contactService: ContactService, private router: Router) {}

  onSubmit() {
    this.contactService.addContact(this.contact);
    this.router.navigate(['/']);
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
