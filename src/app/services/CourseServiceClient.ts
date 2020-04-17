import { Injectable } from '@angular/core';

@Injectable()
export class CourseServiceClient {
    findAllCourses = () =>
        fetch('http://wbdv-generic-server.herokuapp.com/api/cfraser/courses')
            .then(response => response.json())
    findCourseById = (cid) =>
        fetch(`http://wbdv-generic-server.herokuapp.com/api/cfraser/courses/${cid}`)
}