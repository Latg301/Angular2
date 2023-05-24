import { Component, OnInit } from '@angular/core';
import { usersData } from 'src/app/Datos/usersData';
import { User } from 'src/app/models/userModel';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.css']
})
export class UsersDataComponent implements OnInit {

  users: User[]= usersData.data;
  nombre: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
