import { Observable } from 'rxjs';

export type VariantFile = {
  size: number;
  fileName: string;
  contentType: string;
  location: string;
};

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
  alternativeVersions?: VariantFile[];
}
