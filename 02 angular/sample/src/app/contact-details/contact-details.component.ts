import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Input} from '@angular/core';
import {Contact} from '../contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  @Input() contact: Contact;
  @Output() onContactDeleted: EventEmitter<void> = new EventEmitter<void>()

  constructor() { }

  ngOnInit() {
  }

  onDeleteClicked() {
    this.onContactDeleted.emit();
  }
}
