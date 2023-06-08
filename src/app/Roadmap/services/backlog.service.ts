import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RoadmapNode } from "../models/dialog-data";
import { ProjectStateService } from "src/app/_common/state/project.state";
import { HighLevelTask } from "src/app/Project/models/task-high-level";

@Injectable({ providedIn: 'root' })
export class BacklogService {

  private baseUrl = 'https://localhost:7034/api/project';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    public projectStateService: ProjectStateService) { }

  getAllWorkItems() {
    let project: any = this.projectStateService.projectIdValue;

    const url = `${this.baseUrl}/${project}/work-items`;
    return this.http.get<HighLevelTask[]>(url)
  }

  getAll(){
    let project: any = this.projectStateService.projectIdValue;

    const url = `${this.baseUrl}/${project}/backlog`;
    return this.http.get<RoadmapNode[]>(url)
  }
  
  add(project: RoadmapNode) {
    return this.http.post<RoadmapNode>(this.baseUrl, project, this.httpOptions)
  }

  delete(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<RoadmapNode>(url, this.httpOptions)
  }
}