const main = async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");
    console.log(id); // para debug

    const $content = document.querySelector(".single_content");

    const response = await fetch(`https://dummyjson.com/recipe/${id}`);
    const responseData = await response.json();
    console.log(responseData); // para debug

    $content.innerHTML = `
        <h1>${responseData.name}</h1>
        <img src="${responseData.image}" alt="${responseData.name}" />

        <h2>Ingredientes</h2>
        <ul>
            ${responseData.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
        </ul>

        <h2>Instrucciones</h2>
        <p>
            ${responseData.instructions.join(" ")}
        </p>

        <div class="food_info">
            <p class="info">Cocina: ${responseData.cuisine}</p>
            <p class="info">Dificultad: ${responseData.difficulty}</p>
            <p class="info">Tiempo de preparación: ${responseData.prepTimeMinutes} min</p>
            <p class="info">Tiempo de cocción: ${responseData.cookTimeMinutes} min</p>
            <p class="info">Cantidad de porciones: ${responseData.servings}</p>
            <p class="info">Calorías por porción: ${responseData.caloriesPerServing}</p>
            <p class="info">Tipo de comida: ${responseData.mealType.join(", ")}</p>
            <p class="info">Valoración: ${responseData.rating}⭐</p>
            <p class="info">En esta receta: ${responseData.tags.join(", ")}</p>
        </div>
    `;
};

main();
