export class NavBarData {
  constructor(name: string, onClick: any, icon: string) {
    this.name = name;
    this.onClick = onClick;
    this.icon = icon;
  }
  name: string | undefined;
  onClick!: (($event: any) => void);
  icon: string | undefined;
}
