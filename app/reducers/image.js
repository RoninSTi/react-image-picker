import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const selectedImages = createReducer([], {
  [types.ADD_SELECTED_IMAGE](state, action) {
    return [...state, action.image];
  },

  [types.DELETE_SELECTED_IMAGE](state, action) {
    return state.filter((image) => image.uri !== action.key);
  },

  [types.RESET_PICKER](state, action) {
    return [];
  }
});

export const selectedImageCount = createReducer(0, {
  [types.ADD_SELECTED_IMAGE](state, action) {
    return state + 1;
  },

  [types.DELETE_SELECTED_IMAGE](state, action) {
    return state - 1;
  },

  [types.RESET_PICKER](state, action) {
    return 0;
  }
});

export const fetchedImages = createReducer([], {
  [types.SET_IMAGES](state, action) {
    return state.concat(action.images);
  },

  [types.RESET_PICKER](state, action) {
    return [];
  }
});

export const pageInfo = createReducer({}, {
  [types.SET_PAGE_INFO](state, action) {
    return action.page_info;
  },

  [types.RESET_PICKER](state, action) {
    return {};
  }
});

export const isLoading = createReducer(false, {
  [types.FETCHING_IMAGES](state, action) {
    return true;
  },

  [types.SET_IMAGES](state, action) {
    return false;
  }
});