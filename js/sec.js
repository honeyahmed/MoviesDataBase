

let moviesArray=[];

async function getAllMovies(){
    var res=await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=3de1f5a9debca05320c40942880b966c`);
    var movies= await res.json();
    moviesArray=movies.results;
    console.log(moviesArray);
  
    displayInMovies();
  
  }
  
function displayInMovies(){
  let cartona=``;
  for(i=0;i<moviesArray.length;i++){
    cartona+=` <div class="col-lg-3 movie-part     overflow-hidden  text-center  position-relative">
    <img src="https://image.tmdb.org/t/p/w500/${moviesArray[i].poster_path}" alt="" class="w-100 h-75">
    
        <p class="movTitle">${moviesArray[i].original_title}</p>
                    
        <div class="hover-buttons position-absolute btnPlay">

        <a href="#" class="btn btn-hover iq-button" tabindex="0">
           <i class="fa fa-play mr-1" aria-hidden="true"></i>

           Play Now                           </a>

     </div>

    </div>`

  }
  document.getElementById("movSection").innerHTML=cartona;
}
getAllMovies();


