import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProjectStateService } from "src/app/_common/state/project.state";
import { User } from "../models/user";

@Injectable({ providedIn: 'root' })
export class PeopleService {

  private baseUrl = 'https://localhost:7034/api/user';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    public projectStateService: ProjectStateService) { }

  getAll(){
    return this.http.get<User[]>(this.baseUrl)
  }
  

  delete(id: string) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<User>(url, this.httpOptions)
  }
}