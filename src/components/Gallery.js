import React from 'react';
import { connect } from 'react-redux';

import { store } from '../redux/store';
import { loadItems, loadItemsWithError } from '../redux/actions';

import Album from './Album';
import Photos from './Photos';

class Gallery extends React.Component {
  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(
        (result) => {
          store.dispatch(
            loadItems(result)
          );
        },
        (error) => {
          store.dispatch(
            loadItemsWithError(error)
          );
        }
      );
  }

  render() {
    const state = this.props;

    if (state.error) {
      return (
        <div class="error">
          Error: {state.error}
        </div>
      );
    } else if (!state.isLoaded) {
      return <div>Loading...</div>;
    }

    if (state.currentAlbum) {
      return <Photos />;
    }

    const allAlbums = Object.keys(state.items).map((key) => {
      return <Album id={key} key={key} />;
    });

    const favoritePhotos = () => {
      // Made it a function, so we don't have to check for
      // this.state.favoritePhotos here
      return <Album id="favorite-photos" />;
    };

    return (
      <div class="container">
        {
          state.favoritePhotos.length ? favoritePhotos() : null
        }
        <h1>All albums</h1>
        <div class="items">{allAlbums}</div>
      </div>
    );
  }
}

export default connect(
  (state) => ({ ...state })
)(Gallery);
