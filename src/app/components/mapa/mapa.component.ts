import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Marcador } from '../../classes/marcador.class';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
    selector: 'app-mapa',
    templateUrl: './mapa.component.html',
    styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {
    marcadores: Marcador[] = [];
    lat = 51.678418;
    lng = 7.809007;

    constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) {
        // const nuevoMarcador = new Marcador(this.lat, this.lng);
        // this.marcadores.push(nuevoMarcador);
        if (localStorage.getItem('marcadores')) {
            this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
        }
    }

    ngOnInit(): void {}

    agregarMarcador(evento) {
        const coords: { lat: number; lng: number } = evento.coords;
        console.log(evento.coords.lat);
        const nuevoMarcador = new Marcador(coords.lat, coords.lng);

        this.marcadores.push(nuevoMarcador);
        this.guardarStorage();
        this._snackBar.open('Marcador agregado', 'Cerrar', {
            duration: 1000,
        });
    }

    guardarStorage() {
        localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
    }

    borrarMarcador(i: number) {
        // console.log(i);
        this.marcadores.splice(i, 1);
        this.guardarStorage();
        this._snackBar.open('Marcador borrado', 'Cerrar', {
            duration: 1000,
        });
    }

    editarMarcador(marcador: Marcador) {
        const dialogRef = this.dialog.open(MapaEditarComponent, {
            width: '250px',
            data: { titulo: marcador.titulo, desc: marcador.descripcion },
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog was closed');
            if (!result) {
                return;
            }
            marcador.titulo = result.titulo;
            marcador.descripcion = result.desc;

            this.guardarStorage();
            this._snackBar.open('Marcador actualizado', 'Cerrar', {
                duration: 2000,
            });
        });
    }
}
