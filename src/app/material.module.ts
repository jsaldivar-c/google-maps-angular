import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Angular Material
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatSliderModule,
        MatToolbarModule,
        MatDividerModule,
        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
        MatCardModule,
        MatSnackBarModule,
        MatDialogModule,
        MatInputModule,
    ],
    exports: [
        MatSliderModule,
        MatToolbarModule,
        MatDividerModule,
        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
        MatCardModule,
        MatSnackBarModule,
        MatDialogModule,
        MatInputModule,
    ],
})
export class MaterialModule {}
