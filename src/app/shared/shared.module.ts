import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule  } from '@angular/material/slide-toggle';
import { MatExpansionModule  } from '@angular/material/expansion';
import { MatProgressBarModule  } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule  } from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import { ICurrencyService } from './services/currency/icurrency.service';
import { LocalCurrencyService } from './services/currency/localcurrency.service';

const SHARED_PROVIDER = [
  HttpService,
  {provide: ICurrencyService, useClass: LocalCurrencyService},
]
const SHARED_MODULES = [
	CommonModule,
  HttpClientModule,
  ReactiveFormsModule,
  MatTableModule,
  MatPaginatorModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatCardModule,
  MatSlideToggleModule ,
  MatProgressBarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatSelectModule
];

@NgModule({
  declarations: [],
  imports: [
    ...SHARED_MODULES
  ],
  exports:[    
    ...SHARED_MODULES
  ],
	providers: [...SHARED_PROVIDER],
})
export class SharedModule { }
