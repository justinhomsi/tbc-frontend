<template>
  <v-container fluid>
    <v-row align="center" justify="start">
      <v-simple-table dark dense style="width: 300px; text-align: center">
        <thead>
          <tr style="background-color: blue">Blizzard Tracker</tr>
        </thead>
        <tbody>
          <tr>
            <td>Link to Item</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-row>
  </v-container>
</template>

<script>
const axios = require('axios');
export default {
  name: 'Home',
}
</script>
