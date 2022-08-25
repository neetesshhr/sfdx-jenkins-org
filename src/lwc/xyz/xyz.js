import { LightningElement } from 'lwc';
export default class Xyz extends LightningElement {
  greeting = 'World';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}