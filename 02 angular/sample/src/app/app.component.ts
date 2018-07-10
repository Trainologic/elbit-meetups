import {ApplicationRef, Component, ElementRef, NgZone} from '@angular/core';
import {elementDef} from '@angular/core/src/view';
import {Contact, ContactService} from './contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[];
  counter: number = 0;

  contacts2 = []

  constructor(private elementRef: ElementRef,
              private ngZone: NgZone,
              private appRef: ApplicationRef,
              private contactService: ContactService) {
  }

  async ngOnInit() {
    this.contacts = await this.contactService.getAll();
  }

  onButtonClicked() {
    console.log("clicked");

    this.ngZone.runOutsideAngular(()=> {
      this.elementRef.nativeElement.addEventListener("mousemove", () => {
        console.log(++this.counter);

        this.appRef.tick();
      });
    });
  }

  remove(contact: Contact) {
    if(confirm("Are you sure you want to delete " + contact.name + " ?")) {
      const index = this.contacts.findIndex(c => c==contact);
      if(index != -1) {
        this.contacts.splice(index, 1);
      }
    }
  }

  noop() {
  }

  onContactDeleted() {
    console.log("onContactDeleted");
  }
}
