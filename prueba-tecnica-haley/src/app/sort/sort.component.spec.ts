import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { SortComponent } from './sort.component'

describe('SortComponent', () => {
  let component: SortComponent
  let fixture: ComponentFixture<SortComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortComponent],
      imports: [ReactiveFormsModule, FormsModule]
    })
      .compileComponents()
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
})
