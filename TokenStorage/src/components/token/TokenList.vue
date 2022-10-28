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
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <token-list-row
              v-for="token in tokens"
              :key="token.id"
              :token="token"
              @delete="deleteToken"/>
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
      <p class="my-4">Are you sure you want to delete this token {{
          selectedTokenId
        }}?</p>
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
      selectedTokenId: null,
      alertModalTitle: '',
      alertModalContent: ''
    }
  },
  created () {
  },
  methods: {
    deleteToken (tokenId) {
      this.selectedTokenId = tokenId
      this.$refs.deleteConfirmModal.show(tokenId)
    },
    onDeleteModalHide () {
      this.selectedTokenId = null
    },
    onDeleteConfirm () {
      // запросить у сервера список пользователей
      this.alertModalTitle = 'Successfully'
      this.alertModalContent = 'Successfully deleted token'
      this.$refs.alertModal.show()
    }
  }
}
</script>

<style scoped>

</style>
