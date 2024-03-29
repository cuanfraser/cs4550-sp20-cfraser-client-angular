import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-true-false-question',
    templateUrl: './true-false-question.component.html',
    styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

    constructor() { }

    @Input()
    question = { _id: '', title: '', question: '', answer: '', correct: '' }
    @Input()
    answer = ''
    @Input()
    submitted = false
    @Output()
    answerChange = new EventEmitter<string>()

    saved = false

    save = () => {
        this.saved = true
        this.answerChange.emit(this.answer);
    }

    ngOnInit(): void {
    }

}
