import React from 'react';
import { connect } from 'react-redux';

import { store } from '../redux/store';
import { setCurrentAlbum } from '../redux/actions';

const Album = function ({ onClick, albumData, id }) {
  return (
    <div class="album" onClick={onClick}>
      <img src={albumData[0].thumbnailUrl} alt={albumData[0].thumbnailUrl} />
      <div>{id}</div>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  const albumData = ownProps.id === 'favorite-photos'
    ? state.favoritePhotos
    : state.items[ownProps.id];
  return {
    albumData,
    albumId: ownProps.id
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => {
      if (ownProps.id === 'favorite-photos') {
        dispatch(
          setCurrentAlbum(
            store.getState().favoritePhotos,
            ownProps.id
          )
        );
        return;
      }

      dispatch(
        setCurrentAlbum(
          store.getState().items[ownProps.id],
          ownProps.id
        )
      );
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
