import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-multiple-choice-question',
    templateUrl: './multiple-choice-question.component.html',
    styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

    constructor() { }

    @Input()
    question = { _id: '', title: '', question: '', choices: [], correct: '', answer: '' }
    @Input()
    answer = ''
    @Input()
    submitted = false
    @Output()
    answerChange = new EventEmitter<string>()
    
    saved = false

    save = () => {
        this.saved = true;
        this.answerChange.emit(this.answer);
    }

    ngOnInit(): void {
    }

}
