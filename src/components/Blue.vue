<template>
  <div>test</div>
</template>

<script>
const axios = require('axios');

axios.get('http://localhost:3000/blue')
  .then(response => {
    console.log(response.data.rows)
  });

</script>