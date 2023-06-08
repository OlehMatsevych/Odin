import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommentData, Priority, WorkItem } from '../../models/work-item';
import { Editor, Toolbar, Validators } from 'ngx-editor';
import { ActivatedRoute } from '@angular/router';
import { WorkItemService } from '../../services/work-item.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit, OnDestroy{
  //create 
  editor: Editor | undefined;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  priorityNames = {
    [Priority.High]: 'High',
    [Priority.Medium]: 'Medium',
    [Priority.Low]: 'Low'
  };

  priorityName = '';

  commentForm: FormGroup = new FormGroup({
    text: new FormControl('')
  });
  

  workItem?: WorkItem;

  constructor(
    private route: ActivatedRoute,
    private workItemService: WorkItemService) { }


  ngOnInit(): void {
    this.editor = new Editor();
    this.loadWorkItem();

  }

  ngOnDestroy(): void {
    this.editor?.destroy();
  }

  
  loadWorkItem(): void {
    const type = this.route.snapshot.url[1].path; // Extract the type from the URL
    const id = this.route.snapshot.paramMap.get('id'); // Extract the ID from the route parameter

    this.workItemService.getItem(type, id!)
      .subscribe((workItem: WorkItem) => {
        this.workItem = workItem;
        this.priorityName = this.priorityNames[workItem?.priority!];
      });
  }

  saveWorkItem() {

  }

  addComment(): void {
    if (this.commentForm.valid) {
      const newComment: CommentData = {
        user: 'Oleh',
        text: this.commentForm.get('text')!.value,
        createdOn: new Date().toISOString(),
      };
      this.workItem?.comments.push(newComment);
      this.commentForm.reset();
    }
  }
}
