import { Component, input } from '@angular/core';
import { RegisterCreds, User } from '../../../types/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  membersFromHome = input.required<User[]>()
  protected creds = {} as RegisterCreds;

  register(): void {
    console.log(this.creds);
  }

  cancel(): void {
    console.log('Cancel executed');
  }
}
