import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { SortComponent } from './sort.component'
import { AppService } from '../app.service'

describe('SortComponent', () => {
  let service: AppService
  let component: SortComponent
  let fixture: ComponentFixture<SortComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortComponent],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [AppService]
    })
      .compileComponents()
    service = TestBed.inject(AppService)
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SortComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should call appService.setUnidimensionalArray', () => {
    const spyFn = spyOn(component, 'descendentOrder').and.callThrough()
    const compiled = fixture.nativeElement
    compiled.querySelector('button').click()
    expect(spyFn).toHaveBeenCalled()
  })

  it('should call appService.setUnidimensionalArray with null argument', () => {
    spyOn(service, 'setSortArray').and.callThrough()
    component.descendentOrder(null)
    expect(service.setSortArray).toHaveBeenCalledOnceWith([])
  })
})
