import { Component, OnInit } from '@angular/core';
import { QuizServiceClient } from 'src/app/services/quiz.service.client';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-quizzes',
    templateUrl: './quizzes.component.html',
    styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

    constructor(private route: ActivatedRoute, private service: QuizServiceClient) { }

    courseId = ''
    quizzes = []

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.courseId = params.courseId;
            this.service.findAllQuizzes()
                .then(quizzes => this.quizzes = quizzes.sort((n1, n2) => n1.title.localeCompare(n2.title)));
        });
    }

}
