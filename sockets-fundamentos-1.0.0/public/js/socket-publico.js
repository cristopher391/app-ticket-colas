// Comando para establecer la conexion
var socket = io();

var lblTicket1 = $("#lblTicket1");
var lblTicket2 = $("#lblTicket2");
var lblTicket3 = $("#lblTicket3");
var lblTicket4 = $("#lblTicket4");

var lblEscritorio1 = $("#lblEscritorio1");
var lblEscritorio2 = $("#lblEscritorio2");
var lblEscritorio3 = $("#lblEscritorio3");
var lblEscritorio4 = $("#lblEscritorio4");


var lblTickes = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
var lblEscritorios = [lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4];

socket.on('estadoActual', function(resp) {
    // console.log(resp);
    actualizaHtml(resp.ultimos4);
});


socket.on('ultimos4', function(resp) {
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizaHtml(resp.ultimos4);

});



function actualizaHtml(ultimos4) {

    for (let i = 0; i <= ultimos4.length - 1; i++) {
        lblTickes[i].text('Tickets ' + ultimos4[i].numero);
        lblEscritorios[i].text('Escritorio ' + ultimos4[i].escritorio);

    }

}