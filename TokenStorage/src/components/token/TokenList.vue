<template>
  <div>
    <br>
    <b-row>
      <b-col md="12">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
            <tr>
              <th>Название домена</th>
              <th>Токен</th>
              <th>Организация</th>
              <th>Возможное действие</th>
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
      title="Подтвердите действие"
      @ok="onDeleteConfirm"
      @hide="onDeleteModalHide">
      <p class="my-4">Вы точно хотите удалить данный токен для организации {{selectedOrganization}}?</p>
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
      this.alertModalTitle = 'Успешно'
      this.alertModalContent = 'Токен удален'
      this.$refs.alertModal.show()
    }
  }
}
</script>

<style scoped>

</style>
