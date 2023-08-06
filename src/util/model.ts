export interface WineDataType {
    Alcohol: number;
    "Malic Acid": number | string;
    Ash: number | string;
    "Alcalinity of ash": number | string;
    Magnesium: number | string;
    "Total phenols": number | string;
    Flavanoids: number | string;
    "Nonflavanoid phenols": number | string;
    Proanthocyanins: string | number ; 
    "Color intensity": number | string;
    Hue: number | string;
    "OD280/OD315 of diluted wines": number | string;
    Unknown: number | string;
    Gamma?:number
  }


  export interface TableRow {
    messaure: string;
    [key: string]: number | string;
  }
  

 export interface DataItem {
    key: number;
    mean: number;
    median: number;
    mode: number;
  }

  export interface CustomTableProps{
    title:string,
    name:string,
    data:DataItem[]
  }
  
