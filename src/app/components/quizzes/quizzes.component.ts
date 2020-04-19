import { Component, OnInit } from '@angular/core';
import { QuizServiceClient } from 'src/app/services/quiz.service.client';
import { ActivatedRoute } from '@angular/router';
import { QuizAttemptServiceClient } from 'src/app/services/quiz-attempt.service.client';

@Component({
    selector: 'app-quizzes',
    templateUrl: './quizzes.component.html',
    styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

    constructor(private route: ActivatedRoute, private quizService: QuizServiceClient, private attemptService: QuizAttemptServiceClient) { }

    courseId = ''
    quizzes = []
    attempts = []

    loadAttempts = (list) => {
        for (const quiz of list) {
            this.attemptService.findQuizAttemptsForQuiz(quiz._id)
                .then(attempts => this.attempts[quiz._id] = attempts)
        }
    }
    
    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.courseId = params.courseId;
            this.quizService.findAllQuizzes()
                .then(quizzes => this.quizzes = quizzes.sort((n1, n2) => n1.title.localeCompare(n2.title)))
                .then(resp => this.loadAttempts(resp));
        });
    }

}
