let actHora = () => {
    let fecha = new Date(),
       ampm 
    // segundos = fecha.getSeconds();
    let reloj = [{
        horas: fecha.getHours(),
        minutos : fecha.getMinutes(),
        semana : fecha.getDay(),
        dia : fecha.getDate(),
        mes : fecha.getMonth(),
        año : fecha.getFullYear()
    }
    ]

    let h = 0;

    let semD = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "septiembre", "Octubre", "Noviembre", "Diciembre"]

    $.each(reloj, function (index, value) { 

        if (value.horas >= 12) {
            h = value.horas - 12;
            ampm = "PM";
        } else if (value.horas == 0) {
            h = 12;
            ampm = "AM";
        } else {
            h = value.horas;
            ampm = "AM";
        }

        if (value.minutos < 10) { value.minutos = "0" + value.minutos };
        if (h < 10) { h = "0" + h };

        $("#semana").text(`${semD[value.semana]}`);
        $("#dia").text(`${value.dia}`);
        $("#mes").text(`${meses[value.mes]}`);
        $("#año").text(`${value.año}`);
        $("#hora").text(`${h}`);
        $("#min").text(`${value.minutos}`);
        $("#ampm").text(`${ampm}`);
         
    });
}

$(document).ready(function () {
    actHora();
    let repetir = setInterval(actHora, 1000)
});