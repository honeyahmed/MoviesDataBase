

let tvArray=[];

async function getAllTv(){
    var res=await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=3de1f5a9debca05320c40942880b966c`);
    var shows= await res.json();
    tvArray=shows.results;
    console.log(tvArray);
  
    displayIntv();
  
  }
  
function displayIntv(){
  let cartona=``;
  for(i=0;i<tvArray.length;i++){
    cartona+=` <div class="col-lg-3 movie-part     overflow-hidden  text-center  position-relative">
    <img src="https://image.tmdb.org/t/p/w500/${tvArray[i].poster_path}" alt="" class="w-100 h-75">
    
        <p class="movTitle">${tvArray[i].original_name}</p>
                    
        <div class="hover-buttons position-absolute btnPlay">

        <a href="#" class="btn btn-hover iq-button" tabindex="0">
           <i class="fa fa-play mr-1" aria-hidden="true"></i>

           Play Now                           </a>

     </div>

    </div>`

  }
  document.getElementById("tvshowSection").innerHTML=cartona;
}
getAllTv();


