import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { CountComponent } from './count.component'

describe('CountComponent', () => {
  let component: CountComponent
  let fixture: ComponentFixture<CountComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountComponent],
      imports: [FormsModule, ReactiveFormsModule]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CountComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should call appService.setUnidimensionalArray', () => {
    const spyFn = spyOn(component, 'countWords').and.callThrough()
    const compiled = fixture.nativeElement
    compiled.querySelector('button').click()
    expect(spyFn).toHaveBeenCalled()
  })
})
