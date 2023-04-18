//Funcion para buscar digimon por nombre
const BuscarPorNombre = () => {

    let nombreParaConsultar = document.getElementById('nombreProporcionado').value;
    
    let endpoint = 'https://digimon-api.vercel.app/api/digimon/name/' + nombreParaConsultar;

    fetch(endpoint)
    .then(response => response.json() )
    .then(data => {

        let nombreD = data[0].name;
        let levelD = data[0].level;
        let imagenD = data[0].img;

        let ParrafoNombre = document.getElementById('nombre');
        ParrafoNombre.innerHTML = '<b>Nombre: </b>' + nombreD;

        let ParrafoNivel = document.getElementById('nivel');
        ParrafoNivel.innerHTML = '<b>Nivel: </b>' + levelD;

        let ImagenDigimon = document.getElementById('imagen');
        ImagenDigimon.src = imagenD;

     })
}

//Funcion para mostrar listado de digimon y a la vez observar uno especifico
const lista = document.getElementById('SelectNombres');

      // Obtener los datos de la API
      fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response => response.json())
        .then(data => {
          // Agregar cada Digimon al select
          data.forEach(digimon => {
            const option = document.createElement('option');
            option.value = digimon.name;
            option.textContent = digimon.name;
            lista.appendChild(option);
          });

          // Mostrar los datos del Digimon seleccionado en la card
          lista.addEventListener('change', () => {
            const DigimonSeleccionado = data.find(digimon => digimon.name === lista.value);

            const ParrafoNombre = document.getElementById('nombre');
            ParrafoNombre.innerHTML = '<b>Nombre: </b>' + DigimonSeleccionado.name;

            const ParrafoNivel = document.getElementById('nivel');
            ParrafoNivel.innerHTML = '<b>Nivel: </b>' + DigimonSeleccionado.level;

            const ImagenDigimon = document.getElementById('imagen');
            ImagenDigimon.src = DigimonSeleccionado.img;

          });
});






