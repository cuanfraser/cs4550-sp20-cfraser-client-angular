import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseServiceClient } from '../../services/CourseServiceClient';

@Component({
     selector: 'app-course-viewer',
     templateUrl: './course-viewer.component.html',
     styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

     courseId = ''
     course = {
          _id: '',
          title: ''
     }

     constructor(private route: ActivatedRoute, private service: CourseServiceClient) { }

     ngOnInit(): void {
          this.route.params.subscribe(params => {
               this.courseId = params.cid;
               this.service.findCourseById(params.cid)
                    .then(course => this.course = course);
          });
     }

}
