import { C3FileViewerConfig, FileMetadata } from 'projects/c3-components/src/public-api';

export const crabbyImgs: Array<FileMetadata> = [
  {
    name: '123645-Crabby - 1',
    metadata: {
      originalName: 'Crabby - 1',
    },
    type: 'image/png',
    location: 'img/crabby-1.png',
    lastModified: new Date(),
  },
  {
    name: '123645-Crabby - 2',
    metadata: {
      originalName: 'Crabby - 2',
    },
    type: 'image/jpeg',
    location: 'img/crabby-2.jpeg',
    lastModified: new Date(),
  },
  {
    name: '123645-Crabby - 3',
    metadata: {
      originalName: 'Crabby - 3',
    },
    type: 'image/png',
    location: 'img/crabby-3.png',
    lastModified: new Date(),
  },
  {
    name: '123645-Crabby - 4',
    metadata: {
      originalName: 'Crabby - 4',
    },
    type: 'image/png',
    location: 'img/crabby-4.png',
    lastModified: new Date(),
  },
  {
    name: '123645-Crabby - 5',
    metadata: {
      originalName: 'Crabby - 5',
    },
    type: 'image/png',
    location: 'img/crabby-5.png',
  },
  {
    name: '123645-Crabby - 6',
    metadata: {
      originalName: 'Crabby - 6',
    },
    type: 'image/png',
    location: 'img/crabby-6.png',
  },
  {
    name: '123645-PDF',
    metadata: {
      originalName: 'PDF.pdf',
    },
    type: 'application/pdf',
    location: 'img/r.pdf',
  },

  {
    location: 'zip/test.zip',
    type: 'application/zip',
    name: 'chelou-test.zip',
    metadata: {
      originalName: 'test.zip',
    },
  },

  {
    location: 'video/Crabe_ZZ_Top.mp4',
    type: 'video/mp4',
    name: 'Crabe_ZZ_Top.mp4',
    metadata: {
      originalName: 'Crabe_ZZ_Top.mp4',
    },
  },

  {
    location:
      'https://upload.wikimedia.org/wikipedia/commons/7/79/Terminator_in_Madame_Tussaud_London_%2833465711484%29.jpg',
    type: 'image/jpeg',
    name: 'Terminator_in_Madame_Tussaud_London.jpg',
    metadata: {
      originalName: 'Terminator_in_Madame_Tussaud_London.jpg',
    },
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
    download: true,
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
