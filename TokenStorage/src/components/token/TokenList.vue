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
      @hide="onDeleteModalHide">
      <p class="my-4">Are you sure you want to delete this owner?</p>
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

export default {
  name: 'TokenList',
  components: {
    TokenListRow
  },
  data () {
    return {
      tokens: [
        {
          id: '1',
          domain: 'https://tra-ta-ta1.ru',
          value: '1234-4567-8901'
        },
        {
          id: '2',
          domain: 'https://tra-ta-ta2.ru',
          value: '1234-4567-8902'
        },
        {
          id: '3',
          domain: 'https://tra-ta-ta3.ru',
          value: '1234-4567-8903'
        },
        {
          id: '4',
          domain: 'https://tra-ta-ta4.ru',
          value: '1234-4567-8904'
        }
      ],
      selectedTokenId: null,
      alertModalTitle: '',
      alertModalContent: ''
    }
  },
  created () {
  },
  methods: {
    onTokenClicked (tokenId) {
      console.log(tokenId)
    }
  },
  deleteToken (tokenId) {
    this.selectedTokenId = tokenId
    this.$refs.deleteConfirmModal.show()
  },
  onDeleteModalHide () {
    this.selectedTokenId = null
  }
}
</script>

<style scoped>

</style>
