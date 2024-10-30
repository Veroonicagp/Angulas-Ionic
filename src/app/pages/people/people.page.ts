import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AlertController, AnimationController, InfiniteScrollCustomEvent, ModalController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Paginated } from 'src/app/core/models/paginated.model';
import { Person } from 'src/app/core/models/person.model';
import { PeopleService } from 'src/app/core/services/impl/people.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  _people:BehaviorSubject<Person[]> = new BehaviorSubject<Person[]>([]);
  people$:Observable<Person[]> = this._people.asObservable();


  constructor(
    private peopleSvc:PeopleService,

  ) { }

  //preguntar el por que de la funcion y el void
  ngOnInit():void {
    this.getMorePeople();
  }
  selectedPerson: any = null;
  isAnimating = false;
  page:number = 1;
  pageSize:number = 25;

  refresh(){
    this.page=1;
    this.peopleSvc.getAll(this.page, this.pageSize).subscribe({
      next:(response:Paginated<Person>)=>{
        this._people.next([...response.data]);
        this.page++;
      }
    });
  }
  getMorePeople(notify:HTMLIonInfiniteScrollElement | null = null) {
    this.peopleSvc.getAll(this.page, this.pageSize).subscribe({
      next:(response:Paginated<Person>)=>{
        this._people.next([...this._people.value, ...response.data]);
        this.page++;
        notify?.complete();
      }
    });
  }

  



  


}
