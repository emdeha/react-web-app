import {
  SET_CURRENT_ALBUM,
  REMOVE_CURRENT_ALBUM,
  MAKE_FAVORITE,
  SHOW_ERROR,
  LOAD_ITEMS,
  LOAD_ITEMS_WITH_ERROR
} from './actionTypes';

export const setCurrentAlbum = (photos, albumId) => {
  return {
    type: SET_CURRENT_ALBUM,
    photos,
    albumId
  };
};

export const removeCurrentAlbum = () => {
  return {
    type: REMOVE_CURRENT_ALBUM
  };
};

export const makeFavorite = (photo) => {
  return {
    type: MAKE_FAVORITE,
    photo
  };
};

export const showError = (error) => {
  return {
    type: SHOW_ERROR,
    error
  };
};

export const loadItems = (items) => {
  return {
    type: LOAD_ITEMS,
    items
  };
};

export const loadItemsWithError = (error) => {
  return {
    type: LOAD_ITEMS_WITH_ERROR,
    error
  };
};
