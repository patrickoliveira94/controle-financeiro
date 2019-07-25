<template>
  <div class="login">
    <form>
      <h1> {{ title }} </h1>

      <div class="form-group">
        <span class="form-label"> E-mail </span>
        <input type="text">
      </div>

      <div class="form-group">
        <span class="form-label"> Senha </span>
        <input type="password">
      </div>

      <button type="submit"> Entrar </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      title: 'Login'
    }
  }
}
</script>

<style lang="sass" scoped>
  .login
    margin: 50px auto
    padding: 20px
    max-width: 500px
    background-color: #111417
    border: 1px solid white
    border-radius: 20px

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
      margin-top: 20px
      outline: none
      cursor: pointer
</style>
