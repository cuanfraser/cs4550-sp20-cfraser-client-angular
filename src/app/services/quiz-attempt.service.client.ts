import { Injectable } from '@angular/core';
import { HEROKUNODE } from "./urls"

@Injectable()
export class QuizAttemptServiceClient {
    createQuizAttempt = (qid, questions) =>
        fetch(`${HEROKUNODE}/api/quizzes/${qid}/attempts`, {
            method: 'POST',
            body: JSON.stringify(questions),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())

    findQuizAttemptsForQuiz = (qid) =>
        fetch(`${HEROKUNODE}/api/quizzes/${qid}/attempts`)
            .then(response => response.json())
}