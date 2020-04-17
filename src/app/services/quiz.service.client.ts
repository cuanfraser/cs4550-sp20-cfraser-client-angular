import { Injectable } from '@angular/core';
import { HEROKUNODE } from "./urls"

@Injectable()
export class QuizServiceClient {
    findAllQuizzes = () =>
        fetch(`${HEROKUNODE}/api/quizzes`)
            .then(response => response.json())
    findQuizById = (qid) =>
        fetch(`${HEROKUNODE}/api/quizzes/${qid}`)
            .then(response => response.json())
}