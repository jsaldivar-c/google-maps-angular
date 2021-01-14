export class Marcador {
    public lng: number;
    public lat: number;
    public titulo = 'Sin titulo ';
    public descripcion = 'Sin descripción';

    constructor(lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;
    }
}
