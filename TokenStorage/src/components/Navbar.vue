<template>
  <b-navbar
    toggleable="md"
    type="dark"
    variant="info">
    <b-navbar-nav>
      <b-nav-item :to="{ name: 'TokenList' }">Tokens</b-nav-item>
      <b-nav-item :to="{ name: 'AddTokenPage' }">Add Token</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
export default {
  name: 'Navbar'
}
</script>
