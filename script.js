// ophalen van de movieDisplay
const movieDisplay = document.querySelector('#movieDisplay')


// opstellen externe link/afbeelding van de moviedatabase

const addMoviesToDom  = (movies) =>{
    let movieListCreation = movies.map ((movie)=>{
  
    let movieDisplayItem = document.createElement("li")
    movieDisplayItem.classList.add('movieLaunch')

    let movieDisplayImage = document.createElement("img")
    movieDisplayImage.setAttribute('src', movie.Poster)

    let movieDisplayLink = document.createElement("a")
    let linkUrl = 'https://www.imdb.com/title/'
    movieDisplayLink.setAttribute('href', linkUrl + movie.imdbID)
    movieDisplayLink.setAttribute('target', '_blank')
    

movieDisplayItem.appendChild(movieDisplayLink).appendChild(movieDisplayImage)
return movieDisplayItem
  })

movieListCreation.forEach((movie)=>{
    movieDisplay.appendChild(movie)
})
   
}
addMoviesToDom(movies)


//  opmaak meerdere eventlisteners tbv segmenten
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event


const movieChoosers = document.getElementsByName('movieChooser')
const addEventListeners= () => {
    movieChoosers.forEach((movieChooser)=> {
        movieChooser.addEventListener("change", (event)=> {
            handleOnChangeEvent(event)
        })
    })
}
addEventListeners()


// switch statement voor de segmenten

let handleOnChangeEvent = (event) =>{
    let selection = event.target.value;
    switch(selection) {
      case "allmovies":
           addMoviesToDom(allMovies())
            break;  
        case "newestMovies":
            addMoviesToDom(newestMovies())
             break;
        case "avengers":
            addMoviesToDom (movieFilter("avengers"))
            break;
        case "x-men":
            addMoviesToDom(movieFilter("x-men"))
            break;
        case "princess":
            addMoviesToDom (movieFilter("princess"))
            break;
        case "batman":
            addMoviesToDom ( movieFilter("batman"))
            break;
            default:
            break;
    }
}


// displayselectie van alle films, voor de radiobutton "Alle Films"
const allMovies = () =>{
    const movieFilterList = movies
    movieDisplay.innerHTML = " "
    addMoviesToDom(movieFilterList)
}


// displayselectie van nieuwste films
const newestMovies = () => {
    const movieFilterList = movies.filter(
        (movie) => {
            let movieYear = parseInt(movie.Year)
            return movieYear >=2014
        })

movieDisplay.innerHTML = " "
addMoviesToDom(movieFilterList)
}

// algemene displayselectie tbv meerdere segmenten, voor radiobuttons 
const movieFilter = (segment) => {
    let movieFilterList = movies.filter((movie)=> {
        return movie.Title.toLowerCase().includes(segment)
    })

movieDisplay.innerHTML = " "
addMoviesToDom(movieFilterList)
}


// zoekselectie in database voor searchbar

const searchBar = document.querySelector("#searchBar")
searchBar.addEventListener('keyup', (event)=>{
    const searchString = event.target.value.toLowerCase()
    const filteredMovies = movies.filter( (movie) => {
        return (
            movie.Title.toLowerCase().includes(searchString)
        )
  })
 movieDisplay.innerHTML=" "
 addMoviesToDom(filteredMovies)
})



