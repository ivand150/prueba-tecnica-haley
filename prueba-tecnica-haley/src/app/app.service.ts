import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  sortArray$ = new BehaviorSubject<number[]>([])
  unidimensionalArray$ = new BehaviorSubject<any[]>([])

  setSortArray (array: number[]):void {
    this.sortArray$.next(array)
  }

  setUnidimensionalArray (array: any[]) {
    this.unidimensionalArray$.next(array)
  }
}
