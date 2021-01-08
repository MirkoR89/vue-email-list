let app = new Vue ({
  el: '#app',
  data: {
    emailContacts: [
      {
        name: 'Mirko',
        email: ''
      },
      {
        name: 'Greta',
        email: ''
      },
      {
        name: 'Franco',
        email: ''
      },
      {
        name: 'Giulio',
        email: ''
      }
    ]
  },
  mounted(){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(resp => {
      console.log(resp.data.response);
      let apiEmail = resp.data.response;
      this.email.email = apiEmail;
      console.log(this.emailContacts.email);
    })
  }
});
