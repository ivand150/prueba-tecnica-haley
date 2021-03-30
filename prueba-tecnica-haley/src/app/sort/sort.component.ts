import { Component, OnInit } from '@angular/core'
import { FormArray } from '@angular/forms'
import { AppService } from '../app.service'

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  constructor (private appService: AppService) { }

  numbers = new FormArray([])
  sortedNumbers = this.appService.sortArray$

  descendentOrder (array: number[]): void {
    // eslint-disable-next-line no-debugger
    debugger
    const sortedArray = [...array].sort().reverse()
    this.appService.sortArray$.next(sortedArray)
  }

  ngOnInit (): void {
  }
}
