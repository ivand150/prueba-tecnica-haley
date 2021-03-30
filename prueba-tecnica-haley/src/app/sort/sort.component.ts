import { Component } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { AppService } from '../app.service'

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {
  constructor (private appService: AppService) { }

  inputNumbers = new FormControl([], Validators.required)
  sortedNumbers = this.appService.sortArray$

  descendentOrder (array: number[]): void {
    const arrayOfDigits = Array.from(String(array), Number)
    const sortedArray = [...arrayOfDigits].sort().reverse()
    this.appService.setSortArray(sortedArray)
  }
}
