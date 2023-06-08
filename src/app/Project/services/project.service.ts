import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Project } from "../models/project";

@Injectable({ providedIn: 'root' })
export class ProjectService {

  private baseUrl = 'https://localhost:7034/api/project';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  getAll() {
    return this.http.get<Project[]>(this.baseUrl)
  }
  
  add(project: Project) {
    return this.http.post<Project>(this.baseUrl, project, this.httpOptions)
  }

  delete(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Project>(url, this.httpOptions)
  }
}