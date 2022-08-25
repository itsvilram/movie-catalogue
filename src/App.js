import React, { useState ,useEffect} from "react";
import MovieList from "./components/movieList";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import MovieListHeading from "./components/moviesListHeading";
import SearchBox from "./components/search";
import AddFavourite from "./components/favouritesAdd";
import RemoveFav from "./components/favouriteRemove";
import MovieHome from "./components/home";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [favourite, setFavourite] = useState([]);

   
  const requestApi= async(search)=>{

    const url=`http://www.omdbapi.com/?s=${search}&apikey=9339768a`;

    const response= await fetch(url);
    const responseJSON =await response.json();
    if(responseJSON.Search){
      setMovies(responseJSON.Search)

    }
    console.log(responseJSON);

  }


  useEffect(() => {
    const favMovie = JSON.parse(localStorage.getItem('favmovie'));
    if (favMovie) {
     setFavourite(favMovie);
    }
  }, []);

  
 useEffect(() => {
   requestApi(search);
   
   
 }, [search]);
  
 
 const addfavouriteHandle =(movie)=>{

  let found=false;

  favourite.map((mv,index)=>{
    if(mv===movie){
      found=true;
    }
  })
   if(!found){

     const tempFavourite= [...favourite, movie];
     setFavourite(tempFavourite);
     saveLocally(tempFavourite);
     console.log("adding is clicked",tempFavourite);
   }

 };


 const saveLocally =(item)=>{
   
  localStorage.setItem('favmovie',JSON.stringify(item));
  console.log("this si clicke");
 };

 const removeFav= (movie)=>{
  const newFavouriteList = favourite.filter(
    (favourite) => favourite.imdbID !== movie.imdbID
  );

  setFavourite(newFavouriteList);
  saveLocally(newFavouriteList);
 }

 const movieHandleClicked=()=>{

   console.log(" moviei is clicked");
   return(
     <h1>hello is is my</h1>
     );


 };

 



  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies"/>
        <SearchBox setSearch={setSearch}/>
      </div>
      <div className="row" >
				<MovieList
					movies={movies} favouritecomponent={AddFavourite}
          favouriteHandle={addfavouriteHandle}
          movieClickHandle={movieHandleClicked}/>
      </div>
      <MovieListHeading heading="Favourites"/>
      <div className="row" >
				<MovieList
					movies={favourite} favouritecomponent={RemoveFav}
          favouriteHandle={removeFav}/>
      </div>
					  
  </div>
  );
};

export default App;
// checking command