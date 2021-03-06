// Esercizio:
// Attraverso una chiamata ajax all’API di boolean
// https://flynn.boolean.careers/exercises/api/array/music
// avremo a disposizione una decina di dischi musicali.
// Utilizzando vue, stampiamo a schermo una card per ogni album.
// BONUS: Creare una select con tutti i generi dei dischi. In base a
// cosa scegliamo nella select, vedremo i corrispondenti cd.
// BONUS 2: Ordinare i dischi per anno di uscita.


var app = new Vue({
  el:'#root',
  data: {
    discs: [],
    genres: [],
      valueGenre: '',
  },
  methods:{

  },
  mounted: function(){
    var self = this;

    axios
    .get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(function(result){
      self.discs = result.data.response;
      console.log(self.discs);

      selff.discs.sort( function (disc1, disc2){
        return parseInt(disc1.year) - parseInt(disc2.year);
      });
      
     });

    self.discs.forEach(
    (element) => {
      if (!self.genres.includes(element.genre))
      self.genres.push(element.genre);
      }
    );
  }
});
