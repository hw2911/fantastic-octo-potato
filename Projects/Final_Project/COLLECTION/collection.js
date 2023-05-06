
const script = [
    {
       name:"《90后才不会变老呢》",
       theme: "joy",
       player: "6", 
       duration: "4",
       Image:'images/90后.jpg',
    },
]




const ul = document.querySelector("ul");

function renderScriptsToPage(results) {
  // iterate over data set
  for(let i = 0; i < results.length; i++){
    // create the list item
    let listItem = document.createElement('li');
    // add a class to each item of the results
    listItem.classList.add('script', results[i].theme) // red
    // add flower name
    let title = document.createElement('h3')
    title.textContent = results[i].name // Rose
    // add flower color
    let theme = document.createElement('p')
    theme.classList.add(results[i].theme)
    theme.textContent = results[i].theme

    // add flower image
    let image = document.createElement('img')
    image.setAttribute('src', results[i].image)

    ul.appendChild(listItem)
    listItem.appendChild(title)
    listItem.appendChild(image)

  }
}
renderScriptsToPage(script);

//---------- FILTER FLOWERS BY COLOR

let filterBtns = document.querySelector(".filter_text");
let scripts = document.querySelectorAll(".script");

function filterFn(event) {
  console.log(event.target)
  if(event.target.classList.contains('filter-btn')){
    // select the current active button
    let activeBtn = filterBtns.querySelector('.active')
    activeBtn.classList.remove('active')

    // apply the active class to the target
    event.target.classList.add('active')

    const filterValue = event.target.getAttribute('data-filter') // yellow | red

    for(let i = 0; i < cards.length; i++){
      if(cards[i].classList.contains(filterValue) || filterValue === 'all'){
        cards[i].classList.remove('hide')
        cards[i].classList.add('show')
      } else {
        cards[i].classList.remove('show')
        cards[i].classList.add('hide')
      }

    }
  }
}
filterBtns.addEventListener("click", filterFn);