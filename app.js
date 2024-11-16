let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}


function generarRutina() {
    // Obtener los valores seleccionados
    const edad = document.getElementById('edad').value;
    const objetivo = document.getElementById('objetivo').value;

    // Contenedor donde se mostrarán las rutinas
    const resultadoRutinas = document.getElementById('resultadoRutinas');

    // Verificar si se seleccionaron ambos campos
    if (edad === "" || objetivo === "") {
        resultadoRutinas.innerHTML = "<p style='color:red;'>Por favor, selecciona tu edad y tu objetivo.</p>";
        return;
    }

    // Generar rutinas dependiendo del rango de edad y objetivo
    let rutina = "";

    if (objetivo === "perder-peso") {
        rutina = `
            <h3>Rutina para perder peso</h3>
            <ul>
                <li>Cardio (30 minutos)</li>
                <li>Sentadillas: 3 series de 15 repeticiones</li>
                <li>Abdominales: 3 series de 20 repeticiones</li>
                <li>Pesas ligeras: 3 series de 12 repeticiones</li>
                <li>Estiramientos</li>
            </ul>
        `;
    
    }else if (objetivo === "ganar-masa" && edad == "18-25") {
        rutina = `
            <h3>Rutina para ganar masa muscular</h3>
            <ul>
                <li>Press de banca: 4 series de 10 repeticiones</li>
                <li>Sentadillas con peso: 4 series de 12 repeticiones</li>
                <li>Dominadas: 4 series de 8 repeticiones</li>
                <li>Deadlift: 4 series de 10 repeticiones</li>
                <li>Estiramientos</li>
            </ul>
        `;
    } else if (objetivo === "ganar-masa" && edad == "26-35") {
        rutina = `
            <h3>Rutina para ganar masa muscular</h3>
            <ul>
                <li>Press de banca: 4 series de 8-10 repeticiones (peso moderado a alto)</li>
                <li>Remo con barra: 4 series de 8-10 repeticiones</li>
                <li>Dominadas (con peso si es posible): 4 series de 8-10 repetir</li>
                <li>Press militar con mancuernas: 4 series de 10-12 repeticiones</li>
                <li>Fondos en paralelas: 3 series de 10-12 repeticiones (peso corporal o peso adicional)</li>
                <li>Curl de bíceps con barra: 4 series de 10 repeticiones</li>
                <li>Estiramientos de pecho, hombros y brazos: 5-10 minutos al final</li>
            </ul>
        `;
    } else if (objetivo === "ganar-masa" && edad == "36-45") {
        rutina = `
            <h3>Rutina para ganar masa muscular</h3>
            <ul>
                <li>Press de banca (peso moderado): 4 series de 8-10 repeticion</li>
                <li>Remo con mancuerna: 4 series de 8-10 repeticiones por brazo</li>
                <li>Dominadas asistidas o dominadas negativas: 4 series de 8 repeticiones</li>
                <li>Press de hombros con barra (peso moderado): 4 series de 10-12 repeticiones</li>
                <li>Fondos en paralelas: 3 series de 10-12 repeticiones (peso corporal o peso adicional)</li>
                <li>Flexiones de pecho inclinadas: 4 series de 12 repeticiones</li>
                <li>Curl de bíceps con mancuernas: 3 series de 10-12 repeticiones</li>
                <li>Estiramientos y movilidad de hombros, espalda y brazos: 10 minutos</li>
            </ul>
        `;
    }

    // Mostrar la rutina generada
    resultadoRutinas.innerHTML = rutina;
}
