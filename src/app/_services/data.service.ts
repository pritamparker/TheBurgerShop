import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

    private messageSource = new BehaviorSubject<Object>({ 'type': '', 'value': '' });
    currentMessage = this.messageSource.asObservable();

    constructor() { }

    changeMessage(message: Object) {
        this.messageSource.next(message)
    }

}