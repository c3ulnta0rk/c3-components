import { Observable } from 'rxjs';

export interface FileMetadata {
  name: string;
  size?: number;
  type: string;
  lastModified?: Date;
  created?: Date;
  extension?: string;
  location: string;
  objectUrl?: Observable<string>;
  metadata?: Record<string, any>;
}
