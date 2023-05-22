import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FilterCardPipe } from 'app/pipes/filter-card.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle'; 

@NgModule({
  declarations: [FilterCardPipe],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatNativeDateModule,
    MatDialogModule,
    MatFormFieldModule, 
    MatButtonModule, 
    MatButtonToggleModule, 
    
  ],
  exports:[
    HttpClientModule,
    FilterCardPipe,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatNativeDateModule,
    MatDialogModule,
    MatFormFieldModule, 
    MatButtonModule, 
    MatButtonToggleModule, 
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class SharedModule { }
