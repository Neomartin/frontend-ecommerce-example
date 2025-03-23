import img from '@/assets/images/main-info.avif';
import './HomeInfo.css';

export default function HomeInfo() {
  return (
    <section className="home-info">
      <div className="info__image-container">
        <img src={img} alt="Home Info" />
      </div>
      <div className="info__content">
        <div className="info__category">INFORMACIÓN</div>
        <h2 className="info__title">Lorem ipsum dolor sit amet.</h2>
        <div className="info__description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            officia autem id accusamus placeat. Magnam eos quae eum fugit nulla.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            officia autem id accusamus placeat. Magnam eos quae eum fugit nulla.
          </p>
        </div>
        <div className="info__buttons">
          <a href="#" className="button">
            Conocer más
          </a>
        </div>
      </div>
    </section>
  );
}
