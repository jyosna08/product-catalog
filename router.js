function router(){

    const hash =
    window.location.hash;

    if(hash === "#products"){

        loadProducts();

    }else{

        document.getElementById("app")
        .innerHTML =
        "<h2>Welcome Home</h2>";
    }
}

window.addEventListener(
    "hashchange",
    router
);