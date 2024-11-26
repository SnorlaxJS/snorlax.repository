// JavaScript new Date Methods
// https://www.w3schools.com/js/js_date_methods.asp 

const relogio = setInterval(function time() {
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    var milisegundos = data.getMilliseconds();
    var diaSem = data.getDay();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    
    if (hora < 10) {hora = '0' + hora;}
    if (minutos < 10) {minutos = '0' + minutos;} 
    if (segundos < 10) {segundos = '0' + segundos;}
    if (milisegundos < 10) {milisegundos = '0' + milisegundos;}
    if (milisegundos < 100) {milisegundos = '0' + milisegundos;}

    var id_relatorio_hora = document.getElementById('relatorio_hora');
    var id_relatorio_minutos = document.getElementById('relatorio_minutos');
    var id_relatorio_segundos = document.getElementById('relatorio_segundos');
    var id_relatorio_milisegundos = document.getElementById('relatorio_milesimos');
    id_relatorio_hora.innerHTML = `${hora}`;
    id_relatorio_minutos.innerHTML = `${minutos}`; 
    id_relatorio_segundos.innerHTML = `${segundos}`;
    id_relatorio_milisegundos.innerHTML = `${milisegundos}`;

    switch (diaSem) {
        case 0:
            diaSem = `Domingo`;
            break
        case 1: 
            diaSem = `Segunda-feira`;
            break
        case 2:
            diaSem = `Terça-feira`;
            break
        case 3:
            diaSem = `Quarta-feira`;
            break
        case 4:
            diaSem = `Quinta-feira`;
            break
        case 5:
            diaSem = `Sexta-feira`;
            break
        case 6:
            diaSem = `Sábado`;
            break
        default:
            window.alert("[ERRO] Dia inválido");
            break
    }

    var id_relatorio_diaSem = document.getElementById('relatorio_diaSem');
    id_relatorio_diaSem.innerHTML = `${diaSem}`;

    switch (mes) {
        case 0:
            mes = 1;
            break
        case 1:
            mes = 2;
            break
        case 2:
            mes = 3;
            break
        case 3:
            mes = 4;
            break
        case 4:
            mes = 5;
            break
        case 5:
            mes = 6;
            break
        case 6:
            mes = 7;
            break
        case 7:
            mes = 8;
            break
        case 8:
            mes = 9;
            break
        case 9:
            mes = 10;
            break
        case 10:
            mes = 11;
            break
        case 11:
            mes = 12;
            break
        default:

            break
    }

    var id_relatorio_data = document.getElementById('relatorio_data');
    id_relatorio_data.innerHTML = `${dia}/${mes}/${ano}`;
    
    var newDate_ano_nasc = new Date(data);
    document.getElementById('relatorio_tempo').innerHTML = `<strong>${newDate_ano_nasc.getTime()}</strong>`;
})
