import { Injectable } from '@angular/core';
import { GENERICSERVER } from './urls';

@Injectable()
export class ModuleServiceClient {
    findModulesForCourse = (cid) =>
        fetch(`${GENERICSERVER}/api/1293115/courses/${cid}/modules`)
            .then(response => response.json())
}