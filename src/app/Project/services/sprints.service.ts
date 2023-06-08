import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Sprint } from "../models/sprint";

@Injectable({ providedIn: 'root' })
export class SprintService {

  private baseUrl = 'https://localhost:7034/api/sprint';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  getAll() {
    return this.http.get<Sprint[]>(this.baseUrl)
  }
  
  add(project: Sprint) {
    return this.http.post<Sprint>(this.baseUrl, project, this.httpOptions)
  }

  delete(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Sprint>(url, this.httpOptions)
  }
}