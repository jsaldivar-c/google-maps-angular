import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
    MatDialog,
    MatDialogRef,
    MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
    selector: 'app-mapa-editar',
    templateUrl: './mapa-editar.component.html',
    styleUrls: ['./mapa-editar.component.css'],
})
export class MapaEditarComponent implements OnInit {
    forma: FormGroup;
    constructor(
        public _formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<MapaEditarComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        console.log(data);
        this.forma = _formBuilder.group({
            titulo: data.titulo,
            desc: data.desc,
        });
    }

    ngOnInit(): void {}

    guardarCambios() {
        this.dialogRef.close(this.forma.value);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
