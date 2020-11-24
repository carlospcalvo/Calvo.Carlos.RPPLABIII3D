export { createForm, createFormEditDelete }

function createForm() {
    const form = document.createElement("form");
    const fieldset = createMainFieldSet()

    //titulo - text
    fieldset.appendChild(createTextLabel("Titulo"));
    addLineBreak(fieldset, 1);
    //transaccion - radio 
    fieldset.appendChild(createRadioBtnLabel("Transacción"))
        //descripcion - text
    fieldset.appendChild(createTextLabel("Descripción"));
    addLineBreak(fieldset, 1);
    //precio - text (numero)
    fieldset.appendChild(createTextLabel("Precio"));
    addLineBreak(fieldset, 1);
    //puertas - text (numero)
    fieldset.appendChild(createTextLabel("Puertas"));
    addLineBreak(fieldset, 1);
    //KMs - text (numero)
    fieldset.appendChild(createTextLabel("KMs"));
    addLineBreak(fieldset, 1);
    //potencia - text (numero)
    fieldset.appendChild(createTextLabel("Potencia"));
    addLineBreak(fieldset, 1);
    //checkbox
    fieldset.appendChild(createTextLabel("Otros Datos"));
    addLineBreak(fieldset, 1);
    //botones
    fieldset.appendChild(createDivButtons());

    form.appendChild(fieldset);

    return form;
}

function createFormEditDelete() {
    const form = document.createElement("form");
    const fieldset = createMainFieldSet()

    //inserts id label 
    fieldset.appendChild(createTextLabel("ID"));
    addLineBreak(fieldset, 1);
    //titulo - text
    fieldset.appendChild(createTextLabel("Titulo"));
    //addLineBreak(fieldset, 2);
    //transaccion - radio 
    fieldset.appendChild(createRadioBtnLabel("Transacción"))
        //descripcion - text
    fieldset.appendChild(createTextLabel("Descripción"));
    addLineBreak(fieldset, 1);
    //precio - text (numero)
    fieldset.appendChild(createTextLabel("Precio"));
    addLineBreak(fieldset, 1);
    //puertas - text (numero)
    fieldset.appendChild(createTextLabel("Puertas"));
    addLineBreak(fieldset, 1);
    //KMs - text (numero)
    fieldset.appendChild(createTextLabel("KMs"));
    addLineBreak(fieldset, 1);
    //potencia - text (numero)
    fieldset.appendChild(createTextLabel("Potencia"));
    addLineBreak(fieldset, 1);
    //check
    fieldset.appendChild(createTextLabel("Otros Datos"));
    addLineBreak(fieldset, 1);
    //botones
    fieldset.appendChild(createDivButtonsEditDelete());

    form.appendChild(fieldset);

    return form;
}

function createTextLabel(labelName) {
    const label = document.createElement("label");

    label.innerHTML = labelName + ": ";
    label.id = labelName;

    if (labelName == "Otros Datos") {
        label.appendChild(createCheckList());
    } else {
        label.appendChild(createTextInput(labelName, true));
    }

    return label;
}

function createRadioBtnLabel(labelName) {
    const label = document.createElement("label");

    label.innerHTML = labelName + ": ";
    label.id = labelName;

    label.append(createTransactionRadioButton(label));
    label.removeChild(label.childNodes[label.childNodes.length - 1]);

    return label;
}

function createTextInput(id, required) {
    const input = document.createElement("input");

    if (id == "Titulo" || id == "Descripción") {
        input.type = "text"
        input.id = "txt" + id;
    } else {
        input.type = "number"
        input.id = "txt" + id;
    }

    input.required = required;

    //when creating the id field, it is set to be read-only
    if (id == "ID") {
        input.disabled = true;
    }
    return input;
}

function addLineBreak(fatherNode, lines) {
    for (let i = 0; i < lines; i++) {
        fatherNode.appendChild(document.createElement('br'));
    }
}

function createTransactionRadioButton(label) {

    addLineBreak(label, 1);
    label.appendChild(document.createTextNode("Venta"));
    label.appendChild(createRadioButton("transaction", "rdoVenta", "Venta", false));

    label.appendChild(document.createTextNode("Alquiler"));
    label.appendChild(createRadioButton("transaction", "rdoAlq", "Alquiler", false));

    //addLineBreak(label, 1);
}

function createMainFieldSet() {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");

    legend.innerHTML = "Información Del Anuncio";

    fieldset.appendChild(legend);

    return fieldset;
}

function createRadioButton(name, id, value, checked) {
    const radioButton = document.createElement("input");

    radioButton.type = "radio";
    radioButton.name = name;
    radioButton.id = id;
    radioButton.value = value;
    radioButton.checked = checked;
    radioButton.required = true;

    return radioButton;
}

function createCheckList() {
    const ul = document.createElement('ul');

    ul.className = "checks";
    ul.appendChild(createCheckBox('Aire Acond.', 'aireAcond'));
    ul.appendChild(createCheckBox('Bluetooth', 'bluetooth'));
    ul.appendChild(createCheckBox('Polarizado', 'polarizado'));
    ul.appendChild(createCheckBox('Caja Autom.', 'cajaAutom'));

    return ul
}

function createCheckBox(name, id) {
    const container = document.createElement('container');
    const checkbox = document.createElement("input");
    const label = document.createElement('label');

    container.className = "CheckContainer";

    label.setAttribute('for', 'check' + id);
    label.appendChild(document.createTextNode(name));
    label.id = id;

    checkbox.type = "checkbox";
    checkbox.id = 'check' + id;
    checkbox.checked = false;
    checkbox.value = 'No';

    container.appendChild(checkbox);
    container.appendChild(label);


    return container;
}

function createDivButtons() {
    const div = document.createElement("div");

    div.className = "buttons";
    div.appendChild(createButton("createButton", "Guardar"));
    return div;
}

function createDivButtonsEditDelete() {
    const div = document.createElement("div");

    div.className = "buttons";
    div.appendChild(createButton("modifyButton", "Modificar"));
    div.appendChild(createButton("deleteButton", "Baja"));
    div.appendChild(createButton("cancelButton", "Cancelar"));
    return div;
}

function createButton(id, name) {
    const button = document.createElement("button");

    if (name == "Guardar") {
        const img = document.createElement("img");
        img.src = "./images/save-icon.png";
        img.className = "btnImage";
        button.appendChild(img);
    }

    button.innerHTML = button.innerHTML + name;
    button.className = "container";
    button.id = id;

    return button;
}