import { Injectable } from '@angular/core';

@Injectable()
export class LessonServiceClient {
    findLessonsForModule = (mid) =>
        fetch(`http://wbdv-generic-server.herokuapp.com/api/cfraser/modules/${mid}/lessons`)
}