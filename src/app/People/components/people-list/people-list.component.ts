import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { MatDialog } from '@angular/material/dialog';
import { InviteUsersModalComponent } from '../invite-users-modal/invite-users-modal.component';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent  implements OnInit {
  users: User[] = [];

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  ngOnInit(): void {
    // this.http.get<any[]>('api/users').subscribe(users => {
    //   this.users = users;
    // });
    this.users = [
      {id: 1, name: 'Oleh', email:"ttest@t.t", role: 'admin', permissions: ['all'] },
      {id: 2, name: 'Pavlo', email:"2ttest@t.t", role: 'manager', permissions: ['manage'] },
      {id: 3, name: 'Vadim', email:"3ttest@t.t", role: 'developer', permissions: ['view'] }
    ]
  }

  removeUser(userId: number) {
    // this.http.delete(`api/users/${userId}`).subscribe(() => {
    //   this.users = this.users.filter(user => user.id !== userId);
    // });
    this.users = this.users.filter(user=> user.id !== userId);
  }

  openInviteUserModal() {
    const dialogRef = this.dialog.open(InviteUsersModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      // Handle the result here
    });
  }
}