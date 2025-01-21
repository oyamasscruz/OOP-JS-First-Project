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
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of products) {
      console.log(product);
    } 
  }
}