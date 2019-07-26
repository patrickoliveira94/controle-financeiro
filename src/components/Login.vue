<template>
  <div class="login">
    <form @submit.prevent="login()">
      <h1> {{ title }} </h1>

      <div v-if="errors.length">
        <ul class="errors">
          <li class="error" v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </div>

      <div class="form-group">
        <span class="form-label"> E-mail </span>
        <input type="email" v-model="email">
      </div>

      <div class="form-group">
        <span class="form-label"> Senha </span>
        <input type="password" v-model="password">
      </div>

      <button type="submit"> Entrar </button>
    </form>

    <router-link to="/register" tag="span" class="link">Ainda não possui cadastro? Faça já o seu!</router-link>
  </div>
</template>

<script>
import md5 from 'js-md5'

export default {
  name: 'Login',
  data () {
    return {
      title: 'Faça seu login',
      email: '',
      password: '',
      users: [],
      errors: []
    }
  },
  methods: {
    login () {
      var vm = this
      var success = false
      this.errors = []

      this.users.forEach(function (user) {
        if (user.email === vm.email && user.password === md5(vm.password)) {
          success = true
        }
      })

      if (success) {
        sessionStorage.setItem('auth', md5(this.email))
        vm.$router.push({ path: 'home' })
      } else {
        this.errors.push('E-mail ou senha inválido!')
      }
    }
  },
  mounted () {
    if (localStorage.getItem('users')) this.users = JSON.parse(localStorage.getItem('users'))
  }
}
</script>

<style lang="sass" scoped>
  .login
    margin: 50px auto
    padding: 20px
    max-width: 350px
    background-color: #111417
    border: 1px solid white
    border-radius: 20px

    h1
      font-size: 1.25em

    form
      display: flex
      flex-direction: column
      text-align: center

      .form-group
        display: flex
        justify-content: center
        flex-direction: column
        margin: 10px 0

        input
          border-radius: 20px
          border: 1px solid gray
          padding: 5px
          outline: none

    button
      background-color: #69adff
      color: white
      border-radius: 20px
      border: none
      padding: 10px
      margin: 20px 0 10px
      outline: none
      cursor: pointer

    .link
      cursor: pointer

    .errors
      list-style-type: none
      padding: 0

      .error
        color: #e06666
</style>
