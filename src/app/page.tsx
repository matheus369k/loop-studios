import { ourCreations } from '@/datas/our-creations'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main_container}>
      <div className={`container-fluid ${styles.apresetation_image}`}>
        <div className='d-flex container h-100 p-0 align-items-center'>
          <div className={styles.apresetation_title}>
            <h1>Immersive experiences that deliver</h1>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row flex-d flex-md-nowrap align-items-md-end'>
          <div className='col-md-10 col-xl-7'>
            <picture className={styles.about_image}>
              <source
                media='(max-width: 767px)'
                srcSet={'/desktop/image-interactive.jpg'}
                type='image/jpg'
              />
              <img
                alt="Tha's showing one people with vr glasses"
                className='img-fluid figure-img'
                loading='lazy'
                src={'/mobile/image-interactive.jpg'}
              />
            </picture>
          </div>

          <div className={`col-md-5 col-xl-6 ${styles.about_caption}`}>
            <h2 className='main_title'>The leader in interactive VR</h2>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>

      <div className='d-flex position-relative container row-gap-5 flex-column'>
        <div className='row'>
          <div className='d-flex justify-content-between align-content-center'>
            <h2 className='main_title'>Our creations</h2>

            <button
              className={`btn btn-outline-dark ${styles.our_creation_header_button}`}
              type='button'
            >
              See all
            </button>
          </div>
        </div>
        <div className='row'>
          {ourCreations.map((ourCreation) => {
            return (
              <div className='col-md-3 p-4' key={ourCreation.id}>
                <div
                  className={`card border-0 text-bg-dark ${styles.our_creation_content}`}
                >
                  <picture>
                    <source
                      media='(max-width: 767px)'
                      srcSet={ourCreation.image.mobile}
                      type='image/jpg'
                    />
                    <img
                      alt={ourCreation.name}
                      className={`card-image ${styles.our_creation_content_image}`}
                      loading='lazy'
                      src={ourCreation.image.desktop}
                    />
                  </picture>
                  <div
                    className={`card-img-overlay ${styles.our_creation_content_title}`}
                  >
                    <h3 className='card-title'>{ourCreation.name}</h3>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
