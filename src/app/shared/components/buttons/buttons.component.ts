import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/impl/auth.service';
;

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent  implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {}
  onLogin(){
    this.authService.login();
  }

  onLogout(){
    this.authService.logout();
  }

}
