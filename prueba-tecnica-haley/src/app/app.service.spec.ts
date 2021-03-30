import { TestBed } from '@angular/core/testing'

import { AppService } from './app.service'

describe('AppService', () => {
  let service: AppService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(AppService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('setArray$.next should be called', () => {
    spyOn(service.sortArray$, 'next').and.callThrough()
    service.setSortArray([])
    expect(service.sortArray$.next).toHaveBeenCalled()
  })

  it('unidimensionalArray$.next should be called', () => {
    spyOn(service.unidimensionalArray$, 'next').and.callThrough()
    service.setUnidimensionalArray([])
    expect(service.unidimensionalArray$.next).toHaveBeenCalled()
  })

  it('wordsCount$.next should be called', () => {
    spyOn(service.wordsCount$, 'next').and.callThrough()
    service.setWordsCount(2)
    expect(service.wordsCount$.next).toHaveBeenCalled()
  })
})
