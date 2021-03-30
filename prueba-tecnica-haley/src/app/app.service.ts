import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  sortArray$ = new BehaviorSubject<number[]>([])
  unidimensionalArray$ = new BehaviorSubject<any[]>([])
  wordsCount$ = new BehaviorSubject<number | null>(null)

  setSortArray (array: number[]):void {
    this.sortArray$.next(array)
  }

  setUnidimensionalArray (array: any[]) {
    this.unidimensionalArray$.next(array)
  }

  setWordsCount (words: number) {
    this.wordsCount$.next(words)
  }
}
