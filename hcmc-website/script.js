class Patient {
    constructor(id, firstName, middleInitial, lastName, dob, department, isOutpatient) {
        this.patientID = id;
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.dob = dob;
        this.department = department;
        this.isOutpatient = isOutpatient;
    }

    addPatientToTable() {
        const properties = [this.patientID, this.firstName, this.middleInitial, this.lastName, this.dob, this.department, this.isOutpatient];
        let tableBody = document.getElementById("tbodyPatientsList");
        let newRow = document.createElement("tr");

        for (let i = 0; i < properties.length; i++) {
            let tableData = document.createElement("td");
            let content = document.createTextNode(properties[i]);
            tableData.appendChild(content);
            newRow.appendChild(tableData);
        }

        tableBody.appendChild(newRow);
    }
}

const initialPatients = [
    new Patient("EP-001-000001", "Ana", "J", "Smith", "1945-01-05", "Ear, Nose and Throat", "No"),
    new Patient("P-001-000002", "Bob", "K", "Jones", "1985-05-04", "Cardiology", "Yes"),
    new Patient("EP-001-000003", "Carlos", "A", "Hernandez", "1957-03-13", "Cardiology", "Yes")
];

initialPatients.forEach(patient => {
    patient.addPatientToTable();
});

document.getElementById("btnRegisterPatient").addEventListener("click", function (event) {
    // Get form values
    var patientIdNumberInput = document.getElementById("patientIdNumber");
    var firstNameInput = document.getElementById("firstName");
    var middleInitialsInput = document.getElementById("middleInitials");
    var lastNameInput = document.getElementById("lastName");
    var dateOfBirthInput = document.getElementById("dateOfBirth");
    var departmentSelect = document.getElementById("ddlDepartment");
    var outpatientRadio = document.querySelector('input[name="radioIsOutPatient"]:checked');

    // Check if required fields are empty
    if (!patientIdNumberInput.checkValidity() || !firstNameInput.checkValidity() || !lastNameInput.checkValidity() ||
        !dateOfBirthInput.checkValidity() || !departmentSelect.checkValidity() || !outpatientRadio.checkValidity()) {
        return;
    }

    event.preventDefault(); // Prevent the form from actually submitting

    const newPatient = new Patient(
        patientIdNumberInput.value,
        firstNameInput.value,
        middleInitialsInput.value,
        lastNameInput.value,
        dateOfBirthInput.value,
        departmentSelect.value,
        outpatientRadio.value
    );

    newPatient.addPatientToTable();
});

var elderlyCheck = document.getElementById("chkElderlyPatients");
elderlyCheck.addEventListener("change", handleCheckboxChange);

var outPatientCheckbox = document.getElementById("chkShowOutPatients");
outPatientCheckbox.addEventListener("change", handleCheckboxChange);

function handleCheckboxChange() {
    var rows = document.getElementById("tbodyPatientsList").getElementsByTagName("tr");

    for (var i = 0; i < rows.length; i++) {
        var outpatientCell = rows[i].getElementsByTagName("td")[6];
        var isOutpatientValue = outpatientCell.textContent;

        var dobCell = rows[i].getElementsByTagName("td")[4];
        var dateOfBirthValue = dobCell.textContent;
        var birthYear = parseInt(dateOfBirthValue.split("-")[0], 10);

        var hideRow = (outPatientCheckbox.checked && isOutpatientValue === "No") ||
                      (elderlyCheck.checked && birthYear > 1958);

        if (hideRow) {
            rows[i].style.display = "none";
        } else {
            rows[i].style.display = "";
        }
    }
}

