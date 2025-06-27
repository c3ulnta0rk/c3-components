export const SUPPORTED_MIME_TYPES: string[] = [
  // Documents et Applications
  // 'text/html',
  // 'text/css',
  // 'text/plain',
  // 'application/javascript',
  // 'application/json',
  // 'application/xml',
  'application/pdf',

  // Images
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/svg+xml',
  'image/webp',
  'image/avif',
  'image/bmp',
  'image/x-icon',

  // Audio et Vidéo
  // 'audio/mpeg',
  // 'audio/ogg',
  // 'audio/wav',
  // 'audio/webm',
  'video/mp4',
  'video/webm',
  'video/ogg',

  // Polices de Caractères
  // 'font/woff',
  // 'font/woff2',
  // 'font/ttf',
  // 'font/otf',
];

export function isMimeTypeSupported(mimeType: string): boolean {
  return SUPPORTED_MIME_TYPES.includes(mimeType);
}
