function showLoading(){

    document.getElementById("app")
    .innerHTML =
    "<h2>Loading Products...</h2>";
}

function showError(){

    document.getElementById("app")
    .innerHTML =
    "<h2>Failed to Load Products</h2>";
}

function renderProducts(products){

    const app =
    document.getElementById("app");

    app.innerHTML = "";

    products.forEach(product => {

        app.innerHTML += `
        <div class="product">

            <h3>${product.title}</h3>

            <p>Price: $${product.price}</p>

        </div>
        `;

    });

}