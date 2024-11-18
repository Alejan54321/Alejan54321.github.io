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

if (objetivo === "perder-peso" && edad === "18-25" ) {
    rutina = `
        <h3>Rutina para perder peso (Lunes a Viernes)</h3>
        <ul>
            <li><strong>Lunes (Piernas):</strong>
                <ul>
                    <li>Sentadillas: 4 series de 15 repeticiones</li>
                    <img src="img/sentadillas.gif" alt="GIF de sentadillas" style="width:200px; height:auto;">
                    <li>Estocadas: 3 series de 12 repeticiones por pierna</li>
                    <img src="img/estocadas.gif" alt="GIF de estocadas" style="width:200px; height:auto;">
                    <li>Elevaciones de talones: 3 series de 20 repeticiones</li>
                    <img src="img/talones.png" alt="imagen de talones" style="width:200px; height:auto;">
                    <li>Puente de glúteos: 4 series de 15 repeticiones</li>
                    <img src="img/puente.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Saltos en caja: 3 series de 10 repeticiones</li>
                    <img src="img/saltoencaja.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Cardio ligero: 15 minutos</li>
                </ul>
            </li>
            <li><strong>Martes (Brazos y Abdomen):</strong>
                <ul>
                    <li>Flexiones de brazos: 4 series de 12 repeticiones</li>
                    <img src="img/flexiones.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Curl de bíceps con mancuernas: 3 series de 10 repeticiones</li>
                    <img src="img/Curlbiceps.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Extensiones de tríceps: 3 series de 12 repeticiones</li>
                    <img src="img/triceps.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Plancha abdominal: 4 series de 30 segundos</li>
                    <img src="img/plancha.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Abdominales bicicleta: 3 series de 20 repeticiones</li>
                    <img src="img/bicicleta.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Mountain climbers: 4 series de 30 segundos</li>
                    <img src="img/mountain.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Miércoles (Pecho y Espalda):</strong>
                <ul>
                    <li>Press de pecho con mancuernas: 4 series de 12 repeticiones</li>
                    <img src="img/press.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Flexiones de pecho: 3 series de 15 repeticiones</li>
                    <img src="img/push.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Remo con mancuerna: 4 series de 12 repeticiones</li>
                    <img src="img/Remos.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Pull-ups asistidas: 3 series de 8 repeticiones</li>
                    <img src="img/pullups.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Bird-dogs: 4 series de 12 repeticiones por lado</li>
                    <img src="img/Bird.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Cardio ligero: 15 minutos</li>
                </ul>
            </li>
            <li><strong>Jueves (Piernas y Glúteos):</strong>
                <ul>
                    <li>Sentadillas con salto: 3 series de 12 repeticiones</li>
                    <img src="img/salto.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Zancadas laterales: 4 series de 12 repeticiones</li>
                    <img src="img/Zancada.jpg" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Puente con una pierna: 3 series de 10 repeticiones por pierna</li>
                    <img src="img/puenteunapierna.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Step-ups: 3 series de 12 repeticiones por pierna</li>
                    <img src="img/Step.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Saltos de tijera: 4 series de 20 repeticiones</li>
                    <img src="img/saltos.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Estiramientos finales</li>
                </ul>
            </li>
            <li><strong>Viernes (Cuerpo completo):</strong>
                <ul>
                    <li>Burpees: 3 series de 12 repeticiones</li>
                    <img src="img/burpess.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Sentadillas con peso: 4 series de 15 repeticiones</li>
                    <img src="img/sentadillaconpeso.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Flexiones con rotación: 3 series de 12 repeticiones</li>
                    <img src="img/rotación.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Plancha lateral: 3 series de 20 segundos por lado</li>
                    <img src="img/planchalateral.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Mountain climbers: 3 series de 30 segundos</li>
                    <img src="img/mountain.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
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
                    <img src="img/sentadillaconpeso.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Press de piernas: 3 series de 12 repeticiones</li>
                    <img src="img/presspierna.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Extensiones de cuádriceps: 3 series de 15 repeticiones</li>
                    <img src="img/extensiones.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Curl de piernas: 3 series de 12 repeticiones</li>
                    <img src="img/curl.jpg" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Hip thrust: 4 series de 12 repeticiones</li>
                    <img src="img/thrust.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Elevaciones de talones: 4 series de 20 repeticiones</li>
                    <img src="img/talones.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Martes (Brazos):</strong>
                <ul>
                    <li>Curl de bíceps con barra: 4 series de 10 repeticiones</li>
                    <img src="img/Curlbiceps.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Curl martillo: 3 series de 12 repeticiones</li>
                    <img src="img/martillo.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Extensiones de tríceps con cuerda: 3 series de 12 repeticiones</li>
                    <img src="img/extensiones.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Press francés: 4 series de 10 repeticiones</li>
                    <img src="img/frances.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Dominadas supinas: 4 series de 8 repeticiones</li>
                    <img src="img/suprinas.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Flexiones cerradas: 3 series de 12 repeticiones</li>
                    <img src="img/cerradas.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Miércoles (Pecho y Espalda):</strong>
                <ul>
                    <li>Press de banca: 4 series de 8 repeticiones</li>
                    <img src="img/press.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Press inclinado con mancuernas: 3 series de 10 repeticiones</li>
                    <img src="img/inclinado.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Remo con barra: 4 series de 10 repeticiones</li>
                    <img src="img/espalda.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Dominadas pronadas: 3 series de 8 repeticiones</li>
                    <img src="img/Neutras.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Pull-over con mancuernas: 3 series de 12 repeticiones</li>
                    <img src="img/pullover.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Encogimientos de hombros: 4 series de 15 repeticiones</li>
                    <img src="img/hombros.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Jueves (Piernas y Glúteos):</strong>
                <ul>
                    <li>Sentadillas búlgaras: 3 series de 12 repeticiones por pierna</li>
                    <img src="img/bulgara.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Deadlift rumano: 4 series de 10 repeticiones</li>
                    <img src="img/roman.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Zancadas caminando: 3 series de 12 repeticiones</li>
                    <img src="img/zcaminando.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Step-ups con mancuernas: 4 series de 12 repeticiones</li>
                    <img src="img/smancuerna.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Hip thrust pesado: 4 series de 10 repeticiones</li>
                    <img src="img/thrust.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Abducción de cadera: 4 series de 15 repeticiones</li>
                    <img src="img/cadera.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Viernes (Hombros y Core):</strong>
                <ul>
                    <li>Press militar: 4 series de 10 repeticiones</li>
                    <img src="img/militar.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Elevaciones laterales: 3 series de 15 repeticiones</li>
                    <img src="img/elevaciones.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Elevaciones frontales: 3 series de 12 repeticiones</li>
                    <img src="img/frontaless.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Plancha con peso: 4 series de 30 segundos</li>
                    <img src="img/planchapeso.jpg" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Ab wheel rollout: 3 series de 12 repeticiones</li>
                    <img src="img/ab.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Russian twists: 3 series de 20 repeticiones</li>
                    <img src="img/rusian.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
        </ul>
    `;
}else if (objetivo === "ganar-masa" && edad === "26-35") {
    rutina = `
        <h3>Rutina para ganar masa muscular (26-35 años, Lunes a Viernes)</h3>
        <ul>
            <li><strong>Lunes (Piernas):</strong>
                <ul>
                    <li>Sentadillas con barra: 4 series de 10 repeticiones</li>
                    <img src="img/sentadillaconpeso.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Press de piernas: 3 series de 10-12 repeticiones</li>
                    <img src="img/presspierna.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Peso muerto rumano: 4 series de 8 repeticiones</li>
                    <img src="img/roman.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Zancadas con mancuernas: 3 series de 12 repeticiones</li>
                    <img src="img/zcaminando.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Martes (Brazos):</strong>
                <ul>
                    <li>Curl curl barra recta: 4 series de 10-12 repeticiones</li>
                    <img src="img/Curlbiceps.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Curl martillo: 3 series de 12 repeticiones</li>
                    <img src="img/martillo.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Press francés: 4 series de 10 repeticiones</li>
                    <img src="img/frances.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Fondos para triceps en banco: 4 series de 8 repeticiones</li>
                    <img src="img/triceps.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Miércoles (Pecho):</strong>
                <ul>
                    <li>Press de banca: 4 series de 8 repeticiones</li>
                    <img src="img/press.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Press inclinado con mancuernas: 3 series de 10 repeticiones</li>
                    <img src="img/inclinado.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Aperturas con mancuernas: 4 series de 10 repeticiones</li>
                    <img src="img/aperturas.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Fondos en paralelas: 3 series de 8 repeticiones</li>
                    <img src="img/paralelas.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Jueves (Espalda):</strong>
                <ul>
                    <li>Dominadas: 4 series de 8-10 repeticiones </li>
                    <img src="img/Neutras.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Remo con barra:  3 series de 10-12 repeticiones</li>
                    <img src="img/espalda.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Jalón al pecho en polea: 4 series de 10 repeticiones</li>
                    <img src="img/jalon.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Remo con mancuerna a una mano: 3 series de 10 repeticiones por lado</li>
                    <img src="img/Remos.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Viernes (Hombros y Core):</strong>
                <ul>
                    <li>Press militar: 4 series de 10 repeticiones</li>
                    <img src="img/militar.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Elevaciones laterales: 3 series de 15 repeticiones</li>
                    <img src="img/elevaciones.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Elevaciones frontales: 3 series de 12 repeticiones</li>
                    <img src="img/frontaless.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Plancha con peso: 4 series de 30 segundos</li>
                    <img src="img/planchapeso.jpg" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Ab wheel rollout: 3 series de 12 repeticiones</li>
                    <img src="img/ab.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Russian twists: 3 series de 20 repeticiones</li>
                    <img src="img/rusian.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
        </ul>
    `;
}else if (objetivo === "perder-peso" && edad === "26-35") {
    rutina = `
        <h3>Rutina para ganar masa muscular (26-35 años, Lunes a Viernes)</h3>
        <ul>
            <li><strong>Lunes (Piernas):</strong>
                <ul>
                    <li>Sentadillas con barra con peso ligero: 4 series de 12-15 repeticiones.</li>
                    <img src="img/sentadillaconpeso.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Elevaciones de talones en máquina o con peso corporal: 4 series de 20 repeticiones</li>
                    <img src="img/talones.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Zancadas con mancuernas: 3 series de 15 pasos por pierna</li>
                    <img src="img/zcaminando.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Martes (Brazos):</strong>
                <ul>
                    <li>Curl curl barra recta: 4 series de 10-12 repeticiones</li>
                    <img src="img/Curlbiceps.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Curl martillo: 3 series de 12 repeticiones</li>
                    <img src="img/martillo.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Extensiones de tríceps en polea: 3 series de 15 repeticiones</li>
                    <img src="img/polea.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Fondos para triceps en banco: 4 series de 8 repeticiones</li>
                    <img src="img/triceps.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Miércoles (Pecho):</strong>
                <ul>
                    <li>Press de banca: 4 series de 8 repeticiones</li>
                    <img src="img/press.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Press inclinado con mancuernas: 3 series de 10 repeticiones</li>
                    <img src="img/inclinado.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Flexiones de pecho: 4 series al fallo muscular</li>
                    <img src="img/aperturas.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Fondos en paralelas: 3 series de 8 repeticiones</li>
                    <img src="img/flexiones.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Jueves (Espalda):</strong>
                <ul>
                    <li>Superman (extensiones lumbares): 4 series de 20 repeticiones </li>
                    <img src="img/superman.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Remo con barra:   3 series de 12-15 repeticiones</li>
                    <img src="img/espalda.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Jalón al pecho en polea: 4 series de 10 repeticiones</li>
                    <img src="img/jalon.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Remo con mancuerna a una mano: 3 series de 10 repeticiones por lado</li>
                    <img src="img/Remos.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Viernes (Hombros y Core):</strong>
                <ul>
                    <li>Press militar: 4 series de 10 repeticiones</li>
                    <img src="img/militar.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Elevaciones laterales: 3 series de 15 repeticiones</li>
                    <img src="img/elevaciones.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Elevaciones frontales: 3 series de 12 repeticiones</li>
                    <img src="img/frontaless.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Plancha con peso: 4 series de 30 segundos</li>
                    <img src="img/planchapeso.jpg" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Ab wheel rollout: 3 series de 12 repeticiones</li>
                    <img src="img/ab.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Russian twists: 3 series de 20 repeticiones</li>
                    <img src="img/rusian.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
        </ul>
    `;
}else if (objetivo === "ganar-masa" && edad === "36-45") {
    rutina = `
        <h3>Rutina para ganar masa muscular (36-45 años, Lunes a Viernes)</h3>
        <ul>
            <li><strong>Lunes (Piernas):</strong>
                <ul>
                    <li>Sentadillas goblet (con mancuerna): 4 series de 8-10 repeticiones</li>
                    <img src="img/goblet.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Peso muerto con barra hexagonal: 3 series de 8 repeticiones</li>
                    <img src="img/hexagonal.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Step-ups (subidas a banco con mancuerna): 3 series de 12 repeticiones por pierna</li>
                    <img src="img/Step.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Martes (Brazos):</strong>
                <ul>
                    <li>Curl en predicador con mancuernas: 3 series de 12 repeticiones</li>
                    <img src="img/predicador.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Extensiones de tríceps con cuerda (polea): 3 series de 10-12 repeticiones</li>
                    <img src="img/polea.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Fondos para tríceps en máquina: 4 series de 10 repeticiones</li>
                    <img src="img/tricepsmaquina.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Miércoles (Pecho):</strong>
                <ul>
                    <li>Press de banca: 4 series de 8-10 repeticiones</li>
                    <img src="img/press.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Press inclinado con mancuernas: 3 series de 10 repeticiones</li>
                    <img src="img/inclinado.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Aperturas con mancuernas: 4 series de 10 repeticiones</li>
                    <img src="img/aperturas.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Flexiones con peso adicional: 4 series de 12 repeticiones</li>
                    <img src="img/flexiones.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Jueves (Espalda):</strong>
                <ul>
                    <li>Jalón al pecho en polea: 4 series de 10 repeticiones </li>
                    <img src="img/jalon.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Remo en máquina (con agarre neutro): 3 series de 10 repeticiones</li>
                    <img src="img/remomaquina.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Face pulls (polea): 3 series de 12 repeticiones</li>
                    <img src="img/face.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Hiperextensiones lumbares con peso ligero: 4 series de 12 repeticiones</li>
                    <img src="img/hipertensiones.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Viernes (Hombros y Core):</strong>
                <ul>
                    <li>Press militar: 4 series de 10 repeticiones</li>
                    <img src="img/militar.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Elevaciones laterales: 3 series de 15 repeticiones</li>
                    <img src="img/elevaciones.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Elevaciones frontales: 3 series de 12 repeticiones</li>
                    <img src="img/frontaless.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Plancha con peso: 4 series de 30 segundos</li>
                    <img src="img/planchapeso.jpg" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Ab wheel rollout: 3 series de 12 repeticiones</li>
                    <img src="img/ab.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Russian twists: 3 series de 20 repeticiones</li>
                    <img src="img/rusian.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
        </ul>
    `;
}else if (objetivo === "perder-peso" && edad === "36-45") {
    rutina = `
        <h3>Rutina para ganar masa muscular (36-45 años, Lunes a Viernes)</h3>
        <ul>
            <li><strong>Lunes (Piernas):</strong>
                <ul>
                    <li>Sentadillas con barra con peso ligero: 4 series de 12-15 repeticiones.</li>
                    <img src="img/sentadillaconpeso.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Elevaciones de talones en máquina o con peso corporal: 4 series de 20 repeticiones</li>
                    <img src="img/talones.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Zancadas con mancuernas: 3 series de 15 pasos por pierna</li>
                    <img src="img/zcaminando.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Martes (Brazos):</strong>
                <ul>
                    <li>Curl curl barra recta: 4 series de 10-12 repeticiones</li>
                    <img src="img/Curlbiceps.png alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Curl concentrado con mancuerna: 3 series de 15 repeticiones</li>
                    <img src="img/curlconcentrado.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Fondos para triceps en banco: 4 series de 8 repeticiones</li>
                    <img src="img/triceps.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Miércoles (Pecho):</strong>
                <ul>
                    <li>Press de banca: 4 series de 8 repeticiones</li>
                    <img src="img/press.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Press inclinado con mancuernas: 3 series de 10 repeticiones</li>
                    <img src="img/inclinado.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Flexiones de pecho: 4 series al fallo muscular</li>
                    <img src="img/aperturas.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Fondos en paralelas: 3 series de 8 repeticiones</li>
                    <img src="img/flexiones.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Jueves (Espalda):</strong>
                <ul>
                    <li>Superman (extensiones lumbares): 4 series de 20 repeticiones </li>
                    <img src="img/superman.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Remo con barra:   3 series de 12-15 repeticiones</li>
                    <img src="img/espalda.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Jalón al pecho en polea: 4 series de 10 repeticiones</li>
                    <img src="img/jalon.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Remo con mancuerna a una mano: 3 series de 10 repeticiones por lado</li>
                    <img src="img/Remos.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Viernes (Hombros y Core):</strong>
                <ul>
                    <li>Press militar: 4 series de 10 repeticiones</li>
                    <img src="img/militar.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Elevaciones laterales: 3 series de 15 repeticiones</li>
                    <img src="img/elevaciones.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Elevaciones frontales: 3 series de 12 repeticiones</li>
                    <img src="img/frontaless.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Plancha con peso: 4 series de 30 segundos</li>
                    <img src="img/planchapeso.jpg" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Ab wheel rollout: 3 series de 12 repeticiones</li>
                    <img src="img/ab.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Russian twists: 3 series de 20 repeticiones</li>
                    <img src="img/rusian.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
        </ul>
    `;
}else if (objetivo === "ganar-masa" && edad === "46") {
    rutina = `
        <h3>Rutina para ganar masa muscular (46-mas años, Lunes a Viernes)</h3>
        <ul>
            <li><strong>Lunes (Piernas):</strong>
                <ul>
                    <li>Sentadillas goblet (con mancuerna): 4 series de 8-10 repeticiones</li>
                    <img src="img/goblet.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Peso muerto con barra hexagonal: 3 series de 8 repeticiones</li>
                    <img src="img/hexagonal.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Step-ups (subidas a banco con mancuerna): 3 series de 12 repeticiones por pierna</li>
                    <img src="img/Step.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Martes (Brazos):</strong>
                <ul>
                    <li>Curl en predicador con mancuernas: 3 series de 12 repeticiones</li>
                    <img src="img/predicador.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Extensiones de tríceps con cuerda (polea): 3 series de 10-12 repeticiones</li>
                    <img src="img/polea.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Fondos para tríceps en máquina: 4 series de 10 repeticiones</li>
                    <img src="img/tricepsmaquina.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Miércoles (Pecho):</strong>
                <ul>
                    <li>Press de banca: 4 series de 8-10 repeticiones</li>
                    <img src="img/press.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Press inclinado con mancuernas: 3 series de 10 repeticiones</li>
                    <img src="img/inclinado.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Aperturas con mancuernas: 4 series de 10 repeticiones</li>
                    <img src="img/aperturas.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Flexiones con peso adicional: 4 series de 12 repeticiones</li>
                    <img src="img/flexiones.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Jueves (Espalda):</strong>
                <ul>
                    <li>Jalón al pecho en polea: 4 series de 10 repeticiones </li>
                    <img src="img/jalon.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Remo en máquina (con agarre neutro): 3 series de 10 repeticiones</li>
                    <img src="img/remomaquina.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Face pulls (polea): 3 series de 12 repeticiones</li>
                    <img src="img/face.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Hiperextensiones lumbares con peso ligero: 4 series de 12 repeticiones</li>
                    <img src="img/hipertensiones.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Viernes (Hombros y Core):</strong>
                <ul>
                    <li>Press militar: 4 series de 10 repeticiones</li>
                    <img src="img/militar.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Elevaciones laterales: 3 series de 15 repeticiones</li>
                    <img src="img/elevaciones.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Elevaciones frontales: 3 series de 12 repeticiones</li>
                    <img src="img/frontaless.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Plancha con peso: 4 series de 30 segundos</li>
                    <img src="img/planchapeso.jpg" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Ab wheel rollout: 3 series de 12 repeticiones</li>
                    <img src="img/ab.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Russian twists: 3 series de 20 repeticiones</li>
                    <img src="img/rusian.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
        </ul>
    `;
}else if (objetivo === "perder-peso" && edad === "46") {
    rutina = `
        <h3>Rutina para ganar masa muscular (46-mas años, Lunes a Viernes)</h3>
        <ul>
            <li><strong>Lunes (Piernas):</strong>
                <ul>
                    <li>Sentadillas con barra con peso ligero: 4 series de 12-15 repeticiones.</li>
                    <img src="img/sentadillaconpeso.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Elevaciones de talones en máquina o con peso corporal: 4 series de 20 repeticiones</li>
                    <img src="img/talones.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Zancadas con mancuernas: 3 series de 15 pasos por pierna</li>
                    <img src="img/zcaminando.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Martes (Brazos):</strong>
                <ul>
                    <li>Curl curl barra recta: 4 series de 10-12 repeticiones</li>
                    <img src="img/Curlbiceps.png alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Curl concentrado con mancuerna: 3 series de 15 repeticiones</li>
                    <img src="img/curlconcentrado.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Fondos para triceps en banco: 4 series de 8 repeticiones</li>
                    <img src="img/triceps.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Miércoles (Pecho):</strong>
                <ul>
                    <li>Press de banca: 4 series de 8 repeticiones</li>
                    <img src="img/press.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Press inclinado con mancuernas: 3 series de 10 repeticiones</li>
                    <img src="img/inclinado.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Flexiones de pecho: 4 series al fallo muscular</li>
                    <img src="img/aperturas.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Fondos en paralelas: 3 series de 8 repeticiones</li>
                    <img src="img/flexiones.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Jueves (Espalda):</strong>
                <ul>
                    <li>Superman (extensiones lumbares): 4 series de 20 repeticiones </li>
                    <img src="img/superman.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Remo con barra:   3 series de 12-15 repeticiones</li>
                    <img src="img/espalda.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Jalón al pecho en polea: 4 series de 10 repeticiones</li>
                    <img src="img/jalon.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Remo con mancuerna a una mano: 3 series de 10 repeticiones por lado</li>
                    <img src="img/Remos.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
            <li><strong>Viernes (Hombros y Core):</strong>
                <ul>
                    <li>Press militar: 4 series de 10 repeticiones</li>
                    <img src="img/militar.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Elevaciones laterales: 3 series de 15 repeticiones</li>
                    <img src="img/elevaciones.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Elevaciones frontales: 3 series de 12 repeticiones</li>
                    <img src="img/frontaless.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Plancha con peso: 4 series de 30 segundos</li>
                    <img src="img/planchapeso.jpg" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Ab wheel rollout: 3 series de 12 repeticiones</li>
                    <img src="img/ab.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                    <li>Russian twists: 3 series de 20 repeticiones</li>
                    <img src="img/rusian.gif" alt="gif de puente gluteos" style="width:200px; height:auto;">
                </ul>
            </li>
        </ul>
    `;
}

// Muestra la rutina generada
document.getElementById("resultadoRutinas").innerHTML = rutina;

}
