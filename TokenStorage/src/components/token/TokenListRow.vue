<template>
  <tr>
    <td>{{ token.domain }}</td>
    <td>{{ token.value }}</td>
    <td>{{ token.organizationName }}</td>
    <td>
      <b-button variant="danger" @click="onDeleteClick">Удалить</b-button>
    </td>
  </tr>
</template>
<script>
export default {
  name: 'TokenListRow',
  props: ['token'],
  methods: {
    onDeleteClick () {
      this.$emit('delete', this.token.id)
    }
  }
}
</script>
