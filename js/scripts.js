import { createForm, createFormEditDelete } from "./form.js";
import { Anuncio_auto, createAnuncioAuto } from "./anuncio_auto.js";
import { getInfo, getId, saveData, updateList, emptyForm, loadInitalForm } from "./controller.js";

//const btnTable;
let anuncios;
let frmAnuncios;
let nextId;
let tableDiv;


window.addEventListener('load', initializeHandlers);

function initializeHandlers() {

    anuncios = getInfo();
    nextId = getId();
    frmAnuncios = document.getElementById("formDiv");
    frmAnuncios.appendChild(createForm());
    tableDiv = document.getElementById("tableDiv");
    updateList(tableDiv, anuncios);


    frmAnuncios.addEventListener("submit", e => {
        e.preventDefault();

        switch (e.submitter.id) {
            case "createButton":

                if (confirm("¿Desea dar de alta el anuncio?")) {
                    const anuncio = createAnuncioAuto(frmAnuncios.firstElementChild, nextId);

                    //checks if anuncio exists
                    let anuncioExists = false;

                    anuncios.forEach(element => {
                        if (anuncio.equals(element)) {
                            anuncioExists = true;
                        }
                    });

                    if (anuncio && !anuncioExists) {
                        anuncios.push(anuncio);
                        nextId++;
                        saveData(anuncios, nextId);
                        updateList(tableDiv, anuncios);
                        //emptyForm(frmAnuncios.firstElementChild);
                    } else {
                        alert("Anuncio ya registrado.");
                    }
                }

                loadInitalForm(formDiv);

                break;

            case "modifyButton":
                if (confirm("¿Está seguro que desea modificar el registro?")) {

                    let anuncioEdit = createAnuncioAuto(frmAnuncios.firstElementChild, document.getElementById("txtID").value);

                    anuncios.forEach(element => {
                        if (anuncioEdit.ID == element.id) {
                            element.titulo = anuncioEdit.Titulo;
                            element.descripcion = anuncioEdit.Descripcion;
                            element.transaccion = anuncioEdit.Transaccion;
                            element.precio = anuncioEdit.Precio;
                            element.puertas = anuncioEdit.Puertas;
                            element.kilometros = anuncioEdit.Kilometros;
                            element.potencia = anuncioEdit.Potencia;
                            element.aireAcond = anuncioEdit.AireAcond;
                            element.bluetooth = anuncioEdit.Bluetooth;
                            element.polarizado = anuncioEdit.Polarizado;
                            element.cajaAutom = anuncioEdit.Caja;
                        }
                    });

                    saveData(anuncios, nextId);
                    updateList(tableDiv, anuncios);

                }

                loadInitalForm(formDiv);

                break;

            case "deleteButton":
                if (confirm("¿Está seguro que desea eliminar el registro? La eliminación es permanente.")) {

                    let anuncioDel = createAnuncioAuto(frmAnuncios.firstElementChild, document.getElementById("txtID").value);

                    //deletes the anuncio in the anuncios array
                    anuncios = anuncios.filter(function(value) {
                        return value.id != anuncioDel.ID;
                    });

                    /* anuncios.forEach(element => {
                        if(anuncioDel.Id == element.id){
                            anuncios.splice(anuncios.indexOf(element), 1);
                        }
                    }); */

                    saveData(anuncios, nextId);
                    updateList(tableDiv, anuncios);

                }
                loadInitalForm(formDiv);

                break;

            case "cancelButton":
                emptyForm(frmAnuncios.firstElementChild);
                loadInitalForm(formDiv);
                break;

            default:
                alert("Error");
                break;
        }

    });

}