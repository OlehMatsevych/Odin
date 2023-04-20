import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-invite-users-modal',
  templateUrl: './invite-users-modal.component.html',
  styleUrls: ['./invite-users-modal.component.scss']
})
export class InviteUsersModalComponent {
  email: string = '';

  constructor(public dialogRef: MatDialogRef<InviteUsersModalComponent>) {}

  inviteUser() {
    // Send the invitation here using this.email
    this.dialogRef.close();
  }
}
