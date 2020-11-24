import Anuncio from "./anuncio.js";
export { Anuncio_auto, createAnuncioAuto }
class Anuncio_auto extends Anuncio {

    constructor(id, titulo, descripcion, transaccion, precio, puertas, kms, potencia, aireAcond, bluetooth, polarizado, cajaAutom) {
        super(id, titulo, descripcion, transaccion, precio);
        this.Puertas = puertas;
        this.Kilometros = kms;
        this.Potencia = potencia;
        this.AireAcond = aireAcond;
        this.Bluetooth = bluetooth;
        this.Polarizado = polarizado;
        this.Caja = cajaAutom;
    }

    set Puertas(puertas) {
        this.puertas = puertas;
    }

    set Kilometros(kms) {
        this.kilometros = kms;
    }

    set Potencia(potencia) {
        this.potencia = potencia;
    }

    set AireAcond(aireAcond) {
        this.aireAcond = aireAcond;
    }

    set Bluetooth(bluetooth) {
        this.bluetooth = bluetooth;
    }

    set Polarizado(polarizado) {
        this.polarizado = polarizado;
    }

    set Caja(cajaAutom) {
        this.cajaAutom = cajaAutom;
    }

    get Puertas() {
        return this.puertas;
    }

    get Kilometros() {
        return this.kilometros;
    }

    get Potencia() {
        return this.potencia;
    }

    get AireAcond() {
        return this.aireAcond;
    }

    get Bluetooth() {
        return this.bluetooth;
    }

    get Polarizado() {
        return this.polarizado;
    }

    get Caja() {
        return this.cajaAutom;
    }

    equals(object) {
        return (
            this.Id == object.id &&
            this.Titulo == object.titulo &&
            this.Descripcion == object.descripcion &&
            this.Transaccion == object.transaccion &&
            this.Precio == object.precio &&
            this.Puertas == object.puertas &&
            this.Kilometros == object.kilometros &&
            this.Potencia == object.potencia
        );
    }
}

function createAnuncioAuto(form, id) {
    let aireAcond = form.checkaireAcond.checked ? 'Sí' : 'No';
    let bluetooth = form.checkbluetooth.checked ? 'Sí' : 'No';
    let polarizado = form.checkpolarizado.checked ? 'Sí' : 'No';
    let cajaAutom = form.checkcajaAutom.checked ? 'Sí' : 'No';

    const newAnuncio = new Anuncio_auto(
        id,
        form.txtTitulo.value,
        form.txtDescripción.value,
        form.transaction.value,
        form.txtPrecio.value,
        form.txtPuertas.value,
        form.txtKMs.value,
        form.txtPotencia.value,
        aireAcond,
        bluetooth,
        polarizado,
        cajaAutom
    );

    return newAnuncio;
}