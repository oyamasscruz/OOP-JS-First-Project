//this page it's for understod all the logic and all the code.
// Diferent as we already learn, we're gonna to set all the logic inside of the product.

const productList = {
  products: [
    {
      title: 'Pillow',
      imageUrl: 
      'https://www.pacificcoast.com/on/demandware.static/-/Sites-pcf-master-catalog/default/dw98d1dd36/images/Pillows/prod-image_NP_Eurosquare20x20_1_907.jpg',
      price: 9.99,
      description: 'A soft pillow'
    },
    {
      title: 'Bed linen',
      imageUrl: 
      'https://cdn.awsli.com.br/600x700/2536/2536086/produto/198197785/tmpfrisomarrom-fa4d5f4d62.jpg',
      price: 83.99,
      description: 'A classic Bed linen'
    }
  ],
  // as we are seeing, let's create another key for this objec, might some method.
  render() {
// another difference between the ways of write our logic, is that, here we're gonna create the content of our site right here.
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    // we need a lop to iterate to every product of our product-list
    for (const prod of products) {
      console.log(product);
    } 
  }
}