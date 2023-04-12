const people = [
    { name: "adri" },
    { name: "becky" },
    { name: "chris" },
    { name: "dillon" },
    { name: "evan" },
    { name: "frank" },
    { name: "georgette" },
    { name: "hugh" },
    { name: "igor" },
    { name: "jacoby" },
    { name: "kristina" },
    { name: "lemony" },
    { name: "matilda" },
    { name: "nile" },
    { name: "ophelia" },
    { name: "patrick" },
    { name: "quincy" },
    { name: "roslyn" },
    { name: "solene" },
    { name: "timothy" },
    { name: "uff" },
    { name: "violet" },
    { name: "wyatt" },
    { name: "xavier" },
    { name: "yadri" },
    { name: "zack" }
  ];
  
  const searchBar = document.querySelector("input");
  const ul = document.querySelector("ul");
  const clearButton = document.getElementById('clear')
  
  //---------- RENDER NAMES TO PAGE
  function renderNamesToPage(results) {
    for(let i = 0; i < results.length; i++){
    let listItem = document.createElement('li');
    listItem.classList.add('result-item')
    listItem.textContent = results[i].name
    ul.appendChild(listItem)
    }
  }
  renderNamesToPage(people);
  
  //---------- SEARCH DATASET FOR SPECIFIC NAME
  function searchNames(event) {
    console.log(event.target)
    let searchQuery = event.target.value.toLowerCase();

    const searchedName = people.filter(function(person){
        if(searchQuery){
            return person.name.includes(searchQuery)
        }
    })

    displaySearched(searchedName)
  }
  searchBar.addEventListener("keyup", searchNames);
  
  //---------- DISPLAY ONLY THE SPECIFIC NAME
  function displaySearched(names) {
    clearList()
    console.log('search value: ', names)

    for(let i = 0; i < renderNamesToPage.length; i++){
        let listItem = document.createElement('li')
        listItem.textContent = names[i].name
        ul.appendChild(listItem)
    }
  }

  
  //---------- CLEAR LIST BEFORE RENDERING SPECIFIC NAME
  function clearList() {
    ul.innerHTML = ""
  }
  
  //---------- CLEAR FROM WITH BUTTON
  function clearSearchForm() {
    searchBar.reset()
  }
  clearButton.addEventListener('click', clearSearchForm)