# Proyecto Pokédex

## Descripción General

Este repositorio contiene un proyecto de Pokédex dividido en tres partes: un proyecto principal llamado **host** y dos microfrontends: **pokemon-list** y **pokemon-details**. Utiliza [Vite](https://vite.dev/) para la creación rápida de los entornos de desarrollo y [React](https://es.react.dev/) para la interfaz de usuario. La aplicación consume datos de la API pública de [PokéAPI](https://pokeapi.co/) y organiza la interfaz utilizando arquitectura de microfrontends.

### Estructura del Repositorio

La estructura de este proyecto presenta una fusión entre MVC y Feactures. Esto permitirá tener una organización clara y directa según las funcionalidades implementadas así como también poder mantener y escalar de manera más fácil en el futuro.

- **host**: Proyecto principal que actúa como host para los microfrontends.
- **pokemon-list**: Microfrontend que muestra una lista de los primeros 20 Pokémon.
- **pokemon-details**: Microfrontend que muestra los detalles del Pokémon seleccionado.

## Instalación y Ejecución

Cada subproyecto puede ser ejecutado de manera independiente.

### Clonar el Repositorio

Clona este repositorio

1. Vía HTTPS:

   ```sh
   git clone https://github.com/esdrasMH/pokedex.git
   ```

2. Vía SSH:

   ```sh
   git clone git@github.com:esdrasMH/pokedex.git
   ```

### Instalación

#### 1. Microfrontend de Lista de Pokémon

1. Navega al directorio del proyecto **pokemon-list**

   ```sh
   cd pokemon-list
   ```

2. Instala las dependencias

   ```sh
   npm install
   ```

3. Ejecuta el proyecto en modo vista previa de producción

   ```sh
   npm run start
   ```

#### 2. Microfrontend de Detalles de Pokémon

1. Navega al directorio del proyecto **pokemon-details**

   ```sh
   cd pokemon-details
   ```

2. Instala las dependencias

   ```sh
   npm install
   ```

3. Ejecuta el proyecto en modo vista previa de producción

   ```sh
   npm run start
   ```

#### 3. Host

1. Navega al directorio del proyecto **host**

   ```sh
   cd host
   ```

2. Instala las dependencias

   ```sh
   npm install
   ```

3. Ejecuta el proyecto en modo desarrollo

   ```sh
   npm run dev
   ```

4. Visita en el navegador

   ```sh
   http://localhost:5002
   ```

### Notas

- El **host** actúa como punto de entrada para la aplicación y utiliza los microfrontends como módulos remotos.
- Cada microfrontend debe estar ejecutándose para que la integración con el host funcione correctamente.
- Asegúrate de que los tres proyectos están corriendo en puertos diferentes.
