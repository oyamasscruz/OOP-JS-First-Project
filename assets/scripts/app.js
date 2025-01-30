class Product {
  // title = 'DEFAULT';
  // imageUrl;
  // price;
  // description;

  constructor(title, image, price, desc) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = desc;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log('addign to cart...');
    console.log(this.product);
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}"/>
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
      `;
    const addCartBtn = prodEl.querySelector('button');
    addCartBtn.addEventListener('click', this.addToCart.bind(this));
    // also addCartBtn.addEventListner('click', () => this.addToCart()) will be work.
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'Pillow',
      'https://www.pacificcoast.com/on/demandware.static/-/Sites-pcf-master-catalog/default/dw98d1dd36/images/Pillows/prod-image_NP_Eurosquare20x20_1_907.jpg',
      9.99,
      'A soft pillow'
    ),
    new Product(
      'Bed linen',
      'https://cdn.awsli.com.br/600x700/2536/2536086/produto/198197785/tmpfrisomarrom-fa4d5f4d62.jpg',
      83.99,
      'A classic Bed line'
    )
  ];
  render() {
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    } 
  return prodList;
  }
}

class ShoppingCart {
  items = [];

  addProducts(product) {
    this.items.push(product);
    this.totalOutput.innerHTML = `<h2>Total: \$${1}</h2>`;
  }

  render() {
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
    <h2>Total: \$${0}</h2>
    <button>Order Now!</button>
    `;
    cartEl.className = 'cart';
    return cartEl;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById('app');

    const cart = new ShoppingCart();
    const cartEl = cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}
const shop = new Shop();
shop.render();