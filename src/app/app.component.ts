import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // name = 'Angular ' + VERSION.major;

  public name: any;
  public goals = [];

  addGoal() {
    if (this.name == '') {
    } else {
      this.goals.push(this.name);
      console.log(this.name);
    }
  }
  delete(i) {
    this.goals.splice(i, 1);
  }
}
