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
        <h3>Rutina para perder peso (Lunes a Viernes)</h3>
        <ul>
            <li><strong>Lunes (Piernas):</strong>
                <ul>
                    <li>Sentadillas: 4 series de 15 repeticiones</li>
                    <li>Estocadas: 3 series de 12 repeticiones por pierna</li>
                    <li>Elevaciones de talones: 3 series de 20 repeticiones</li>
                    <li>Puente de glúteos: 4 series de 15 repeticiones</li>
                    <li>Saltos en caja: 3 series de 10 repeticiones</li>
                    <li>Cardio ligero: 15 minutos</li>
                </ul>
            </li>
            <li><strong>Martes (Brazos y Abdomen):</strong>
                <ul>
                    <li>Flexiones de brazos: 4 series de 12 repeticiones</li>
                    <li>Curl de bíceps con mancuernas: 3 series de 10 repeticiones</li>
                    <li>Extensiones de tríceps: 3 series de 12 repeticiones</li>
                    <li>Plancha abdominal: 4 series de 30 segundos</li>
                    <li>Abdominales bicicleta: 3 series de 20 repeticiones</li>
                    <li>Mountain climbers: 4 series de 30 segundos</li>
                </ul>
            </li>
            <li><strong>Miércoles (Pecho y Espalda):</strong>
                <ul>
                    <li>Press de pecho con mancuernas: 4 series de 12 repeticiones</li>
                    <li>Flexiones de pecho: 3 series de 15 repeticiones</li>
                    <li>Remo con mancuerna: 4 series de 12 repeticiones</li>
                    <li>Pull-ups asistidas: 3 series de 8 repeticiones</li>
                    <li>Bird-dogs: 4 series de 12 repeticiones por lado</li>
                    <li>Cardio ligero: 15 minutos</li>
                </ul>
            </li>
            <li><strong>Jueves (Piernas y Glúteos):</strong>
                <ul>
                    <li>Sentadillas con salto: 3 series de 12 repeticiones</li>
                    <li>Zancadas laterales: 4 series de 12 repeticiones</li>
                    <li>Puente con una pierna: 3 series de 10 repeticiones por pierna</li>
                    <li>Step-ups: 3 series de 12 repeticiones por pierna</li>
                    <li>Saltos de tijera: 4 series de 20 repeticiones</li>
                    <li>Estiramientos finales</li>
                </ul>
            </li>
            <li><strong>Viernes (Cuerpo completo):</strong>
                <ul>
                    <li>Burpees: 3 series de 12 repeticiones</li>
                    <li>Sentadillas con peso: 4 series de 15 repeticiones</li>
                    <li>Flexiones con rotación: 3 series de 12 repeticiones</li>
                    <li>Plancha lateral: 3 series de 20 segundos por lado</li>
                    <li>Mountain climbers: 3 series de 30 segundos</li>
                    <li>Caminata rápida: 20 minutos</li>
                </ul>
            </li>
        </ul>
    `;
} else if (objetivo === "ganar-masa" && edad === "18-25") {
    rutina = `
        <h3>Rutina para ganar masa muscular (18-25 años, Lunes a Viernes)</h3>
        <ul>
            <li><strong>Lunes (Piernas):</strong>
                <ul>
                    <li>Sentadillas con peso: 4 series de 10 repeticiones</li>
                    <li>Press de piernas: 3 series de 12 repeticiones</li>
                    <li>Extensiones de cuádriceps: 3 series de 15 repeticiones</li>
                    <li>Curl de piernas: 3 series de 12 repeticiones</li>
                    <li>Hip thrust: 4 series de 12 repeticiones</li>
                    <li>Elevaciones de talones: 4 series de 20 repeticiones</li>
                </ul>
            </li>
            <li><strong>Martes (Brazos):</strong>
                <ul>
                    <li>Curl de bíceps con barra: 4 series de 10 repeticiones</li>
                    <li>Curl martillo: 3 series de 12 repeticiones</li>
                    <li>Extensiones de tríceps con cuerda: 3 series de 12 repeticiones</li>
                    <li>Press francés: 4 series de 10 repeticiones</li>
                    <li>Dominadas supinas: 4 series de 8 repeticiones</li>
                    <li>Flexiones cerradas: 3 series de 12 repeticiones</li>
                </ul>
            </li>
            <li><strong>Miércoles (Pecho y Espalda):</strong>
                <ul>
                    <li>Press de banca: 4 series de 8 repeticiones</li>
                    <li>Press inclinado con mancuernas: 3 series de 10 repeticiones</li>
                    <li>Remo con barra: 4 series de 10 repeticiones</li>
                    <li>Dominadas pronadas: 3 series de 8 repeticiones</li>
                    <li>Pull-over con mancuernas: 3 series de 12 repeticiones</li>
                    <li>Encogimientos de hombros: 4 series de 15 repeticiones</li>
                </ul>
            </li>
            <li><strong>Jueves (Piernas y Glúteos):</strong>
                <ul>
                    <li>Sentadillas búlgaras: 3 series de 12 repeticiones por pierna</li>
                    <li>Deadlift rumano: 4 series de 10 repeticiones</li>
                    <li>Zancadas caminando: 3 series de 12 repeticiones</li>
                    <li>Step-ups con mancuernas: 4 series de 12 repeticiones</li>
                    <li>Hip thrust pesado: 4 series de 10 repeticiones</li>
                    <li>Abducción de cadera: 4 series de 15 repeticiones</li>
                </ul>
            </li>
            <li><strong>Viernes (Hombros y Core):</strong>
                <ul>
                    <li>Press militar: 4 series de 10 repeticiones</li>
                    <li>Elevaciones laterales: 3 series de 15 repeticiones</li>
                    <li>Elevaciones frontales: 3 series de 12 repeticiones</li>
                    <li>Plancha con peso: 4 series de 30 segundos</li>
                    <li>Ab wheel rollout: 3 series de 12 repeticiones</li>
                    <li>Russian twists: 3 series de 20 repeticiones</li>
                </ul>
            </li>
        </ul>
    `;
}

// Muestra la rutina generada
document.getElementById("resultadoRutinas").innerHTML = rutina;

}
