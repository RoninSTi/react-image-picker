import { Dimensions } from 'react-native';

const MIN_MARGIN = 10;
const IMAGE_WIDTH = 100;
const BACKGROUND_COLOR = '#E7E7E7';
const FOREGROUND_COLOR = '#056ECF';
const HEADER_SHOULD_DISPLAY = true;
const FONT_SIZE = 20;
const FONT_FAMILY = 'Arial';
const HEADER_HEIGHT = 64;
const BORDER_WIDTH = 5;
const HEADER_TITLE_COLOR = 'white';
const HEADER_SHADOW_SHOULD_DISPLAY = true;
const IMAGE_FETCH_COUNT = 25;

export default BASE_THEME = {
  settings: {
    imageFetchCount: IMAGE_FETCH_COUNT,
  },

  style: {
    backgroundColor: BACKGROUND_COLOR,
    foregroundColor: FOREGROUND_COLOR,
    fontSize: FONT_SIZE,
    fontFamily: FONT_FAMILY,
  },
  
  grid: {
    minMargin: MIN_MARGIN,
    margin: margin(),
    numColumns: numColumns(),
  },

  gridItem: {
    imageWidth: IMAGE_WIDTH,
    imageHeight: IMAGE_WIDTH,
    borderWidth: BORDER_WIDTH,
  },

  header: {
    shouldDisplay: HEADER_SHOULD_DISPLAY,
    height: HEADER_HEIGHT,
    backgroundColor: FOREGROUND_COLOR,
    color: HEADER_TITLE_COLOR,
    displayShadow: HEADER_SHADOW_SHOULD_DISPLAY,
  }
}

function numColumns(imageWidth = IMAGE_WIDTH, margin = MIN_MARGIN) {
  const {height, width} = Dimensions.get('window');
  return Math.floor(width / (imageWidth + (2 * margin)));
}

function margin(imageWidth = IMAGE_WIDTH) {
  
  const columns = numColumns(imageWidth);
  const {height, width} = Dimensions.get('window');

  console.log('width: ' + width);
  console.log('image width: ' + imageWidth);
  console.log('columns: ' + columns);
  return (width - (columns * imageWidth))/(2 * (columns + 1));
}

export function themeFromOverride(state, override = {}) {
  const imageWidth = (override.gridItem && override.gridItem.imageWidth && override.gridItem.imageWidth !== 'undefined') ? override.gridItem.imageWidth:IMAGE_WIDTH;
  return Object.assign({},
      { settings: Object.assign({},
        state.settings,
        override.settings)
      }, 
      
      { style: Object.assign({},
        state.style,
        override.style)
      },

      { grid: Object.assign({},
        state.grid,
        override.grid,
        {
          margin: margin(imageWidth),
          numColumns: numColumns(imageWidth),
        })
      },
      
      { gridItem: Object.assign({},
        state.gridItem,
        override.gridItem)
      },

      { header: Object.assign({},
        state.header,
        override.header)
      },
    );
}