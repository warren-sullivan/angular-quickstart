import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>{{name}}</h1>
  <p><strong>Email:</strong> {{email}}</p>
  <p><strong>Address:</strong> {{address.street}} {{address.city}}, {{address.state}}</p>
  <button (click)="toggleHobbies()">{{ showHobbies ? "Hide" : "Show"}} Hobbies</button>
  <div *ngIf = "showHobbies">
    <h3>Hobbies</h3>
    <ul>
      <li *ngFor="let hobby of hobbies">
        {{hobby}}
      </li>
    </ul>
  </div>
  <form>
    <label>Name: </label> <br/>
    <input type="text" name="name" [(ngModel)]="name" />
  </form>
  `,
})
export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;

  constructor() {
    this.name = 'Aaron';
    this.email = "aaron@gmail.com";
    this.address = {
      street: '12 main street',
      city: 'Bentonville',
      state: 'AR'
    }
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = false;
  }

  toggleHobbies(): void {
    console.log("Show hobbies");
    this.showHobbies = !this.showHobbies;
  }
}

interface address {
  street: string;
  city: string;
  state: string;
}