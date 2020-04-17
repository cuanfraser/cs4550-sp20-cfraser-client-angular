import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseViewerComponent } from './components/course-viewer/course-viewer.component';
import { HomeComponent } from './components/home/home.component';
import { CourseTableComponent } from './components/course-table/course-table.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { QuizComponent } from './components/quiz/quiz.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'table/courses', component: CourseTableComponent },
    { path: ':layout/courses/:cid/modules', component: CourseViewerComponent },
    { path: ':layout/courses/:cid/modules/:mid/lessons', component: CourseViewerComponent },
    { path: ':layout/courses/:cid/modules/:mid/lessons/:lid', component: CourseViewerComponent },
    { path: 'courses/:courseId/quizzes', component: QuizzesComponent },
    { path: 'courses/:courseId/quizzes/:quizId', component: QuizComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
