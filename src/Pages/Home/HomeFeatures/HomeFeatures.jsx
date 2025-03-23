import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import './HomeFeatures.css';
import {
  faHeadset,
  faRankingStar,
  faTruckFast,
} from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';

export default function HomeFeatures() {
  return (
    <section className="main-features section">
      <SectionTitle
        title="Why Choose Us?"
        subtitle="We provide the best services"
      />
      <div className="section-content">
        <div className="feature__wrapper">
          <div className="feature__icon">
            <FontAwesomeIcon icon={faTruckFast} />
          </div>
          <h3 className="feature__title">Fastest Delivery</h3>
          <p className="feature__description">
            Delivery ordered within 24 hours
          </p>
        </div>
        <div className="feature__wrapper">
          <div className="feature__icon">
            <FontAwesomeIcon icon={faRankingStar} />
          </div>
          <h3 className="feature__title">Best Quality</h3>
          <p className="feature__description">Best quality products</p>
        </div>
        <div className="feature__wrapper">
          <div className="feature__icon">
            <FontAwesomeIcon icon={faCreditCard} />
          </div>
          <h3 className="feature__title">Easy Payment</h3>
          <p className="feature__description">Easy payment options</p>
        </div>

        <div className="feature__wrapper">
          <div className="feature__icon">
            <FontAwesomeIcon icon={faHeadset} />
          </div>
          <h3 className="feature__title">24/7 Support</h3>
          <p className="feature__description">24/7 customer support</p>
        </div>
      </div>
    </section>
  );
}
