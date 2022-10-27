<template>
  <tr>
    <td>{{ token.id }}</td>
    <td>{{ token.domain }}</td>
    <td>{{ token.value }}</td>
    <td>
      <button>Delete</button>
    </td>
  </tr>
</template>
<script>
export default {
  name: 'TokenListRow',
  props: ['token']
}
</script>
