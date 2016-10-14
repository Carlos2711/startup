class Movie{

  let tittle;
  let year;
  let duration;

  Movie(title: ntitle, year: nyear, duration: nduration){
    Movie.tittle = ntitle;
    Movie.year = nyear ;
    Movie.duration = nduration ;
    getTitle(){
      return Movie.tittle;
    }
    getYear(){
      return Movie.year;
    }
    getDuration(){
      return Movie.duration;
    }
  }

  function play(){
     //undefined now
  }

  function pause(){
      //undefined now
  }

  function resume(){
      //undefined now
  }
}
