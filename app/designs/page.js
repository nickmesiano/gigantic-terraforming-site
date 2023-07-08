'use client'
import ContentSection from '../components/content-section';
import Gallery from '../components/design-gallery/gallery';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <FadeIn>
        <ContentSection >
          <h1>Suburbia 4.0 : Hamlet Type Design</h1>
          <p>Click around the map to visit the future of suburban design</p>
        </ContentSection>
        <ContentSection className='content-section' style={{padding: '25px'}}>
          <div>
          <Image class="map"
                src='/../public/images/map.jpg'
                height={735}
                width={1140}
                alt="Map"
                style={{width: '100%', height: 'auto'}} />
          </div>
        </ContentSection>
        <ContentSection className='content-section'>
          <div>
            <p>Designs gallery here</p>
          </div>
          <Gallery />
        </ContentSection>
      </FadeIn>
    </main>
  )
}
