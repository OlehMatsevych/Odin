import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { WorkItem } from "../models/work-item";

@Injectable({ providedIn: 'root' })
export class WorkItemService {

    private baseUrl = 'https://localhost:7034/api/project';  // URL to web api
    private apiUrl = 'https://localhost:7034/api';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  getAll() {
    return this.http.get<WorkItem[]>(this.baseUrl)
  }
  
  add(project: WorkItem) {
    return this.http.post<WorkItem>(this.baseUrl, project, this.httpOptions)
  }

  delete(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<WorkItem>(url, this.httpOptions)
  }

  getItem(type: string, id: string) {
    const url = `${this.apiUrl}/${type}/${id}`;
    return this.http.get<WorkItem>(url, this.httpOptions);
  }
}