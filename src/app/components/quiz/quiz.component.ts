import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceClient } from 'src/app/services/question.service.client';
import { HEROKUNODE } from 'src/app/services/urls';
import { QuizAttemptServiceClient } from 'src/app/services/quiz-attempt.service.client';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

    constructor(private route: ActivatedRoute, private questionService: QuestionServiceClient, private attemptService: QuizAttemptServiceClient) { }

    quizId = ''
    questions = []

    submitQuiz = () => {
        this.attemptService.createQuizAttempt(this.quizId, this.questions)
            .then(result => console.log(result))
    }


    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.quizId = params.quizId;
            this.questionService.findQuestionsForQuiz(this.quizId)
                .then(questions => this.questions = questions);
        })
    }


}
