<template>
  <div>
    <br>
    <b-row>
      <b-col md="12">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
            <tr>
              <th>ID</th>
              <th>Domain name</th>
              <th>Token</th>
              <th>Organization</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <token-list-row
              v-for="token in tokens"
              :key="token.id"
              :token="token"
              @delete="deleteToken(token)"/>
            </tbody>
          </table>
        </div>
      </b-col>
    </b-row>
    <b-modal
      ref="deleteConfirmModal"
      title="Confirm your action"
      @ok="onDeleteConfirm"
      @hide="onDeleteModalHide">
      <p class="my-4">Are you sure you want to delete token from {{selectedOrganization}} organization?</p>
    </b-modal>

    <b-modal
      ref="alertModal"
      :title="alertModalTitle"
      :ok-only="true">
      <p class="my-4">{{ alertModalContent }}</p>
    </b-modal>

  </div>
</template>

<script>
import TokenListRow from './TokenListRow'
import json from '../../data.json'

export default {
  name: 'TokenList',
  components: {
    TokenListRow
  },
  data () {
    return {
      tokens: json,
      selectedOrganization: null,
      selectedToken: null,
      alertModalTitle: '',
      alertModalContent: ''
    }
  },
  created () {
  },
  methods: {
    deleteToken (token) {
      this.selectedToken = token
      this.selectedOrganization = token.organizationName
      this.$refs.deleteConfirmModal.show()
    },
    onDeleteModalHide () {
      this.selectedToken = null
    },
    onDeleteConfirm () {
      this.tokens.splice(this.tokens.indexOf(this.selectedToken), 1)
      this.alertModalTitle = 'Successfully'
      this.alertModalContent = 'Successfully deleted token'
      this.$refs.alertModal.show()
    }
  }
}
</script>

<style scoped>

</style>
