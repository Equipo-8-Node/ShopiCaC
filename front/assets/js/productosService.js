async function getAllProducts() {
    const res = await fetch("http://localhost:4000/productsAll");
    const resJson = await res.json();
    return resJson;
}