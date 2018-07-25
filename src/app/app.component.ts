import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  showForm = false;
  name = '';
  country = '';
  students = [{
    name: 'Andrea',
    country: 'Spain',
    height: '1.75'
  }, {
    name: 'Gabriel',
    country: 'Colombia',
    height: '1.9'
  }, {
    name: 'Daniela',
    country: 'Venezuela'
  }];

  handleAddClick() {
    this.students.push({
      name: this.name,
      country: this.country
    });
    this.name = '';
    this.country = '';
    this.showForm = false;
  }

  handleRemoveClick(ix) {
    const index = ix;
    this.students.splice(index, 1);
  }
}
