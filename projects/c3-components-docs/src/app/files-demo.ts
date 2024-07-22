import {
  C3FileViewerConfig,
  FileMetadata,
} from 'projects/c3-components/src/public-api';

export const crabbyImgs: Array<FileMetadata> = [
  {
    name: 'Crabby - 1',
    type: 'image/png',
    location: 'img/crabby-1.png',
    lastModified: new Date(),
  },
  {
    name: 'Crabby - 2',
    type: 'image/jpeg',
    location: 'img/crabby-2.jpeg',
    lastModified: new Date(),
  },
  {
    name: 'Crabby - 3',
    type: 'image/png',
    location: 'img/crabby-3.png',
    lastModified: new Date(),
  },
  {
    name: 'Crabby - 4',
    type: 'image/png',
    location: 'img/crabby-4.png',
    lastModified: new Date(),
  },
  {
    name: 'Crabby - 5',
    type: 'image/png',
    location: 'img/crabby-5.png',
  },
  {
    name: 'Crabby - 6',
    type: 'image/png',
    location: 'img/crabby-6.png',
  },
];

export const configDemo: C3FileViewerConfig = {
  btnContainerClass: 'other',
  btnClass: 'btn btn-hover-primary px-1',
  btnSubClass: 'material-icons font-size-xl',
  zoomFactor: 0.1,
  wheelZoom: true,
  allowFullscreen: true,
  allowKeyboardNavigation: true,
  height: '640px',
  btnShow: {
    zoomIn: true,
    zoomOut: true,
    rotateClockwise: true,
    rotateCounterClockwise: true,
    next: false,
    prev: false,
    reset: true,
  },
  btnIcons: {
    next: {
      text: 'navigate_next',
    },
    prev: {
      text: 'navigate_before',
    },
  },
  customBtns: [],
};
