async function loadProducts(){

    try{

        showLoading();

        const products =
        await getProducts();

        renderProducts(products);

    }

    catch(error){

        showError();

    }

}

router();