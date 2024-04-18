document.getElementById('recipeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the value of the ingredient input field
    var ingredients = document.getElementById('ingredientInput').value;

    // Make an API call to fetch recipes based on the entered ingredients
    fetch(`https://api.edamam.com/search?q=${ingredients}&app_id=5e80933e&app_key=c103f10d8a89e2250dbd0c2de8aae678	`)
        .then(response => response.json())
        .then(data => {
            // Clear previous recipe results
            document.getElementById('recipeList').innerHTML = '';

            // Display each recipe in the response
            data.hits.forEach(hit => {
                var recipe = hit.recipe;
                var li = document.createElement('li');
                li.textContent = recipe.label;
                document.getElementById('recipeList').appendChild(li);
            });

            // Show the recipe section
            document.getElementById('recipes').classList.remove('hidden');
        })
        .catch(error => {
            console.error('Error fetching recipes:', error);
        });
});
