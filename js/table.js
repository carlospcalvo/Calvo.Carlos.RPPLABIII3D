import { createFormEditDelete } from "./form.js";

export default function createTable(list) {
    // if(list){
    const table = document.createElement("table");
    //inserts headers
    table.appendChild(createHeader(list[0]));
    //inserts body
    table.appendChild(createBody(list));
    // }


    return table;
}

function createHeader(item) {
    const thead = document.createElement("thead");
    const trow = document.createElement("tr");

    for (const key in item) {
        const th = document.createElement("th");
        const text = document.createTextNode(key);
        th.appendChild(text);
        trow.appendChild(th);
    }

    thead.appendChild(trow);

    return thead;
}

function createBody(lista) {
    const tbody = document.createElement("tbody");

    lista.forEach(element => {
        const trow = document.createElement("tr");

        for (const key in element) {
            const tdata = document.createElement("td");
            const text = document.createTextNode(element[key]);
            tdata.appendChild(text);
            trow.appendChild(tdata);
        }
        setRowAttributes(trow, element);
        addRowHandler(trow);
        tbody.appendChild(trow);
    });

    return tbody;
}


function addRowHandler(tr) {
    if (tr) {
        tr.addEventListener("click", function(e) {
            const formDiv = document.getElementById("formDiv");

            while (formDiv.firstChild) {
                formDiv.removeChild(formDiv.lastChild);
            }
            formDiv.appendChild(createFormEditDelete());

            document.getElementById("txtID").value = e.target.parentElement.getAttribute("data-id");
            document.getElementById("txtTitulo").value = e.target.parentElement.getAttribute("data-titulo");
            document.getElementById("txtDescripción").value = e.target.parentElement.getAttribute("data-descripcion");
            document.getElementById("txtPrecio").value = parseInt(e.target.parentElement.getAttribute("data-precio"));
            document.getElementById("txtPuertas").value = e.target.parentElement.getAttribute("data-puertas");
            document.getElementById("txtKMs").value = e.target.parentElement.getAttribute("data-kilometros");
            document.getElementById("txtPotencia").value = e.target.parentElement.getAttribute("data-potencia");
            document.getElementById('checkaireAcond').checked = e.target.parentElement.getAttribute("data-aireacond") == 'Sí' ? true : false;
            document.getElementById('checkbluetooth').checked = e.target.parentElement.getAttribute("data-bluetooth") == 'Sí' ? true : false;
            document.getElementById('checkpolarizado').checked = e.target.parentElement.getAttribute("data-polarizado") == 'Sí' ? true : false;
            document.getElementById('checkcajaAutom').checked = e.target.parentElement.getAttribute("data-cajaautom") == 'Sí' ? true : false;

            //if there's more than one option, use a switch statement
            if (e.target.parentElement.getAttribute("data-transaccion") == "Venta") {
                document.getElementById("rdoVenta").checked = true;
            } else {
                document.getElementById("rdoAlq").checked = true;
            }
        })
    }
}

function setRowAttributes(tr, item) {
    if (tr) {
        for (const key in item) {
            if (item.hasOwnProperty(key)) {
                tr.setAttribute("data-" + key, item[key]);
            }
        }
    }
}