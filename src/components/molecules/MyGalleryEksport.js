import React from 'react';
import ImageGallery from 'react-image-gallery';
import styled from 'styled-components';
import img2 from '../../assets/img/transport/1a.jpg';
import img3 from '../../assets/img/transport/2a.jpg';
import img4 from '../../assets/img/transport/3a.jpg';
import img5 from '../../assets/img/transport/4a.jpg';
import img6 from '../../assets/img/transport/5.jpg';
import img7 from '../../assets/img/transport/6a.jpg';
import img8 from '../../assets/img/transport/7a.jpg';
import img9 from '../../assets/img/transport/8a.jpg';
import img10 from '../../assets/img/transport/9a.jpg';

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
class MyGalleryEksport extends React.Component {
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

export default MyGalleryEksport;
