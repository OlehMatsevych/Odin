import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ProjectStateService {
    currentProjectId: string = '';

    constructor() { }

    public setState(value: any) {
      this.currentProjectId = value;
    }
  
    public getState(key: string) {
      return this.currentProjectId;
    }
}