import { Component, OnInit } from '@angular/core';
import { PostModel } from '../post-model';
import { PostService } from '../post.service';
import { faArrowUp, faArrowDown, faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-title',
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.css']
})
export class PostTitleComponent implements OnInit {

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faComments = faComments;

  posts$: Array<PostModel> = [];

  constructor(private postService: PostService) { 
    this.postService.getAllPosts().subscribe(post => {
      this.posts$ = post;
    })
  }

  ngOnInit(): void {
  }

}
