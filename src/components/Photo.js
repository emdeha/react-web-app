import React from 'react';
import { connect } from 'react-redux';

import { store } from '../redux/store';
import { makeFavorite, showError } from '../redux/actions';

const Photo = function ({ photoData, onMakeFavorite }) {
  return (
    <div class="photo">
      <img src={photoData.thumbnailUrl} alt={photoData.thumbnailUrl} />
      <div>{photoData.title}</div>
      <button onClick={() => onMakeFavorite()}>Make favorite</button>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    photoData: state.currentAlbum.photos.find(photo => photo.id === ownProps.photoId)
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMakeFavorite: () => {
      const photo = store.getState()
        .currentAlbum.photos.find(photo => photo.id === ownProps.photoId);
      if (!photo) {
        dispatch(
          showError(new Error(`No photo with id: ${ownProps.photoId}`))
        );
        return;
      }

      dispatch(makeFavorite(photo));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photo);
