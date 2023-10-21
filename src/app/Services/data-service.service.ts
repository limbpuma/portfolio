import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cardsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private projectsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  
  public cards$: Observable<any[]> = this.cardsSubject.asObservable();
  public projects$: Observable<any[]> = this.projectsSubject.asObservable();

  

  updateCards(cards: any[]): void {
    this.cardsSubject.next(cards);
  }

  updateProjects(projects: any[]): void {
    this.projectsSubject.next(projects);
  }
}
