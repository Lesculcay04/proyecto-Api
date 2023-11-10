interface Character {
    id: number;
    nombre: string;
    direccion: string;
    telefono: number;
    // Asegúrate de que esta interfaz coincida con la estructura de datos real
  }
  
  const url = "http://localhost:8081/cliente"; // Añade "http://" antes de "localhost"
  
  async function fetchCharacters() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error al obtener datos: ${response.statusText}`);
      }
      const data = await response.json();
      displayCharacters(data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  }
  
  function displayCharacters(characters: Character[]) {
    const container = document.getElementById('characters-container');
    if (container) {
      container.innerHTML = ""; // Limpia el contenedor antes de agregar nuevos elementos
      characters.forEach(character => {
        container.innerHTML += `
          <div class="character-card">
            <h2>ID: ${character.id}</h2>
            <p>Nombre: ${character.nombre}</p>
            <p>Dirección: ${character.direccion}</p>
            <p>Teléfono: ${character.telefono}</p>
          </div>
        `;
      });
    }
  }
  
  fetchCharacters();
  