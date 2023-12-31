import styled from 'styled-components';

import imgDesc from '../../images/pictures/Layer-deck.png';
import imgTabl from '../../images/pictures/Layer-tabl.png';

import descktopBanana1x from '../../images/pictures/descktop-banana-1x.png';
import descktopBanana2x from '../../images/pictures/descktop-banana-2x.png';
import descktopLeafs1x from '../../images/pictures/descktop-leafs-1x.png';
import descktopLeafs2x from '../../images/pictures/descktop-leafs-2x.png';
import descktopStrawberry1x from '../../images/pictures/descktop-strawberry-1x.png';
import descktopStrawberry2x from '../../images/pictures/descktop-strawberry-2x.png';
import descktopFone1x from '../../images/pictures/descktop-fone-1x.png';
import descktopFone2x from '../../images/pictures/descktop-fone-2x.png';
import tabletBanana1x from '../../images/pictures/tablet-banana-1x.png';
import tabletBanana2x from '../../images/pictures/tablet-banana-2x.png';
import tabletLeafs1x from '../../images/pictures/tablet-leafs-1x.png';
import tabletLeafs2x from '../../images/pictures/tablet-leafs-2x.png';
import tabletStrawberry1x from '../../images/pictures/tablet-strawberry-1x.png';
import tabletStrawberry2x from '../../images/pictures/tablet-strawberry-2x.png';
import tabletFone1x from '../../images/pictures/tablet-fone-1x.png';
import tabletFone2x from '../../images/pictures/tablet-fone-2x.png';

export const FoneImages = styled.div`
  @media screen and (min-width: 768px) {
    position: absolute;
    width: 100%;
    background-image: url(${tabletStrawberry1x}), url(${tabletBanana1x}),
      url(${tabletLeafs1x}), url(${tabletFone1x});
    background-size: 291px, 498px, 553px, 740px;
    background-position: right 0px top 461px, right 0px bottom 0px,
      right 12px top 0px, right -12px bottom -137px;
    background-repeat: no-repeat;    
  }

  @media (min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px),
    (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${tabletStrawberry2x}), url(${tabletBanana2x}),
      url(${tabletLeafs2x}), url(${tabletFone2x});
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${descktopLeafs1x}), url(${descktopBanana1x}),
      url(${descktopStrawberry1x}), url(${descktopFone1x});
    background-size: 746px, 498px, 286px, 602px;
    background-position: right 195px top 0px, right 0px top 0px,
      right 36px top 506px, right 0px bottom 0px;    
  }
  
  @media (min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px),
    (min-resolution: 2dppx) and (min-width: 1280px) {
    background-image: url(${descktopLeafs2x}), url(${descktopBanana2x}),
      url(${descktopStrawberry2x}), url(${descktopFone2x});
  }
`;

export const Gradient = styled.div`
  width: 100%;
  background: linear-gradient(
    to top,
    ${p => p.theme.colors.track} 433px,
    ${p => p.theme.colors.white} 433px,
    ${p => p.theme.colors.white} 433px
  );

  @media screen and (min-width: 768px) {
    background: url(${imgTabl}) no-repeat right bottom,
      linear-gradient(
        to top,
        ${p => p.theme.colors.track} 326px,
        ${p => p.theme.colors.white} 326px,
        ${p => p.theme.colors.white} 326px
      );
  }

  @media screen and (min-width: 1280px) {
    background: url(${imgDesc}) no-repeat right bottom,
      linear-gradient(
        to left,
        ${p => p.theme.colors.track} 40%,
        ${p => p.theme.colors.white} 40%,
        ${p => p.theme.colors.white} 40%
      );
  }
`;
