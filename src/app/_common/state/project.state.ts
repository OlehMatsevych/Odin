import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ProjectStateService {
  private projectSubject: BehaviorSubject<string | null>;
  public project: Observable<string | null>;

  constructor(
  ) {
    this.projectSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('projectId')!));
    this.project = this.projectSubject.asObservable();
  }

  public get projectIdValue() {
    return this.projectSubject.value;
  }

  setState(id: string) {
    localStorage.setItem('projectId', JSON.stringify(id));
  }
}