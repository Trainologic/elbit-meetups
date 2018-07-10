import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private httpClient: HttpClient) { }

  async getAll(): Promise<Contact[]> {
    const res = await (this.httpClient.get<Contact[]>("/assets/contacts.json").toPromise());
    return res;
  }
}

export interface Contact {
  id: number;
  name: string;
}
