import React from 'react';
import ImageGallery from 'react-image-gallery';
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

class MyGalleryOm extends React.Component {
  render() {
    return (
      <div style={{ width: '80%', height: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
        <ImageGallery
          items={images}
          autoPlay={true}
          showThumbnails={false}
          showNav={false}
          showPlayButton={false}
          useBrowserFullscreen={true}
        />
      </div>
    );
  }
}

export default MyGalleryOm;
