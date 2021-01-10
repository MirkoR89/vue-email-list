let app = new Vue ({
  el: '#app',
  data: {
    emailContacts: [],
  },
  mounted(){
    for (let i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(resp => {
        console.log(resp.data.response);
        this.emailContacts.push(resp.data.response)
      })
    }
  }
});
