// import ContactModal from "../common/contactModal";
import "./styles.css";

export default function PhotoHero({ title, subTitle, bgImg, ctaTitle, handleCta }) {
  return (
    <section>
      <div
        className='photo-hero-container'
        style={{
          backgroundImage: `linear-gradient(rgba(39, 34, 98, 0.35), rgba(39, 34, 98, 0.25)), url(${bgImg})`,
        }}>
        <div className='container'>
          <div className='photo-hero-text-content'>
            <h1 className='photo-hero-title'>{title}</h1>
            <p className='photo-hero-subtitle'>{subTitle}</p>
            <div className='hero-apply-container'>
              <button
                onClick={handleCta}
                className='cta-btn-big'>
                {ctaTitle}</button>
            </div>
          </div>
        </div>
      </div>
      <div className='hero-image'></div>
    </section>
  )
}
