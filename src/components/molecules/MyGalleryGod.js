import React from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import img2 from '../../assets/img/gods/2.jpg';
import img3 from '../../assets/img/gods/3.jpg';
import img4 from '../../assets/img/gods/4.jpg';
import img5 from '../../assets/img/gods/5.jpg';
import img6 from '../../assets/img/gods/6.jpg';
import img7 from '../../assets/img/gods/7.jpg';
import img8 from '../../assets/img/gods/8.jpg';
import img9 from '../../assets/img/gods/9.jpg';
import img10 from '../../assets/img/gods/10.jpg';
import img11 from '../../assets/img/gods/11.jpg';

const images = [
  {
    original: `${img2}`,
    originalHeight: 400,
    originalWidth: 400,
  },
  {
    original: `${img3}`,
    originalHeight: 400,
    originalWidth: 400,
  },
  {
    original: `${img4}`,
    originalHeight: 400,
    originalWidth: 400,
  },
  {
    original: `${img5}`,
    originalHeight: 400,
    originalWidth: 400,
  },
  {
    original: `${img6}`,
    originalHeight: 400,
    originalWidth: 400,
  },
  {
    original: `${img7}`,
    originalHeight: 400,
    originalWidth: 400,
  },
  {
    original: `${img8}`,
    originalHeight: 400,
    originalWidth: 400,
  },
  {
    original: `${img9}`,
    originalHeight: 400,
    originalWidth: 400,
  },
  {
    original: `${img10}`,
    originalHeight: 400,
    originalWidth: 400,
  },
  {
    original: `${img11}`,
    originalHeight: 400,
    originalWidth: 400,
  },
];
const ContenerDiv = styled.div`
  width: 50%;
  height: 50%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 741px) {
    display: none;
  }
`;
class MyGalleryGod extends React.Component {
  render() {
    return (
      <ContenerDiv>
        <ImageGallery
          items={images}
          autoPlay={true}
          showThumbnails={false}
          showNav={false}
          showPlayButton={false}
          useBrowserFullscreen={true}
        />
      </ContenerDiv>
    );
  }
}

export default MyGalleryGod;
