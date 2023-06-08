import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user';

@Component({
  selector: 'app-invite-users-modal',
  templateUrl: './invite-users-modal.component.html',
  styleUrls: ['./invite-users-modal.component.scss']
})
export class InviteUsersModalComponent {
  email: string = '';

  private baseUrl = 'https://localhost:7034/api/email';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<InviteUsersModalComponent>) {}

  inviteUser() {
    this.dialogRef.close();
    return this.http.post<User>(this.baseUrl, {email:this.email}, this.httpOptions).subscribe();
  }
}
