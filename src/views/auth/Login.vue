<template>
  
  <div class="logo">
    <img src="@/assets/logo.svg" alt="logo" width="250">
  </div>

  <div class="input_control email">
    <label for="usernameInput">Email</label>
    <input id="usernameInput" type="text" placeholder="Username" v-model="email">
  </div>

  <div class="input_control password">
    <label for="passwordInput">Password</label>
    <input id="passwordInput" type="password" placeholder="Password" v-model="password">
  </div>

  <button class="submit_btn" @click="signIn">Login</button>
  <p class="password_reset">Forgot your password?</p>

</template>

<script>
import titleMixin from '@/mixins/titleMixin'
export default {
  mixins: [titleMixin],
  title: 'Login to recordMania',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    async signIn() {
      const { auth } = await import('@/firebase')

      auth.signInWithEmailAndPassword(this.email, this.password)
        .then(userCredentials => {
          console.log(userCredentials)
          this.$store.dispatch('setUser', { user: userCredentials.user })
          this.$router.push(this.$route.query.redirect)
          this.$snackbar.show('Bravo!  You have successful signed in to your account.')
        })
        .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') { alert('Wrong password.'); }
        else { alert(errorMessage); }
        console.log(error);
      });
    }
  }
}
</script>

<style lang="scss">
.logo { grid-area: logo; align-self: center; justify-self: center; }
.input_control {
  display: flex;
  flex-direction: column;

  &.email { grid-area: email; }
  &.password { grid-area: password; }

  label { margin-left: 4px; margin-bottom: 4px; }
  input {
    font-size: 1.2em;
    padding: 8px;
    border: none;
  }
}
.submit_btn {
  grid-area: submit;
  font-size: 1.1em;
  justify-self: end;
  border: none;
  padding: 8px 12px;
}
.password_reset {
  grid-area: password_reset;
  align-self: end;
  margin: 0;
}
</style>