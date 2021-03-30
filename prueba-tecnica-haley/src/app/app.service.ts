import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  sortArray$ = new BehaviorSubject<number[]>([])

  getSortArray (): number[] {
    return this.sortArray$.getValue()
  }

  setSortArray (array: number[]):void {
    this.sortArray$.next(array)
  }
}
