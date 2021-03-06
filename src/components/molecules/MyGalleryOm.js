import React from 'react';
import ImageGallery from 'react-image-gallery';
import styled from 'styled-components';
import img1 from '../../assets/img/war.jpg';
import img2 from '../../assets/img/war2.jpg';

const images = [
  {
    original: `${img1}`,
    originalHeight: 400,
    originalWidth: 400,
  },
  {
    original: `${img2}`,
    originalHeight: 400,
    originalWidth: 400,
  },
];
const ContenerDiv = styled.div`
  width: 80%;
  height: 80%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 741px) {
    display: none;
  }
`;

class MyGalleryOm extends React.Component {
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

export default MyGalleryOm;
