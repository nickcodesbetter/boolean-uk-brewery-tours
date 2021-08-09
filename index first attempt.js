let state = {
  selectStateInput: "",
  breweries: [],
  cities: [],
  filters: {
    type: "",
    city: [],
    search: ""
  }
};

// ran-through with Bruce
// create variable which links to the 






// Description
// In this exercise we explore a common scenario in eCommerce and booking sites, using filters and search to modify what we render from the state.

// Deliverables
// - A user can enter a US state and view a list of breweries in that state
//     - The list has a maximum of 10 breweries on display
//     - The list has three types of breweries that offer brewery tours:
//         - Micro
//         - Regional
//         - Brewpub
//     - Do not show the other types of breweries
// - From the list of breweries, a user can view the following details about each brewery:
//     - Name
//     - Type of brewery
//     - Address
//     - Phone Number
// - From the list of breweries, a user can visit the website of a brewery
// - From the 'filter by type of brewery' section, a user can filter by type of brewery
// - From the 'filter by city' section, a user can filter by city, the location of the brewery
// - From the 'filter by city' section, a user can clear all filters
// - From the 'search' section, a user can search for breweries by:
//     - Name
//     - City

// Instructions
// - Download the files from https://codesandbox.io/s/js-exercise-brewery-tour-starter-template-whq5i?file=/templates/main-section.html
// - Read the "Open Brewery DB" documentation: https://www.openbrewerydb.org/documentation/01-listbreweries
// - Think about which request type to use
// - Create a state object
// - Create a fetch function to get data
// - Create action functions that update state
// - Create render functions that read from state
// Tips
// - Start with the logic first, use console.log(state) to check your logic is working; when the logic is working as expected move onto styling
// - Use a cleanData function to modify the data in the fetch request before adding it to state
// - Use an extractCitiesData function to extract the cities from the data in the fetch request and add it to state for the 'filter by city' section
// - For filter by type use a select element to capture user input
// - For filter by city use a list of checkbox elements to capture user input

/* <aside class="filters-section">
  <h2>Filter By:</h2>
  <form id="filter-by-type-form" autocompete="off">
    <label for="filter-by-type"><h3>Type of Brewery</h3></label>
    <select name="filter-by-type" id="filter-by-type">
      <option value="">Select a type...</option>
      <option value="micro">Micro</option>
      <option value="regional">Regional</option>
      <option value="brewpub">Brewpub</option>
    </select>
  </form>
  <div class="filter-by-city-heading">
    <h3>Cities</h3>
    <button class="clear-all-btn">clear all</button>
  </div>
  <form id="filter-by-city-form">
    <input type="checkbox" name="chardon" value="chardon" /><label for="chardon"
      >Chardon</label
    ><input type="checkbox" name="cincinnati" value="cincinnati" /><label
      for="cincinnati"
      >Cincinnati</label
    >
    // More checkboxes
  </form>
</aside> */

// PLAN
// do renders first
// side - simple funciton - aside & 2 functions  within it
// first is side function
// second is type of brewery list
// third is cities list

const selectStateForm = document.querySelector("#select-state-form");
console.log(selectStateForm);

function listenToSelectStateForm () {
    selectStateForm.addEventListener("submit", (event) => {
      event.preventDefault()
      const input = selectStateForm.querySelector("#select-state");
      console.log(input.value)
    
    fetch(`https://api.openbrewerydb.org/breweries?by_state=${input.value}`)
    .then((response) => response.json())
    .then((breweriesData) => {
      console.log("Inside get Fetch (state search bar): ", breweriesData);
      // state = {
      //   ...state, 
      //   breweries: breweriesData,
      // }

      renderFilterSection()
      renderListOfBreweriesSection()
       console.log("inside listenToSelectStateForm:", state)
  });
      
    })
}

listenToSelectStateForm();

const mainEl = document.querySelector("main")

const filterSectionEl = document.querySelector("filters-section")

const listOfBreweriesSectionEl = document.querySelector("main")


function renderFilterSection(filterSection) {
  console.log("Inside filterSection: ", filterSection)

  const filterSectionEl = document.createElement("aside");
  filterSectionEl.className = "filters-section" 

  mainEl.append(filterSectionEl)

  const filterSectionHeaderEl = document.createElement("h2")
  filterSectionHeaderEl.innerHTML = "Filter By:"

  filterSectionEl.append(filterSectionHeaderEl)

  const filterSectionFormEl = document.createElement("form")
  filterSectionFormEl.id = "filter-by-type-form"
  filterSectionFormEl.setAttribute = ("autocomplete", "off")

  filterSectionEl.append(filterSectionFormEl)

  const filterSectionLabelEl = document.createElement("label")
  filterSectionLabelEl.setAttribute = ("filter-by-type")
  filterSectionFormEl.append(filterSectionLabelEl)

  const filterSectionSecondHeaderEl = document.createElement("h3")
  filterSectionSecondHeaderEl.innerHTML = "Type of Brewery"
  filterSectionLabelEl.append(filtersectionSecondHeaderEl)

  const filterSectionSelectEl = document.createElement("select")
  filterSectionSelectEl.name = "filter-by-type"
  filterSectionSelectEl.id = "filter-by-type"
    filterSectionFormEl.append(filterSectionSelectEl)

  const filterSectionOption1El = document.createElement("option")
  filterSectionOption1El.value = ""
    filterSectionSecondHeader.innerHTML = "Select a type..."
    filterSectionSelectEl.append(filterSectionOption1El)


  const filterSectionOption2El = document.createElement("option")
  filterSectionOption2El.value = "micro"
    filterSectionSecondHeader.innerHTML = "Micro"
    filterSectionSelectEl.append(filterSectionOption2El)


  const filterSectionOption3El = document.createElement("option")
  filterSectionOption3El.value = "regional"
    filterSectionSecondHeader.innerHTML = "Regional"
    filterSectionSelectEl.append(filterSectionOption3El)


  const filterSectionOption4El = document.createElement("option")
  filterSectionOption4El.value = "brewpub"
  filterSectionOption4El.innerHTML = "Brewpub"
  filterSectionFormEl.append(filterSectionOption4El)

  
  const filterSectionDivEl = document.createElement("div")
  filterSectionDivEl.class = "filter-by-city-heading"
  filterSectionEl.append(filterSectionDivEl)

  
  const filterSectionThirdHeaderEl = document.createElement("h3")
  filterSectionThirdHeaderEl.innerHTML = "Cities"
  filterSectionDivEl.append(filterSectionThirdHeaderEl)


  const filterSectionButtonEl = document.createElement("button")
  filterSectionButtonEl.class = "clear-all-btn"
  filterSectionButtonEl.innerHTML = "clear all"
  filterSectionDivEl.append(filterSectionButtonEl)

  
  const filterSectionCityFormEl = document.createElement("form")
  filterSectionCityFormEl.idName = "filter-by-city-form"
  filterSectionEl.append(filterSectionCityFormEl)

  
  const filterSectionCityFormInput1El = document.createElement("input")
  filterSectionCityFormInput1El.type = "checkbox"
  filterSectionCityFormInput1El.name = "chardon"
  filterSectionCityFormInput1El.value = "chardon"
  filterSectionCityFormEl.append(filterSectionCityFormInput1El)


  const filterSectionCityFormLabel1El = document.createElement("label")
  filterSectionCityFormLabel1El.setAttribute = "chardon"
  filterSectionCityFormLabel1El.innerHTML = "Chardon"
  filterSectionCityFormInput1El.append(filterSectionCityFormLabel1El)

  const filterSectionCityFormInput2El = document.createElement("input")
  filterSectionCityFormInput2El.type = "checkbox"
  filterSectionCityFormInput2El.name = "cincinnati"
  filterSectionCityFormInput2El.value = "cincinnati"
  filterSectionCityFormEl.append(filterSectionCityFormInput2El)


  const filterSectionCityFormLabel2El = document.createElement("label")
  filterSectionCityFormLabel2El.setAttribute = "cincinnati"
  filterSectionCityFormLabel2El.innerHTML = "cincinnati"
  filterSectionCityFormInput2El.append(filterSectionCityFormLabel2El)


}


function renderListOfBreweriesSection(breweries) {
  console.log("Inside breweries section: ", breweries)
  
  const listOfBreweriesSectionFirstHeaderEl = document.createElement("h1")
  listOfBreweriesSectionFirstHeaderEl.innerHTML = "List of Breweries"

  const listOfBreweriesSectionHeaderEl = document.createElement("header")
  listOfBreweriesSectionHeaderEl.className = "search-bar"

  const listOfBreweriesSectionFormEl = document.createElement("form")
  listOfBreweriesSectionFormEl.id = "search-breweries-form"
  listOfBreweriesSectionFormEl.setAttribute = ("autocomplete", "off")

  const listOfBreweriesSectionLabelEl = document.createElement("label")
  listOfBreweriesSectionLabelEl.setAttribute = ("search-breweries")

  const listOfBreweriesSectionHeader2El = document.createElement("h2")
  listOfBreweriesSectionHeader2El.innerHTML = "Search breweries: "

  const listOfBreweriesSectionInputEl = document.createElement("input")
  listOfBreweriesSectionInputEl.id = "search-breweries"
  listOfBreweriesSectionInputEl.name = "search-breweries"
  listOfBreweriesSectionInputEl.type = "text"

  const listOfBreweriesSectionArticleEl = document.createElement("article")

  const listOfBreweriesSectionUlEl = document.createElement("ul")
  listOfBreweriesSectionUlEl.className = "breweries-list"

  const listOfBreweriesSectionLiEl = document.createElement("li")
  
  const listOfBreweriesSectionLiHeaderEl = document.createElement("h2")
  listOfBreweriesSectionLiHeaderEl.innerHTML = "Snow Belt Brew"

  const listOfBreweriesAddressSectionEl = document.createElement("ul")
  listOfBreweriesAddressSectionEl.className = "breweries-list"

  const listOfBreweriesSectionDivEl = document.createElement("div")
  listOfBreweriesSectionDivEl.className = "type"
  listOfBreweriesSectionDivEl.innerHTML = "micro"
  
  const listOfBreweriesSectionSectionEl = document.createElement("section")
  listOfBreweriesSectionSectionEl.className = "address"

  const listOfBreweriesSectionSectionHeaderEl = document.createElement("h3")
  listOfBreweriesSectionSectionHeaderEl.innerHTML = "Address:"

  const listOfBreweriesSectionParagraphEl = document.createElement("p")

  const listOfBreweriesSectionBoldParagraphEl = document.createElement("p")
  // listOfBreweriesSectionBoldParagraphEl.? = "strong"
  listOfBreweriesSectionBoldParagraphEl.innerText = "Chardon, 44024"

  const listOfBreweriesSectionPhoneSectionEl = document.createElement("section")
  listOfBreweriesSectionPhoneSectionEl.className = "phone"

  const listOfBreweriesSectionPhoneSectionHeaderEl = document.createElement("h3")
  listOfBreweriesSectionPhoneSectionHeaderEl.innerHTML = "Phone: "

  const listOfBreweriesSectionPhoneSectionParagraphEl = document.createElement("p")
  listOfBreweriesSectionPhoneSectionParagraphEl.innerHTML = "N/A"

  const listOfBreweriesSectionLinkSectionEl = document.createElement("section")
  listOfBreweriesSectionLinkSectionEl.className = "link"

  const listOfBreweriesSectionLinkSectionLinkEl = document.createElement("a")
  listOfBreweriesSectionLinkSectionLinkEl.href = "null"
  listOfBreweriesSectionLinkSectionLinkEl.target = "_blank"
  listOfBreweriesSectionLinkSectionLinkEl.innerHTML = "Visit Website"


  listOfBreweriesSectionEl.append(listOfBreweriesSectionEl)

  listOfBreweriesSectionEl.append(listOfBreweriesSectionFirstHeaderEl)

  listOfBreweriesSectionFirstHeaderEl.append(listOfBreweriesSectionFormEl)

  listOfBreweriesSectionFormEl.append(listOfBreweriesSectionLabelEl)

  listOfBreweriesSectionLabelEl.append(listOfBreweriesSectionHeader2El)

  listOfBreweriesSectionFormEl.append(listOfBreweriesSectionInputEl)

  listOfBreweriesSectionEl.append(listOfBreweriesSectionArticleEl)

  listOfBreweriesSectionArticleEl.append(listOfBreweriesSectionUlEl)

  listOfBreweriesSectionUlEl.append(listOfBreweriesSectionLiEl)

  listOfBreweriesSectionLiEl.append(listOfBreweriesSectionLiHeaderEl)

  listOfBreweriesSectionLiEl.append(listOfBreweriesAddressSectionEl)

  listOfBreweriesSectionLiEl.append(listOfBreweriesSectionDivEl)

  listOfBreweriesSectionLiEl.append(listOfBreweriesSectionSectionEl)

  listOfBreweriesSectionSectionEl.append(listOfBreweriesSectionSectionHeaderEl)

  listOfBreweriesSectionSectionEl.append(listOfBreweriesSectionParagraphEl)

  listOfBreweriesSectionSectionEl.append(listOfBreweriesSectionBoldParagraphEl)

  listOfBreweriesSectionPhoneSectionEl.append(listOfBreweriesSectionPhoneSectionHeaderEl)

  listOfBreweriesSectionPhoneSectionEl.append(listOfBreweriesSectionPhoneSectionParagraphEl)

  listOfBreweriesSectionLinkSectionEl.append(listOfBreweriesSectionLinkSectionLinkEl)

}

renderListOfBreweriesSection(state.breweries)


// The FIRST (CITIES) SEARCH BAR 

// THIS IS BRUCE's CODE - We went over it a few times together each explaining what was happening, Bruce said my explanation was correct, I will write my own version


// THIS IS BRUCE'S CODE






// The SECOND (BREWERIES) SEARCH BAR Here I plan to do the same - use the fetch api but this time for the breweries

// THIS IS BRUCE's CODE - We went over it a few times together each explaining what was happening, Bruce said my explanation was correct, I will write my own version

// function listenToSelectStateForm () {
//     selectStateForm.addEventListener("submit", (event) => {
//       event.preventDefault()
//       const input = selectStateForm.querySelector("#select-state");
//       console.log(input.value)
    
//     fetch(`https://api.openbrewerydb.org/breweries?by_name=${input.value}`)
//     .then((response) => response.json())
//     .then((input) => {
//       console.log("Inside get Fetch (state search bar): ", input);
 
//   });
      
//     })
// }

// listenToSelectStateForm();

// THIS IS BRUCE'S CODE




// FILTER SECTION - TYPE OF BREWERIES - DROPDOWN MENU

function renderFiltersType() {
  console.log("Inside renderFilters: ", state.breweries);

  for (let i = 0; i < state.breweries; i++) {

    // write code for dropdown menu
    // Similar to Lana's below
    
  }
}



// FILTER SECTION - CITIES - CHECKBOX

function renderFiltersCities() {
  console.log("Inside renderFilters: ", state.cities);

  for (let i = 0; i < state.cities; i++) {

    // I saw Lana's post on the support channel, so I'll be doing something like that



  }
}


// I will put some kind of delete/reset function here for the "clear all"
