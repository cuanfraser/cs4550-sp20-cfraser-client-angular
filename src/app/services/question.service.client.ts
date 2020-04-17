import { Injectable } from '@angular/core';
import { HEROKUNODE } from './urls';

@Injectable()
export class QuestionServiceClient {
    findQuestionsForQuiz = (qid) =>
        fetch(`${HEROKUNODE}/api/quizzes/${qid}/questions`)
            .then(response => response.json())
}
