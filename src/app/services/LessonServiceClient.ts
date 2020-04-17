import { Injectable } from '@angular/core';
import { GENERICSERVER } from './urls';

@Injectable()
export class LessonServiceClient {
    findLessonsForModule = (mid) =>
        fetch(`${GENERICSERVER}/api/1293115/modules/${mid}/lessons`)
            .then(response => response.json())
}