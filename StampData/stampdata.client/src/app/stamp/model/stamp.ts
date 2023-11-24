export class Stamp {
  constuctor() { }
  public constructor(init?: Partial<Stamp>) {
    Object.assign(this, init);
  }
  public id: number | undefined;
  public scottNumber: string | undefined;
  public country: string | undefined;
  public year: number | undefined;
  public description: string | undefined;
  public image: any | undefined;
}
