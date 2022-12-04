import { Component, OnInit, ViewChild } from '@angular/core';
import { Condidat } from '../../models/condidat.model';
import { NgModule } from '@angular/core';
import { DataService } from '../../service/annonce-crud.service';
import { DashboardComponent } from 'src/app/admin/dashboard/dashboard.component';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @ViewChild("dashboard") dashboard: DashboardComponent;
  condidat = new Condidat();
  selectedType = 'openType';
  data:any;

onChange(event) {
  this.selectedType = event.target.value;
}
  constructor(private dataService:DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  insertData(){
    //  console.log('hello');
     this.dataService.insertData(this.condidat).subscribe( res => {
      //  console.log(res);
      //  this.dashboard.getCondidatData();
     })
  }
}
