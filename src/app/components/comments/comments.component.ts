import {Component, OnInit} from '@angular/core';
import {CommentService} from "../../sevices";
import {IComment} from "../../interfaces";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: IComment[];

  constructor(private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.commentService.getAllComments().subscribe(value => this.comments = value.splice(0, 10));
  }

}
