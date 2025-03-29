import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProductCard.css';
import { faEye, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FILES_URL } from '../../config/env.config';

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__header" data-category={product.category}>
        <img
          className="image"
          src={`${FILES_URL}/products/${product.images[0]}`}
          alt={product.name}
        />
        <img
          className="image-full"
          src={`${FILES_URL}/products/${product.images[1] ?? product.images[0]}`}
          alt=""
        />
        <div className="product-card__actions">
          <div className="product-card__action-container">
            <div className="product-card__action-info">Comprar</div>
            <button className="button button--icon button--primary">
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </div>
          <div className="product-card__action-container">
            <div className="product-card__action-info">Ver detalles</div>
            <button className="button button--icon button--primary">
              <FontAwesomeIcon icon={faEye} />
            </button>
          </div>
        </div>
      </div>
      <div className="product-card__body">
        <h3 className="product-card__title">{product.name}</h3>
        <div className="product-card__description">{product.description}</div>
      </div>
      <div className="product-card__footer">
        <div className="product-card__price">
          <span>$</span>
          {product.price}
        </div>
        <button className="button button--primary" title="Add to cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </article>
  );
}
