import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from '../../services/CourseServiceClient';

@Component({
    selector: 'app-course-table',
    templateUrl: './course-table.component.html',
    styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {

    title = 'Course Table Component'
    courses = []

    constructor(private service: CourseServiceClient) { }

    ngOnInit(): void {
        this.service.findAllCourses()
            .then(courses => this.courses = courses)
    }
}
