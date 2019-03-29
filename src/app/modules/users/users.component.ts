import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/HttpService/http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users;

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.httpService.getListOfUsers()
      .subscribe(res => {
        this.users = res;
      },
        err => console.error(err)
      );
  }

  deleteUserById(id) {
    console.log(id);
    this.httpService.findByIdAndRemove(id)
      .subscribe(res => {
          this.users = this.users.filter(({_id}) => _id !== res._id);
        },
        err => console.error(err.error)
      );
  }

  getDetailedInfo(id) {
    this.router.navigate(['/users', id]);
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
