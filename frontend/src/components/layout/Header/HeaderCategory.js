import React from 'react'

const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="category-item-container has-scrollbar">
          <div className="category-item">
            <div className="category-img-box">
              <img
                src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683383139/SVG%20Images/cloth_qhnwcu.png"
                alt="dress & frock"
                width="30"
              />
            </div>

            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Shirt</h3>
                <p className="category-item-amount">(1)</p>
              </div>

              <a href="/products/shirt" className="category-btn">
                Show all
              </a>
            </div>
          </div>

          <div className="category-item">
            <div className="category-img-box">
              <img
                src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683118157/SVG%20Images/jacket_tuvwjh.svg"
                alt="winter wear"
                width="30"
              />
            </div>

            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Winter wear</h3>

                <p className="category-item-amount">(0)</p>
              </div>

              <a href="/products/winter" className="category-btn">
                Show all
              </a>
            </div>
          </div>

          <div className="category-item">
            <div className="category-img-box">
              <img
                src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683118156/SVG%20Images/glasses_k4hxmg.svg"
                alt="glasses & lens"
                width="30"
              />
            </div>

            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Glasses & lens</h3>

                <p className="category-item-amount">(0)</p>
              </div>

              <a href="/products/glasses" className="category-btn">
                Show all
              </a>
            </div>
          </div>

          <div className="category-item">
            <div className="category-img-box">
              <img
                src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683118158/SVG%20Images/shorts_roeevf.svg"
                alt="shorts & jeans"
                width="30"
              />
            </div>

            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Shorts & jeans</h3>

                <p className="category-item-amount">(84)</p>
              </div>

              <a href="/products/bottomwear" className="category-btn">
                Show all
              </a>
            </div>
          </div>

          <div className="category-item">
            <div className="category-img-box">
              <img
                src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683118159/SVG%20Images/tee_hsaust.svg"
                alt="t-shirts"
                width="30"
              />
            </div>

            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">T-shirts</h3>

                <p className="category-item-amount">(0)</p>
              </div>

              <a href="/products/tshirts" className="category-btn">
                Show all
              </a>
            </div>
          </div>

          <div className="category-item">
            <div className="category-img-box">
              <img
                src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683118156/SVG%20Images/coat_wgegq1.svg"
                alt="jacket"
                width="30"
              />
            </div>

            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Jacket</h3>

                <p className="category-item-amount">(3)</p>
              </div>

              <a href="/products/jacket" className="category-btn">
                Show all
              </a>
            </div>
          </div>

          <div className="category-item">
            <div className="category-img-box">
              <img
                src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683118159/SVG%20Images/watch_dpkxzz.svg"
                alt="watch"
                width="30"
              />
            </div>

            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Watch</h3>

                <p className="category-item-amount">(2)</p>
              </div>

              <a href="/products/watch" className="category-btn">
                Show all
              </a>
            </div>
          </div>

          <div className="category-item">
            <div className="category-img-box">
              <img
                src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1683118157/SVG%20Images/hat_tflpml.svg"
                alt="hat & caps"
                width="30"
              />
            </div>

            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Hat & caps</h3>

                <p className="category-item-amount">(0)</p>
              </div>

              <a href="/products/caps" className="category-btn">
                Show all
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category