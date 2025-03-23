import './Banner.css';
import Image1 from '@/assets/images/banner/1.jpg';

export default function Banner() {
  return (
    <section className='main-banner'>
        <div className="slide__container">
            <div className="slide__item">
                <img className='slide__image' src={Image1} alt="" />
                <div className="slide__content">
                  <h2 className="banner__heading">
                    Todo el Poder de la Tecnología a tu Alcance
                  </h2>
                  <div className="banner__text">
                    <p>
                      Juga y disfruta con la mejor tecnología en PC, consolas y videojuegos.
                    </p>
                  </div>
                  <div className="banner__buttons">
                  <a href="#" className="button">Comprar</a>
                  <a href="#" className="button button--secondary">Ver más</a>
                </div>
                </div>
               
            </div>
        </div>
    </section>
  )
}
