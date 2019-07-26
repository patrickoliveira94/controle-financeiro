<template>
  <div class="register">
    <form>
      <h1> {{ title }} </h1>

      <div v-if="errors.length">
        <ul class="errors">
          <li class="error" v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </div>

      <div class="form-group">
        <span class="form-label"> Nome </span>
        <input type="text" v-model="name">
      </div>

      <div class="form-group">
        <span class="form-label"> E-mail </span>
        <input type="email" v-model="email">
      </div>

      <div class="form-group">
        <span class="form-label"> Senha </span>
        <input type="password" v-model="password">
      </div>

      <button v-on:click="addUser"> Cadastar </button>
      <router-link to="/" tag="span" class="link">Já possui cadastro? Faça seu login!</router-link>
    </form>
  </div>
</template>

<script>
import md5 from 'js-md5'

export default {
  name: 'Register',
  data () {
    return {
      title: 'Faça seu cadastro',
      name: '',
      email: '',
      password: '',
      users: [],
      errors: []
    }
  },
  methods: {
    addUser () {
      this.checkErrors()
      if (this.errors.length === 0) {
        if (!this.userExists()) {
          this.users.push({ name: this.name, email: this.email, password: md5(this.password) })
          this.name = ''
          this.email = ''
          this.password = ''
          this.errors = []
        } else {
          this.errors.push('Usuário já cadastrado!')
        }
      }
    },
    userExists () {
      var emails = this.users.map(function (user) {
        return user.email
      })
      return emails.includes(this.email)
    },
    checkErrors () {
      this.errors = []

      if (this.name && this.validEmail(this.email) && this.password) {
        return true
      }

      if (!this.name) {
        this.errors.push('Informe seu nome!')
      }
      if (!this.validEmail(this.email)) {
        this.errors.push('Informe um e-mail válido!')
      }
      if (!this.password) {
        this.errors.push('Informe uma senha!')
      }
    },
    validEmail: function (email) {
      // eslint-disable-next-line
      var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(email)
    }
  },
  mounted () {
    if (localStorage.getItem('users')) this.users = JSON.parse(localStorage.getItem('users'))
  },
  watch: {
    users: {
      handler () {
        localStorage.setItem('users', JSON.stringify(this.users))
      },
      deep: true
    }
  }
}
</script>

<style lang="sass" scoped>
  .register
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
      margin: 20px 0 8px
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
