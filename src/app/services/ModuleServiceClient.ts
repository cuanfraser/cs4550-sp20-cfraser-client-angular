import { Injectable } from '@angular/core';

@Injectable()
export class ModuleServiceClient {
    findModulesForCourse = (cid) =>
        fetch(`http://wbdv-generic-server.herokuapp.com/api/1293115/courses/${cid}/modules`)
            .then(response => response.json())
}