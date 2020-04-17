import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CourseServiceClient } from './services/CourseServiceClient';
import { CourseViewerComponent } from './components/course-viewer/course-viewer.component';
import { HomeComponent } from './components/home/home.component';
import { ModuleServiceClient } from './services/ModuleServiceClient';
import { LessonServiceClient } from './services/LessonServiceClient';
import { ModuleListComponent } from './components/module-list/module-list.component';
import { LessonTabsComponent } from './components/lesson-tabs/lesson-tabs.component';
import { CourseTableComponent } from './components/course-table/course-table.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { QuizServiceClient } from './services/quiz.service.client';
import { QuestionServiceClient } from './services/question.service.client';
import { QuizComponent } from './components/quiz/quiz.component';
import { TrueFalseQuestionComponent } from './components/true-false-question/true-false-question.component';
import { MultipleChoiceQuestionComponent } from './components/multiple-choice-question/multiple-choice-question.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseViewerComponent,
    HomeComponent,
    ModuleListComponent,
    LessonTabsComponent,
    CourseTableComponent,
    QuizzesComponent,
    QuizComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    QuizServiceClient,
    QuestionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
