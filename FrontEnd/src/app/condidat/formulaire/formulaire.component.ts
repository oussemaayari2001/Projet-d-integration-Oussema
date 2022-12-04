import { Component, OnInit, ViewChild } from '@angular/core';
import { Condidat } from '../../models/condidat.model';

import { DataService } from '../../service/annonce-crud.service';
import { DashboardComponent } from 'src/app/admin/dashboard/dashboard.component';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  @ViewChild("dashboard") dashboard: DashboardComponent;
  condidat = new Condidat();
  selectedType = 'openType';
  data:any;
  form:FormGroup;
onChange(event) {
  this.selectedType = event.target.value;
}
  constructor( private dataService:DataService, private toastr: ToastrService,private f:FormBuilder) { }


  ngOnInit(): void {
    this.form=this.f.group({
      nom:[''],
      email:[''],
      profil:[''],
      linkedIn:['']
    })
   
  }

  insertData(f:any){


    this.dataService.registerAnnonce(f.value).subscribe(()=>{
      console.log('annonce created');
      
    })



  }
}
