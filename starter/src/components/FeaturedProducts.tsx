import ProductItem, { ProductProps } from "./ProductItem";

async function fetchData(): Promise<ProductProps[]> {
  const featured_res = await fetch("http://localhost:5001/products/?_limit=4");
  const featuredData = await featured_res.json();

  return featuredData;
}

const FeaturedProducts = async () => {
  const featuredData = await fetchData();
  return (
    <section className="sec-product bg0 p-t-100 p-b-50">
      <div className="container">
        <div className="p-b-32">
          <h3 className="ltext-105 cl5 txt-center respon1">Store Overview</h3>
        </div>

        <div className="tab01">
          <div className="tab-content p-t-50">
            <div
              className="tab-pane fade show active"
              id="best-seller"
              role="tabpanel"
            >
              <div className="wrap-slick2">
                <div className="d-flex">
                  <ProductItem productItems={featuredData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
