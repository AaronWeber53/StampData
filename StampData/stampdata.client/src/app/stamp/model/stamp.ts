export class Stamp {
  constuctor() { }
  public constructor(init?: Partial<Stamp>) {
    Object.assign(this, init);
  }
  public id: number | undefined;
  public scottNumber: string = '';
  public country: string = '';
  public year: number = 0;
  public description: string = '';
  public image: File | undefined;
  public imageUrl: string = '';
  get imageURL() {
    return '/api/stamp/GetImage/' + this.id;

  }
} 
