// Carousel 1 : Metaball NFTs Sample
// Built with SplideJS (splidejs.com/integration/react-splide)

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/themes/splide-seagreen.min.css';

export default () => {
  return (
    <Splide
      options={ {
        type  : 'loop',
        rewind: true,
        gap   : '1rem',
        drag   : 'free',
        focus  : 'center',
        perPage: 5,
        autoStart: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        autoScroll: {
          speed: 2,
        },
      } }
    >
      <SplideSlide>
        <img src="/metaballs/1.png" alt="Metaball Sample #1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/metaballs/2.png" alt="Metaball Sample #2"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/metaballs/3.png" alt="Metaball Sample #3"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/metaballs/4.png" alt="Metaball Sample #4"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/metaballs/5.png" alt="Metaball Sample #5"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/metaballs/6.png" alt="Metaball Sample #6"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/metaballs/7.png" alt="Metaball Sample #7"/>
      </SplideSlide>
    </Splide>
  );
}