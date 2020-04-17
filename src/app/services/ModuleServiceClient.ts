import { Injectable } from '@angular/core';

@Injectable()
export class ModuleServiceClient {
    findModulesForCourse = (cid) =>
        fetch(`http://wbdv-generic-server.herokuapp.com/api/cfraser/courses/${cid}/modules`)
}