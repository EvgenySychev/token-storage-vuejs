<template>
<div>
  <table class="table table-striped">
    <thead>
    <tr>
      <th>Token</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Token</td>
      <td>
        <b-button variant="success" @click="onAddClick">ADD</b-button>
      </td>
    </tr>
    </tbody>
  </table>

  <b-modal
    ref="alertModal"
    :title="alertModalTitle"
    :ok-only="true">
    <p class="my-4">{{ alertModalContent }}</p>
  </b-modal>
</div>

</template>

<script>

export default {
  name: 'AddTokenPage',
  data () {
    return {
      alertModalTitle: '',
      alertModalContent: ''
    }
  },
  methods: {
    onAddClick () {
      this.alertModalTitle = 'Successfully'
      this.alertModalContent = 'Successfully added token'
      this.$refs.alertModal.show()
    }
  }
}

</script>

<style scoped>

</style>
