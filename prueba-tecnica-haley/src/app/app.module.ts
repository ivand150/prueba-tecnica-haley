import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SortComponent } from './sort/sort.component'
import { TransformComponent } from './transform/transform.component';
import { CountComponent } from './count/count.component'

@NgModule({
  declarations: [
    AppComponent,
    SortComponent,
    TransformComponent,
    CountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
