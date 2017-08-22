import * as types from './types';
import { CameraRoll } from 'react-native';

export function addImage(image) {
  return {
    type: types.ADD_SELECTED_IMAGE,
    key: image.uri,
    image: image,
  }
}

export function deleteImage(key) {
  return {
    type: types.DELETE_SELECTED_IMAGE,
    key: key,
  }
}

export function fetchImages(params) {
  return (dispatch, getState) => {
    dispatch(fetchingImages());
    return CameraRoll.getPhotos(params).then( (data) => {
      const assets = data.edges;
      const images = assets.map( asset => asset.node.image);
      dispatch(setImages(images));

      const page_info = data.page_info;
      dispatch(setPageInfo(page_info));
    }).catch( (e)  => {
      console.log(e);
    });
  }
}

export function setImages(images) {
  return {
    type: types.SET_IMAGES,
    images: images,
  }
}

export function setPageInfo(info) {
  return {
    type: types.SET_PAGE_INFO,
    page_info: info,
  }
}

export function fetchingImages() {
  return {
    type: types.FETCHING_IMAGES,
  }
}

export function resetPicker() {
  return {
    type: types.RESET_PICKER,
  }
}
