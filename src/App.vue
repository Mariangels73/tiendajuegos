<template>
  <div id="app">
    <h1>Tienda de Juegos 32 Bits</h1>
    <h2>Lista de juegos</h2>
    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(juego, index) in juegos"
          :key="juego.codigo"
        >
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>${{ Number(juego.precio).toLocaleString() }}</td>
          <td>
            <button @click="incrementar(juego.codigo)">+</button>
            <button @click="decrementar(juego.codigo)">-</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['juegos'])
  },
  methods: {
    ...mapActions(['incrementarStock', 'decrementarStock']),
    incrementar(codigo) {
      this.incrementarStock(codigo);
    },
    decrementar(codigo) {
      this.decrementarStock(codigo);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

table {
  margin: 0 auto;
  width: 80%; /* Ajusta el ancho de la tabla según sea necesario */
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 2px 0px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
