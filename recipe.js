const main = async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = (searchParams.get('id'));

    const $content = document.querySelector('.single_content');

    const response = await fetch(`https://dummyjson.com/recipe/${id}`);
    const responseData = await response.json();

    $content.innerHTML =  `
        <h1>
            ${responseData.name}
        </h1>
        <img src="${responseData.image}" alt="${responseData.name}" />
        ${responseData.ingredients
            .map(ingredient => `<li>${ingredient}</li>`)
            .join("")}

    `;
};

main();