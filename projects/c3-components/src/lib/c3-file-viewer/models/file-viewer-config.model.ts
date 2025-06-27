import { HttpClient } from '@angular/common/http';

export interface C3FileViewerConfig {
  btnContainerClass?: string;
  btnClass?: string;
  btnSubClass?: string;
  zoomFactor?: number;
  containerBackgroundColor?: string;
  wheelZoom?: boolean;
  allowFullscreen?: boolean;
  allowKeyboardNavigation?: boolean;
  customClient?: HttpClient['get'];

  minHeight?: number | string;
  minWidth?: number | string;
  width?: number | string;
  maxHeight?: number | string;
  height?: number | string;
  maxWidth?: number | string;

  btnShow?: {
    zoomIn?: boolean;
    zoomOut?: boolean;
    rotateClockwise?: boolean;
    rotateCounterClockwise?: boolean;
    next?: boolean;
    prev?: boolean;
    reset?: boolean;
    download?: boolean;
  };

  btnIcons?: {
    zoomIn?: MultiBtn['btn'];
    zoomOut?: MultiBtn['btn'];
    rotateClockwise?: MultiBtn['btn'];
    rotateCounterClockwise?: MultiBtn['btn'];
    next?: MultiBtn['btn'];
    prev?: MultiBtn['btn'];
    fullscreen?: MultiBtn['btn'];
    reset?: MultiBtn['btn'];
    download?: MultiBtn['btn'];
  };

  customBtns?: Array<{
    name: string;
    icon: MultiBtn['btn'];
  }>;
}

interface MultiBtn {
  btn: {
    classes?: string;
    text?: string;
  };
}
