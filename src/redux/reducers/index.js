import {
  SET_CURRENT_ALBUM,
  REMOVE_CURRENT_ALBUM,
  MAKE_FAVORITE,
  SHOW_ERROR,
  LOAD_ITEMS,
  LOAD_ITEMS_WITH_ERROR
} from '../actionTypes';

const initialState = {
  error: null,
  isLoaded: false,
  items: {},
  currentAlbum: null,
  favoritePhotos: []
};

function groupByAlbum(items) {
  return items.reduce((acc, val) => {
    if (acc[val.albumId]) {
      acc[val.albumId].push(val);
    } else {
      acc[val.albumId] = [val];
    }
    return acc;
  }, {});
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_ALBUM:
      return Object.assign({}, state, {
        currentAlbum: {
          photos: action.photos,
          albumId: action.albumId
        }
      });
    case REMOVE_CURRENT_ALBUM:
      return Object.assign({}, state, {
        currentAlbum: null
      });
    case MAKE_FAVORITE:
      return Object.assign({}, state, {
        favoritePhotos: state.favoritePhotos.concat([action.photo])
      });
    case SHOW_ERROR:
      return Object.assign({}, state, {
        error: action.error
      });
    case LOAD_ITEMS:
      return Object.assign({}, state, {
        isLoaded: true,
        items: groupByAlbum(action.items)
      });
    case LOAD_ITEMS_WITH_ERROR:
      return Object.assign({}, state, {
        isLoaded: true,
        error: action.error
      });
    default: return state
  }
};
