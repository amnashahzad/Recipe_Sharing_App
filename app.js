const recipes = [
    { name: "Pasta Carbonara", ingredients: ["pasta", "eggs", "cheese", "bacon"] },
    // ... more recipes
];

function displayRecipes() {
    const recipeContainer = document.querySelector("#recipe-container");
    recipeContainer.innerHTML = ""; // Clear previous content

    recipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        recipeCard.innerHTML = `
            <h2>${recipe.name}</h2>
            <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}</ul>
            <div class="share-buttons">
                <a href="mailto:?subject=Check out this recipe: ${recipe.name}&body=Ingredients: ${recipe.ingredients.join(', ')}" target="_blank">Share via Email</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}" target="_blank">Share on Facebook</a>
                <a href="https://web.whatsapp.com/send?text=Check out this recipe: ${recipe.name} - Ingredients: ${recipe.ingredients.join(', ')}" target="_blank">Share on WhatsApp</a>
            </div>
        `;

        recipeContainer.appendChild(recipeCard);
    });
}

window.onload = displayRecipes;
