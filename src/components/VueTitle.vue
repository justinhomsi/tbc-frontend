<script>
export default {
  name: 'VueTitle',
  props: ['title'],
  watch: {
    title: {
      immediate: true,
      handler() {
        document.title = this.title
      }
    }
  },
  render () {
    return {}
  },
}
</script>