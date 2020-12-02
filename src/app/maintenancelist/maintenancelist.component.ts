import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Maintenance } from '../maintenance';
import { MaintserviceService } from '../maintservice.service';

@Component({
  selector: 'app-maintenancelist',
  templateUrl: './maintenancelist.component.html',
  styleUrls: ['./maintenancelist.component.css']
})
export class MaintenancelistComponent implements OnInit {

  maintenances : Maintenance[];


  constructor(private service:MaintserviceService, private router : Router) { }

  ngOnInit(){
          this.service.fetchMaintenanceListFromRemote().subscribe(
            data=>{
              console.log("response received");
              this.maintenances=data;
            },
            error=>{
              console.log("exception occured");
            }
          )

  }

  goToAddMaintenance(){
    this.router.navigate(['/addmaintenance']);
  }

  goToEditMaintenance(maintenanceId:String){
    console.log("maintenanceId" + maintenanceId);
    this.router.navigate(['/editmaintenance',maintenanceId]);
  }

  goToViewMaintenance(maintenanceId: String){
    console.log("maintenanceId"+maintenanceId);
    this.router.navigate(['/viewmaintenance', maintenanceId]);
  }

  deleteMaintenance(maintenanceId: String){
     this.service.deleteMaintenanceByIdFromRemote(maintenanceId).subscribe(
       data=>{
         console.debug("deleted successfully");
         this.router.navigate(['/maintenancelist']);
       },
       error=>{
         console.log("exception occured");
       }
     )
  }

}
