<template>
    <v-simple-table dark dense class="notesTable">
      <tbody>
        <tr>
        <td
          v-for="(item, index) in data"
          :key="index"
          dark
          dense
          :to="item.link"
          style="text-align: center; font-size: 18px"
        >
      <template>
        <router-link :to="item.link">{{ item.title }}</router-link>
      </template>
        <v-col style="font-size: 15px">Released (US):<br /> {{ item.release }}</v-col>
    </td>
        </tr>
      </tbody>
    </v-simple-table>
</template>

<script>
export default {
  props: {
    data: {}
  }
}
</script>
