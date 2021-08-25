// Question 2
// Make a call to the Rawg API.
// Go to https://rawg.io/apidocs and get an API key which you’ll use as part of the endpoint you’re making an API call to. You can use https://noroff.no for the URL and Noroff Assignment for the description.
// You'll be given an API Key you can add as a "key" parameter in your fetch request.
// Make a call to the following API endpoint replacing INSERTAPIKEYHERE with the key given to you from the Rawg API.
// https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=INSERTAPIKEYHERE
// Loop through the results and display the following properties in HTML, but only for the first eight results:
// name
// rating
// number of tags (not the tag details, just the amount of tags)
// The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.
// Be sure to handle any potential errors in the code.
// You can use either regular promise or async/await syntax to make the call.
// Be sure to arrange all file types appropriately, consult the repos from the lessons for examples.
// https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f18609b1ba51481a8de2d572e5e3003b

// Answer 2:

let url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f18609b1ba51481a8de2d572e5e3003b"
let displaySection = document.querySelector("main")

// Function for fetching data
async function fetchApiResponse()
{
    try { 
        let response = await fetch(url);
        let result = await response.json()
        return await result.results   
    } catch (error) {
        console.log(error)
    }
}

async function parseApiResponse(){
    displaySection.innerHTML = `Loading...`;
    let data = await fetchApiResponse();
    await displayData(data)
}

function displayData(data){
    
    displaySection.innerHTML = ``;

    if(data === undefined || data === null){
        displaySection.innerHTML = `Data Not Found`;
        return;
    }

    data.map((v,i)=>{
        if(i <= 7){
            displaySection.innerHTML += `        
                <section>
                    <h2 >${v.name}</h2>
                    <h3 >${v.rating}</h3>
                    <h4 >${v.tags.length}</h4>
                <section>
            `;
        }    
    })

}

parseApiResponse();