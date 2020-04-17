import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { HomeComponent } from './home/home.component';
import { CourseTableComponent } from './course-table/course-table.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'table/courses', component: CourseTableComponent },
    { path: 'course/:cid', component: CourseViewerComponent },
    { path: ':layout/courses/:cid/modules', component: CourseViewerComponent },
    { path: ':layout/courses/:cid/modules/:mid/lessons', component: CourseViewerComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
