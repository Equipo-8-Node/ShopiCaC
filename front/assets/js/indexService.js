async function getProductsInicio() {
    try {
        const res = await fetch("http://localhost:4000/productsInicio");
        const resJson = await res.json();
        return resJson;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}