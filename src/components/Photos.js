import React from 'react';
import { connect } from 'react-redux';

import { removeCurrentAlbum } from '../redux/actions';

import Photo from './Photo';

const Photos = function ({ albumId, onBackButtonClick, photos }) {
  return (
    <div class="container">
      <h1>Displaying photos for: {albumId}</h1>
      <button onClick={onBackButtonClick}>Back</button>
      <div class="items">
        {
          photos.map(photo => {
            return (
              <Photo albumId={albumId} photoId={photo.id} key={photo.id} />
            );
          })
        }
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    photos: state.currentAlbum.photos,
    albumId: state.currentAlbum.albumId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onBackButtonClick: () => dispatch(removeCurrentAlbum())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photos);
