import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { MatDialog } from '@angular/material/dialog';
import { InviteUsersModalComponent } from '../invite-users-modal/invite-users-modal.component';
import { PeopleService } from '../../services/people.service';
import { SuccessModalComponent } from '../success-modal/success-modal.component';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent  implements OnInit {
  users: User[] = [];

  constructor(private peopleService: PeopleService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.peopleService.getAll().subscribe(users => {
      this.users = users;
    });
  }

  removeUser(userId: string) {
    this.peopleService.delete(userId).subscribe(() => {
      this.users = this.users.filter(user => user.id !== userId);
    });
  }

  openInviteUserModal() {
    const dialogRef = this.dialog.open(InviteUsersModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.dialog.open(SuccessModalComponent, {
        width: '300px',
      });
    });
  }
}