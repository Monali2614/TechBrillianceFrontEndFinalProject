import { Component, OnInit } from '@angular/core';
import { UserinfoService } from 'src/app/services/userinfo.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  userInfoList: any[] = [];

  constructor(private userInfoService: UserinfoService) {}

  ngOnInit(): void {
    this.loadUserInfo();
  }

  loadUserInfo(): void {
    this.userInfoService.getAllUserInfo().subscribe(
      (data) => {
        this.userInfoList = data;
      },
      (error) => {
        console.error('Error fetching user info', error);
      }
    );
  }
}
