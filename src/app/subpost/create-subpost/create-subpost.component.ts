import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { SubpostModel } from '../subpost-response';
import { SubpostService } from '../subpost.service';

@Component({
  selector: 'app-create-subpost',
  templateUrl: './create-subpost.component.html',
  styleUrls: ['./create-subpost.component.css']
})
export class CreateSubpostComponent implements OnInit {

  createSubpostForm: FormGroup;
  subpostModel: SubpostModel;
  title = new FormControl('');
  description = new FormControl('');

  constructor(private router: Router, private subpostService: SubpostService) {
    this.createSubpostForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    this.subpostModel = {
      name: '',
      description: ''
    }
  }

  ngOnInit() {
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createSubpost() {
    this.subpostModel.name = this.createSubpostForm.get('title')?.value;
    this.subpostModel.description = this.createSubpostForm.get('description')?.value;
    this.subpostService.createSubpost(this.subpostModel).subscribe(data => {
      this.router.navigateByUrl('/list-subposts');
    }, error => {
      throwError(error);
    })
  }

}
