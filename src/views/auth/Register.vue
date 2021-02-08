<template>
  
  <div class="input_control email">
    <label for="usernameInput">Email</label>
    <input id="usernameInput" type="text" placeholder="Username" v-model="email">
  </div>

  <div class="input_control password">
    <label for="passwordInput">Password</label>
    <input id="passwordInput" type="password" placeholder="Password" v-model="password">
  </div>

  <button class="submit_btn" @click="signUp">Register</button>
  <p class="password_reset">...</p>

</template>

<script>
import titleMixin from '@/mixins/titleMixin'
export default {
  mixins: [titleMixin],
  title: 'Register to recordMania',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    async signUp() {
      const { auth, db, firebase } = await import('@/firebase')
      const credentials = firebase.auth.EmailAuthProvider.credential(this.email, this.password)

      auth.currentUser.linkWithCredential(credentials)
        .then(async (userCredentials) => {
          console.log('Password linked')
          console.log(userCredentials)

          const { user: {
            email, 
            displayName, 
            sendEmailVerification, 
            emailVerified, 
            uid, 
            photoURL
          }} = userCredentials

          // create a new document... 
          const userData = {
            email: email,
            displayName: displayName || '',
            photoURL: photoURL || '',
            emailVerified
          }

          await db.collection('users')
              .doc(uid)
              .set(userData)

          const url = new URL(`${location.protocol}//${location.host}`)
          url.pathname = `profile/${uid}`
          if(location.port) url.port = location.port
          sendEmailVerification({ url })


          // redirect to home page...
          this.$router.push('/')

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