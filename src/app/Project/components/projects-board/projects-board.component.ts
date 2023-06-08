import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { CreateProjectModalComponent } from '../create-project-modal/create-project-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ProjectStateService } from 'src/app/_common/state/project.state';

@Component({
  selector: 'app-projects-board',
  templateUrl: './projects-board.component.html',
  styleUrls: ['./projects-board.component.scss']
})
export class ProjectsBoardComponent implements OnInit {
  dataSource: Project[] = [];

  constructor(
    private router: Router,
    private service: ProjectService,
    public dialog: MatDialog,
    public projectStateService: ProjectStateService
  ) { }
  

  ngOnInit(): void {
    this.service.getAll()
    .subscribe(dataSource => this.dataSource = dataSource);
  }

  onAddData() {
    const dialogRef = this.dialog.open(CreateProjectModalComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((result: Project) => {
      if (result) {    
        this.service.add(result)     
         .subscribe(hero => {
          this.dataSource.push(hero);
        });
      }
    });
  }

  onDeleteData(index: any) {
    if (index !== -1) {
      this.service.delete(index.id).subscribe(x=> {
        this.dataSource.splice(index - 1, 1);
      });
    }
  }

  openRoom(data: any) {
    this.projectStateService.setState(data.id);
    this.router.navigate(['board']);
  }
}