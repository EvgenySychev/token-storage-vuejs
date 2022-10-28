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
      <td>
        <input v-model="newDomain" type="text" >
      </td>
      <td>
        <b-button variant="success" @click="onAddClick()">ADD</b-button>
      </td>
    </tr>
    </tbody>
  </table>

  <b-modal
    ref="alertModal"
    :title="alertModalTitle"
    :ok-only="true"
    @ok="onRedirectTokenList">
    <p class="my-4">{{ alertModalContent }}</p>
  </b-modal>
</div>

</template>

<script>

import json from '../../data.json'
import { uuid } from 'vue-uuid'

export default {
  name: 'AddTokenPage',
  data () {
    return {
      newDomain: 'https://',
      tokens: json,
      newId: null,
      newToken: null,
      newJson: null,
      alertModalTitle: '',
      alertModalContent: ''
    }
  },
  methods: {
    onAddClick () {
      this.alertModalTitle = 'Successfully'
      this.alertModalContent = 'Successfully added token'
      this.$refs.alertModal.show()
    },
    onRedirectTokenList () {
      // запросить у сервера список пользователей
      this.newId = this._uid
      this.newToken = uuid.v1()
      this.newJson = JSON.stringify(this.tokens.push({id: this.newId, value: this.newToken, domain: this.newDomain, organizationName: 'New'}))
      this.$router.push({ name: 'TokenList' })
    }
  }
}

</script>

<style scoped>

</style>
