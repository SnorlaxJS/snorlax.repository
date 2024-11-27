var sex_select = "";

function limpar() {
    res.innerHTML = '';
}

function validacao_sexo_m() {
    input_quadril.innerHTML = ``;
    sex_select = "M";
}

function validacao_sexo_f() {
    input_quadril.innerHTML = `<label for="quadril">Medida da circunferência do quadril (cm): </label>
    <input type="number" name="quadril" id="quadril">`;
    sex_select = "F";
}

function calcular_imc() {
    let peso = document.getElementById('peso');
    let altura = document.getElementById('altura');

    let numPeso = Number(peso.value);
    let numAltura = Number(altura.value);
    let imc = numPeso / (numAltura**2);

    res.innerHTML = `${imc.toFixed(2)}`;

    if (imc < 18.50) {
        complemento.innerHTML = `Abaixo do peso`;
    } else if (imc >= 18.50 && imc <= 24.99) {
        complemento.innerHTML = `Peso recomendado`;
    } else if (imc >= 25.00 && imc <= 29.99) {
        complemento.innerHTML = `Sobrepeso`;
    } else if (imc >= 30.00 && imc <= 34.99) {
        complemento.innerHTML = `Obesidade grau I`;
    } else if (imc >= 35.00 && imc <= 39.99) {
        complemento.innerHTML = `Obesidade grau II`;
    } else if (imc >= 40.00) {
        complemento.innerHTML = `Obesidade grau III`;
    }
}

function calcular_agua() {
    let peso = document.getElementById('peso');
    let numPeso = Number(peso.value);
    let agua = numPeso * 0.035;
    res.innerHTML = `${agua} litros de água por dia`;
}

function calcular_gordura() {
    //res.innerHTML = `${sex_select}`;

    let cintura = document.getElementById('cintura');
    let pescoco = document.getElementById('pescoco');
    let altura = document.getElementById('altura');
    let quadril = document.getElementById('quadril');
    let numCintura = Number(cintura.value);
    let numPescoco = Number(pescoco.value);
    let numAltura = Number(altura.value);
    let numQuadril = Number(quadril.value);

    let pcentGordura = 0;

    if (sex_select == "F") {
        pcentGordura = 86.01 * Math.log10(numCintura + numQuadril - numPescoco) - 70.041 * Math.log10(numAltura) + 36.76;
    } else {
        pcentGordura = 86.01 * Math.log10(numCintura - numPescoco) - 70.041 * Math.log10(numAltura) + 36.76;
    }
    
    res.innerHTML = `${pcentGordura.toFixed(2)}`;
}

function validacao_sexo_m_kcal() {
    sex_select = "M";
}

function validacao_sexo_f_kcal() {
    sex_select = "F";
}

function calc_calorias() {
    let 
}