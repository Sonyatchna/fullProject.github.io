import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpService} from '../../services/HttpService/http.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-by-id',
  templateUrl: './user-by-id.component.html',
  styleUrls: ['./user-by-id.component.css']
})
export class UserByIdComponent implements OnInit, OnDestroy {

  private sub;
  private id;
  public user;

  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService, private _location: Location) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(({ id }) => this.id = id);
    this.httpService.findUserById(this.id)
      .subscribe((res) => {
          this.user = res;
        },
        err => console.log('error', err)
      );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  backClicked() {
    this._location.back();
  }

}
