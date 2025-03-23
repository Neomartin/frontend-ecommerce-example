import ProductsContainer from '../../../components/ProductsContainer/ProductsContainer';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

export default function HomeFeaturedProducts() {
  return (
    <section className="main-featured section">
      <div className="section-content">
        <SectionTitle title="FEATURED PRODUCTS" subtitle="WEEKLY DISCOUNTS" />
        <ProductsContainer />
      </div>
    </section>
  );
}
