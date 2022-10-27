<template>
  <div>
    <br>
    <b-row>
      <b-col md="12">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
            <tr>
              <th>Domain name</th>
              <th>Token</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr
              v-for="token in tokens"
              :key="token.id">
              <td>{{ token.domain }}</td>
              <td>{{ token.value }}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'TokenList',
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
  }
}
</script>

<style scoped>

</style>
