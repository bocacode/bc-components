import './styles.css'

export default function AlumniCard({ name, image, projectImage, prevTitle, link }) {
  return (    
    <div className='candidate-card card'>
      <header className='candidate-header' style={(projectImage) ? { backgroundImage: `url(${projectImage})` }  : null}>
        <img className='alumni-image' src={image} alt={name} />
      </header>
      <h2 className='candidate-card-h2 mt-4'><strong>{name}</strong></h2> 
      <p className='candidate-card-p mt-2'>{prevTitle}</p>
      <button className='candidate-card-button'>
        Learn More
      </button>
    </div>
  )
}
