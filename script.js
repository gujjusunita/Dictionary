//searchinput
//searchbtn
const dictionary = (word) => {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '1b1b971923msh883d4930d011d75p139590jsn36db06a6f989',  // Replace with your API key
            'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch(`https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='{word}`+ word, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);  // Logs the full response to the console

            const wordElement = document.getElementById('word');
            const definitionElement = document.getElementById('definition');

            // Check if the 'results' property exists and contains data
            if (response.results && response.results.length > 0) {
                const wordData = response.results[0];

                wordElement.innerHTML = wordData.word || "No word found";
                definitionElement.innerHTML = wordData.definition || "No definition available";
            } else {
                // Handle the case where no results are found
                wordElement.innerHTML = "No word found";
                definitionElement.innerHTML = "No definition available";
            }
        })
        .catch(error => {
            console.error(error);
            // Handle any errors gracefully
            const wordElement = document.getElementById('word');
            const definitionElement = document.getElementById('definition');
            wordElement.innerHTML = "Error";
            definitionElement.innerHTML = "Unable to fetch data";
        });
};

// Assuming searchbtn and searchinput are your DOM elements
searchbtn.addEventListener("click", (e) => {
    e.preventDefault();
    const searchinput = document.getElementById('searchinput');  // Get the search input element
    dictionary(searchinput.value);  // Pass the input value to the dictionary function
});

