import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from 'ngx-editor';
import { Project } from '../../models/project';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-project-modal',
  templateUrl: './create-project-modal.component.html',
  styleUrls: ['./create-project-modal.component.scss']
})
export class CreateProjectModalComponent  implements OnInit {
  form!: FormGroup;

  constructor(    
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateProjectModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  get f() { return this.form.controls; }

  addProject(): void {
    if (this.form.valid) {
      const newProject: Project = {
        name: this.f['title'].value, 
        description: this.f['description'].value
      };
      this.dialogRef.close(newProject);
    }
  }
}
