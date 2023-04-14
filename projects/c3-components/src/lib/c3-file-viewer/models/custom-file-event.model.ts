export class CustomFileEvent {
  public name: string;
  public fileUrl: string;

  constructor(name: string, fileUrl: string) {
    this.name = name;
    this.fileUrl = fileUrl;
  }
}
