import { Component } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { AppService } from '../app.service'

@Component({
  selector: 'app-transform',
  templateUrl: './transform.component.html',
  styleUrls: ['./transform.component.scss']
})
export class TransformComponent {
  constructor (private appService: AppService) { }

  arrayOfArrays = new FormGroup({
    firstArray: new FormControl(),
    secondArray: new FormControl()
  })

  array = this.appService.unidimensionalArray$

  transformArray () {
    const bigArray = [[this.arrayOfArrays.controls.firstArray.value], [this.arrayOfArrays.controls.secondArray.value]]
    const uniDimensionalArray = bigArray.flat()
    this.appService.setUnidimensionalArray(uniDimensionalArray)
  }
}
