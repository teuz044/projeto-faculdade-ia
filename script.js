function validarFormulario() {
    var sexo = document.getElementById("sexo").value;
    var acidentesFatais = document.getElementById("acidentes_fatais").value;
    var tipoVeiculo = document.getElementById("tipo_veiculo").value;

    if (sexo === "" || acidentesFatais === "" || tipoVeiculo === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        alert("Carregando...");
    }
}