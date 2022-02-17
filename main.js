var app = new Vue({
  el: "#app",
  data: {
    albumArr = []
  },
  methods: {
   getAlbum() {
    axios.get('http://localhost/api.php')
    .then((response) => {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
   }
  }
});
