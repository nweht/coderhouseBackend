class ProductManger {
    
    constructor (){
        this.products = [];
    }

    getProducts = ()  =>{
        console.log(this.products)
        return 
    };
    
    addProducts = (title, description, price, thumbnail, code,stock) =>{
        if (!title || !description || !price || !thumbnail || !code || !stock)
        {
            console.log('Error: No debe dejar campos vacios');
        }
        
        if(this.products.some((prod) => prod.code === prod.code))
        {
            console.log('Error: El Codigo del producto ya se encuentra ingrersado.');
        }
        const product ={
            id: this.products.length +1,
            title,
            description,
            price,  
            thumbnail,
            code,
            stock
        };
        this.products.push(product)
    };

    getProductById(value){
        const productFind = this.products.find((prod) => prod.id === value);
        if (productFind){
            console.log(productFind);
        }
        else{
            console.log('Error: ID not found')
        }
    }

}

const productManager = new  ProductManger();

productManager.addProducts('producto prueba', 'Este es un producto prueba', 200,'Sin imagen','abc123', 25);


productManager.getProductById(2);


