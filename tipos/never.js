"use strict";
(() => {
    const abc = (msg) => {
        throw new Error(msg);
    };
    abc('Hola'); //no debe de terminar exitosamente la funcion never
    //no debe de tener un pto alcanzable al finalizar la implementracion
});
