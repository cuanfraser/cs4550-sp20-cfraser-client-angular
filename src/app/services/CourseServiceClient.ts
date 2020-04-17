import { Injectable } from '@angular/core';
import { GENERICSERVER } from './urls';

@Injectable()
export class CourseServiceClient {
    findAllCourses = () =>
        fetch(`${GENERICSERVER}/api/1293115/courses`)
            .then(response => response.json())
    findCourseById = (cid) =>
        fetch(`${GENERICSERVER}/api/1293115/courses/${cid}`)
            .then(response => response.json())
}