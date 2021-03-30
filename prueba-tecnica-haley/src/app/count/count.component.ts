import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'
import { AppService } from '../app.service'

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent {
  constructor (private appService: AppService) { }

  inputSentence = new FormControl('')
  words = this.appService.wordsCount$

  countWords (sentence: string) {
    const countWords = sentence.split(' ').filter((element) => element !== '').length
    this.appService.setWordsCount(countWords)
  }
}
