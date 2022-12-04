import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../confirmed.validator';
import { DataService } from '../../service/annonce-crud.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form : FormGroup;
  submitted = false;
  data:any;
  constructor(private formBuilder: FormBuilder, private dataService: DataService, 
    private toastr: ToastrService) { }

  createForm(){
    this.form = this.formBuilder.group({
        name: [null, Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
    },
{    Validators: MustMatch('password', 'confirmPassword')});
  }

  ngOnInit(): void {
    this.createForm();
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.submitted = true;

    if(this.form.invalid){
      return;
    }

    this.dataService.registerAnnonce(this.form.value).subscribe(res => {
      this.data = res;
      // console.log(res);
       if(this.data.status === 1){
         this.toastr.success(JSON.stringify(this.data.message), JSON.stringify(this.data.code), {
           timeOut: 2000,
           progressBar: true
         });
       }else {
         this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code), {
           timeOut: 2000,
           progressBar: true 
         });
       }
       this.submitted = false;
       this.form.get('name').reset();
       this.form.get('email').reset();
       this.form.get('password').reset();
       this.form.get('confirmPassword').reset();
    });
  }

}
