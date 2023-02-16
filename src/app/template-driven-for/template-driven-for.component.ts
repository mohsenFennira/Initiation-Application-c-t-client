import { Component } from '@angular/core';
import { AbstractControl, NgForm, Validator } from '@angular/forms';

@Component({
  selector: 'app-template-driven-for',
  templateUrl: './template-driven-for.component.html',
  styleUrls: ['./template-driven-for.component.css']
})
export class TemplateDrivenForComponent {
addform: any;
addForm(add: NgForm) {
console.log(add);
}

}
