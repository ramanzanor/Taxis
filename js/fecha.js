fecha = new Date();
semana = new Array ("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado");
mes = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio",
                         "Agosto","Septiembre","Octubre","Noviembre","Diciembre")
document.write (semana[fecha.getDay()]+ " "+ fecha.getDate() +" de "+mes[fecha.getMonth()] +" de "+fecha.getFullYear());
                        // document.write (Date()); escribiria la fecha y hora en ingles
    