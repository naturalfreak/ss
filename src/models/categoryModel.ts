export class CategoryModel{
  id: number;
  name: string;
  icon: string;
  color: string;
  sub: Array<any>;
  constructor(id: number, name: string, icon: string, color: string, sub: Array<any>){
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.sub = sub;
    this.color = this.getColor(color);

  }

 public getColor(color) {

   return colors[color];
  }
}
 const colors = {
  'blue1': '#80ccff',
  'blue2': '#4db8ff',
  'blue3': '#008ae6',
  'blue4': '#006bb3',
  'orange1': '#ffcc00',
  'orange2': '#ff9933',
  'orange3': '#ff6600',
  'orange4': '#ff471a'
}
