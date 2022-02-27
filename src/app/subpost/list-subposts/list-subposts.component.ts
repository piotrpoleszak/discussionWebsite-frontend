import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { SubpostModel } from '../subpost-response';
import { SubpostService } from '../subpost.service';

@Component({
  selector: 'app-list-subposts',
  templateUrl: './list-subposts.component.html',
  styleUrls: ['./list-subposts.component.css']
})
export class ListSubpostsComponent implements OnInit {

  subposts: Array<SubpostModel>;

  constructor(private subpostService: SubpostService) { }

  ngOnInit() {
    this.subpostService.getAllSubposts().subscribe(data => {
      this.subposts = data;
    }, error => {
      throwError(error);
    })
  }

}
