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
              @click.native="onTokenClicked(token.id)"/>
            </tbody>
          </table>
        </div>
      </b-col>
    </b-row>
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
      ]
    }
  },
  created () {
  },
  methods: {
    onTokenClicked (tokenId) {
      console.log(tokenId)
    }
  }
}
</script>

<style scoped>

</style>
