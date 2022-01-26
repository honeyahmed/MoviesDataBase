let moviesArray=[];
let tvArray=[];
let movieCopy=[];
let recommendedMov=[];
let tvCopy=[];
let recommendedTv=[];
let finalMovies=[];
async function displayHome(){

  var res=await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=3de1f5a9debca05320c40942880b966c`);
  var movies= await res.json();
  moviesArray=movies.results;
  movieCopy=moviesArray.slice(0,4);
  recommendedMov=moviesArray.slice(5,9);
  // console.log(movieCopy);
  var res1=await fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=3de1f5a9debca05320c40942880b966c')
  var tv= await res1.json();
  tvArray=tv.results;
  tvCopy=tvArray.slice(0,4);
  recommendedTv=tvArray.slice(5,9);
  displaySlider();
  displayMovies();
  displayRecMovies();
  displaytTv();
  displayRecTv();

}
function displaySlider(){
  let randomIndexM=Math.floor(Math.random() *moviesArray.length);
  let randomIndexTv=Math.floor(Math.random() *tvArray.length);
  var catona=`  <div class="col-lg-7">
  <div class="sliderContent w-100 py-5">
    <h1 class="slider-text text-uppercase fadeInLeft animated pb-3" data-animation-in="fadeInLeft" style="opacity: 1;" id="original_title">${moviesArray[randomIndexM].original_title}</h1>
  <div class="rating d-flex align-items-center " >
    <ul class="ratting-start p-0 m-0 list-inline d-flex align-items-center justify-content-left ">
      <li class="">
      <i class="fa fa-star" aria-hidden="true"></i>
      </li>
      <li class="">
      <i class="fa fa-star" aria-hidden="true"></i>
      </li>
      <li class="">
      <i class="fa fa-star" aria-hidden="true"></i>
      </li>
      <li class="">
      <i class="fa fa-star" aria-hidden="true"></i>
      </li>
      <li>
      <i class="fa fa-star" aria-hidden="true"></i>
      </li>
    </ul>
    <span class="text-dark ms-3 " id="vote_average">${moviesArray[randomIndexM].vote_average}</span>

  </div>
  <p class="my-4 overview">${moviesArray[randomIndexM].overview}</p>
  <div class="text-primary type mt-randomIndexM ">
    <div class="d-flex">
      <p class="pe-2">Type</p><span class="text-body" id="media_type">${moviesArray[randomIndexM].media_type}</span>  
    </div>
    <div class="d-flex">
      <p class="pe-2">Date</p><span class="text-body" id="release_date">${moviesArray[randomIndexM].release_date}</span>  
    </div>
    <div class="d-flex">
      <p class="pe-2">Adult</p><span class="text-body" id="adult">${moviesArray[randomIndexM].adult='false'?'no':'yes'}</span>  

    </div>
  
  </div>

  <button class="btn playbtn mt-4"> <i class="fas fa-play pe-1"></i> PLAY NOW</button>
  


</div>
</div>
<div class="col-lg-5">
  <img src="https://image.tmdb.org/t/p/w500/${moviesArray[randomIndexM].poster_path}" alt=""  class="w-100 imageClass" style="height:550px;">
</div>`
document.getElementById("myRow1").innerHTML=catona;
var catona1=`  <div class="col-lg-7">
  <div class="sliderContent w-100 py-5">
    <h1 class="slider-text text-uppercase fadeInLeft animated pb-3" data-animation-in="fadeInLeft" style="opacity: 1;" id="original_title">${tvArray[randomIndexTv].original_name}</h1>
  <div class="rating d-flex align-items-center " >
    <ul class="ratting-start p-0 m-0 list-inline d-flex align-items-center justify-content-left ">
      <li class="">
      <i class="fa fa-star" aria-hidden="true"></i>
      </li>
      <li class="">
      <i class="fa fa-star" aria-hidden="true"></i>
      </li>
      <li class="">
      <i class="fa fa-star" aria-hidden="true"></i>
      </li>
      <li class="">
      <i class="fa fa-star" aria-hidden="true"></i>
      </li>
      <li>
      <i class="fa fa-star" aria-hidden="true"></i>
      </li>
    </ul>
    <span class="text-dark ms-3 " id="vote_average">${tvArray[randomIndexTv].vote_average}</span>

  </div>
  <p class="my-4 overview">${tvArray[randomIndexTv].overview}</p>
  <div class="text-primary type mt-0 ">
    <div class="d-flex">
      <p class="pe-2">Type</p><span class="text-body" id="media_type">${tvArray[randomIndexTv].media_type}</span>  
    </div>
    <div class="d-flex">
      <p class="pe-2">Date</p><span class="text-body" id="release_date">${tvArray[randomIndexTv].first_air_date}</span>  
    </div>
    <div class="d-flex">
      <p class="pe-2">Popularity</p><span class="text-body" id="adult">${tvArray[randomIndexTv].popularity}</span>  

    </div>
  
  </div>

  <button class="btn playbtn mt-4"> <i class="fas fa-play pe-1"></i> PLAY NOW</button>
  


</div>
</div>
<div class="col-lg-5">
  <img src="https://image.tmdb.org/t/p/w500/${tvArray[randomIndexTv].poster_path}" alt=""  class="w-100 imageClass" style="height:550px;">
</div>`
document.getElementById("myRow2").innerHTML=catona1;
}
function displayMovies(){
  let cartona=``;
  for(i=0;i<movieCopy.length;i++){
  cartona+=  `
    <div class="col-lg-3 movie-item position-relative     overflow-hidden    ">
    <img src="https://image.tmdb.org/t/p/w500/${movieCopy[i].poster_path}" alt="" class="w-100 h-100">
    <div class="block-description position-absolute ">
        <h6 class="iq-title">
           <a href="#" tabindex="0">
              ${movieCopy[i].original_title}                           </a>
        </h6>

        <div class="hover-buttons">

           <a href="#" class="btn btn-hover iq-button" tabindex="0">
              <i class="fa fa-play mr-1" aria-hidden="true"></i>

              Play Now                           </a>

        </div>
     </div>

  
</div>`
    document.getElementById("movieRow").innerHTML=cartona;
  }
}
function displayRecMovies(){
  let cartona=``;
  for(i=0;i<recommendedMov.length;i++){
  cartona+=  `
    <div class="col-lg-3 movie-item position-relative     overflow-hidden    ">
    <img src="https://image.tmdb.org/t/p/w500/${recommendedMov[i].poster_path}" alt="" class="w-100 h-100">
    <div class="block-description position-absolute ">
        <h6 class="iq-title">
           <a href="#" tabindex="0">
              ${recommendedMov[i].original_title}                           </a>
        </h6>

        <div class="hover-buttons">

           <a href="#" class="btn btn-hover iq-button" tabindex="0">
              <i class="fa fa-play mr-1" aria-hidden="true"></i>

              Play Now                           </a>

        </div>
     </div>

  
</div>`
    document.getElementById("recommended").innerHTML=cartona;
  }
}
function displaytTv(){
  let cartona=``;
  for(i=0;i<tvCopy.length;i++){
  cartona+=  `
    <div class="col-lg-3 movie-item position-relative     overflow-hidden    ">
    <img src="https://image.tmdb.org/t/p/w500/${tvCopy[i].poster_path}" alt="" class="w-100 h-100">
    <div class="block-description position-absolute ">
        <h6 class="iq-title">
           <a href="#" tabindex="0">
              ${tvCopy[i].original_name}                           </a>
        </h6>

        <div class="hover-buttons">

           <a href="#" class="btn btn-hover iq-button" tabindex="0">
              <i class="fa fa-play mr-1" aria-hidden="true"></i>

              Play Now                           </a>

        </div>
     </div>

  
</div>`
    document.getElementById("tvShows").innerHTML=cartona;
  }
}
function displayRecTv(){
  let cartona=``;
  for(i=0;i<recommendedTv.length;i++){
  cartona+=  `
    <div class="col-lg-3 movie-item position-relative     overflow-hidden    ">
    <img src="https://image.tmdb.org/t/p/w500/${recommendedTv[i].poster_path}" alt="" class="w-100 h-100">
    <div class="block-description position-absolute ">
        <h6 class="iq-title">
           <a href="#" tabindex="0">
              ${recommendedTv[i].original_name}                           </a>
        </h6>

        <div class="hover-buttons">

           <a href="#" class="btn btn-hover iq-button" tabindex="0">
              <i class="fa fa-play mr-1" aria-hidden="true"></i>

              Play Now                           </a>

        </div>
     </div>

  
</div>`
    document.getElementById("tvRecommended").innerHTML=cartona;
  }
}
displayHome();
let viewMov=document.getElementsByClassName("viewmov");
console.log(viewMov);
for(i=0;i<viewMov.length;i++){
  viewMov[i].addEventListener('click',function(){
    window.location.assign("movies.html");

  })

}

let viewtv=document.getElementsByClassName("viewtv");
for(i=0;i<viewtv.length;i++){
  viewtv[i].addEventListener('click',function(){
    window.location.assign("tv.html");

  })

}
