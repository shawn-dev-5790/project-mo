export const GalleryProducts: React.FC = () => {
  return (
    <section>
      <h2>Products Featured in Images</h2>
      <p>List of products included in the images</p>
      <ul>
        <li>
          <div>
            <img src="product1.jpg" alt="Product 1" />
          </div>
          <div>
            <h3>Product 1</h3>
            <p>Description of Product 1</p>
            <p>Price: $10.99</p>
            <p>Likes: 100</p>
            <p>Views: 500</p>
          </div>
        </li>
        <li>
          <div>
            <img src="product2.jpg" alt="Product 2" />
          </div>
          <div>
            <h3>Product 2</h3>
            <p>Description of Product 2</p>
            <p>Price: $15.99</p>
            <p>Likes: 80</p>
            <p>Views: 700</p>
          </div>
        </li>
        <li>
          <div>
            <img src="product3.jpg" alt="Product 3" />
          </div>
          <div>
            <h3>Product 3</h3>
            <p>Description of Product 3</p>
            <p>Price: $20.99</p>
            <p>Likes: 120</p>
            <p>Views: 300</p>
          </div>
        </li>
        <li>
          <div>
            <img src="product4.jpg" alt="Product 4" />
          </div>
          <div>
            <h3>Product 4</h3>
            <p>Description of Product 4</p>
            <p>Price: $25.99</p>
            <p>Likes: 90</p>
            <p>Views: 600</p>
          </div>
        </li>
        <li>
          <div>
            <img src="product5.jpg" alt="Product 5" />
          </div>
          <div>
            <h3>Product 5</h3>
            <p>Description of Product 5</p>
            <p>Price: $30.99</p>
            <p>Likes: 150</p>
            <p>Views: 800</p>
          </div>
        </li>
        {/* Add more products here */}
      </ul>
    </section>
  )
}
