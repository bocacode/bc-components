import { FaGithub, FaIdCard, FaLinkedin, FaFilePdf } from 'react-icons/fa'
import './person-hero.css'

export default function PersonHero({ candidate }) {
  return (
    <section>
        <div className='person-hero-container '>
          {candidate.imageFull && (
            <div className='person-hero-image'>
              <img
                className='person-hero-image'
                itemProp='image'
                src={candidate.imageFull}
                alt={candidate.name}
              />
            </div>
          )}
          <div className='person-hero-text-content'>
            <h1 className='person-hero-title' itemProp='name'>
              {candidate.name}
            </h1>
            <p className='person-hero-about' itemProp='description'>
              {candidate.about}
            </p>
            {candidate.prevTitle &&
            <p className='person-hero-about' itemProp='description'>
              {candidate.prevTitle}
            </p>
            }
            <section className='person-buttons'>
              {candidate.github && (
                <a href={candidate.github} target='_blank' rel='noopener noreferrer'>
                  <FaGithub />
                </a>
              )}
              {candidate.linkedin && (
                <a href={candidate.linkedin} target='_blank' rel='noopener noreferrer'>
                  <FaLinkedin />
                </a>
              )}
              {candidate.portfolio && (
                <a href={candidate.portfolio} target='_blank' rel='noopener noreferrer'>
                  <FaIdCard />
                </a>
              )}
              {candidate.resume && (
                <a href={candidate.resume} target='_blank' rel='noopener noreferrer'>
                  <FaFilePdf />
                </a>
              )}
            </section>
          </div>
        </div>
      </section>
  )
}
