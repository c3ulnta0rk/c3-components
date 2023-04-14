import { C3FileViewerConfig } from '../models/file-viewer-config.model';

export const DEFAULT_CONFIG: C3FileViewerConfig = {
  btnContainerClass: 'btn-container',
  btnClass: 'default',
  btnSubClass: 'material-icons',
  zoomFactor: 0.1,
  containerBackgroundColor: '#ccc',
  wheelZoom: false,
  allowFullscreen: true,
  allowKeyboardNavigation: true,
  btnShow: {
    zoomIn: true,
    zoomOut: true,
    rotateClockwise: true,
    rotateCounterClockwise: true,
    next: true,
    prev: true,
    reset: true,
  },
  btnIcons: {
    zoomIn: {
      text: 'zoom_in',
    },
    zoomOut: {
      text: 'zoom_out',
    },
    rotateClockwise: {
      text: 'rotate_right',
    },
    rotateCounterClockwise: {
      text: 'rotate_left',
    },
    next: {
      text: 'arrow_right',
    },
    prev: {
      text: 'arrow_left',
    },
    fullscreen: {
      text: 'fullscreen',
    },
    reset: {
      text: 'restore',
    },
  },
};
