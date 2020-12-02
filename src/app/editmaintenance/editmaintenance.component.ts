import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MaintserviceService} from '../maintservice.service';
import {Maintenance} from '../maintenance';

@Component({
  selector: 'app-editmaintenance',
  templateUrl: './editmaintenance.component.html',
  styleUrls: ['./editmaintenance.component.css']
})
export class EditmaintenanceComponent implements OnInit {

  constructor(private router:Router, private service : MaintserviceService, private activateRouter : ActivatedRoute) { }

    maintenance = new Maintenance();

  ngOnInit() {
    let maintenanceId = this.activateRouter.snapshot.paramMap.get('maintenanceId')||'';
    this.service.fetchMaintenanceByIdFromRemote(maintenanceId).subscribe(
      data =>{
          console.log("data received");
          this.maintenance = data;
       },
        error =>{
          console.log("exception occured");
        }
    )

    }

  updatemaintenanceformsubmit() {
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
