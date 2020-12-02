import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Maintenance } from '../maintenance';
import { MaintserviceService } from '../maintservice.service';

@Component({
  selector: 'app-viewmaintenance',
  templateUrl: './viewmaintenance.component.html',
  styleUrls: ['./viewmaintenance.component.css']
})
export class ViewmaintenanceComponent implements OnInit {

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


  gotolist(){
    this.router.navigate(['/maintenancelist']);
  }

}
