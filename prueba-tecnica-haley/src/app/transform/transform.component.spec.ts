import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { TransformComponent } from './transform.component'

describe('TransformComponent', () => {
  let component: TransformComponent
  let fixture: ComponentFixture<TransformComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransformComponent],
      imports: [ReactiveFormsModule, FormsModule]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should call appService.setUnidimensionalArray', () => {
    const spyFn = spyOn(component, 'transformArray').and.callThrough()
    const compiled = fixture.nativeElement
    compiled.querySelector('button').click()
    expect(spyFn).toHaveBeenCalled()
  })
})
