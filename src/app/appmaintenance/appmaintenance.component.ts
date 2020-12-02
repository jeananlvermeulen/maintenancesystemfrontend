import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {MaintserviceService} from '../maintservice.service';
import {Maintenance} from '../maintenance';

@Component({
  selector: 'app-appmaintenance',
  templateUrl: './appmaintenance.component.html',
  styleUrls: ['./appmaintenance.component.css']
})
export class AppmaintenanceComponent implements OnInit {

  maintenance = new Maintenance();

  constructor(private router:Router, private service : MaintserviceService) { }

  ngOnInit(): void {
  }

  addmaintenanceformsubmit() {
    this.service.addMaintenanceFromRemote(this.maintenance).subscribe(
      data =>{console.log("data added successfully")
      this.router.navigate(['/maintenancelist'])
     },
      error =>{
        console.log("erroe");
      }
    )
  }

  gotolist(){
    this.router.navigate(['/maintenancelist']);
  }


}
