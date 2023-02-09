let actHora = () => {
    let fecha = new Date(),
        horas = fecha.getHours(),
        ampm,
        minutos = fecha.getMinutes(),
        semana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        año = fecha.getFullYear();
    // segundos = fecha.getSeconds();

    let semD = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "septiembre", "Octubre", "Noviembre", "Diciembre"]

    if (horas >= 12) {
        horas = horas - 12;
        ampm = "PM";
    } else if (horas == 0) {
        horas = 12;
        ampm = "AM";
    } else {
        ampm = "AM";
    }

    if (minutos < 10) { minutos = "0" + minutos }

    $("#semana").text(`${semD[semana]}`);
    $("#dia").text(`${dia}`);
    $("#mes").text(`${meses[mes]}`);
    $("#año").text(`${año}`);
    $("#hora").text(`${horas}`);
    $("#min").text(`${minutos}`);
    $("#ampm").text(`${ampm}`);




}

$(document).ready(function () {
    actHora();
    let repetir = setInterval(actHora, 1000)
});