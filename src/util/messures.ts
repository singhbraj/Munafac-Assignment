
import { WineDataType } from '../util/model';

export const groupingData = (data: WineDataType[]): Record<number, WineDataType[]> => {
    const groupedData: Record<number, WineDataType[]> = data.reduce((prevData, curr) => {
      const Gamma : number = (+curr.Ash * +curr.Hue) / +curr.Magnesium;
      if (prevData[curr['Alcohol']]) {
        prevData[curr['Alcohol']] = [...prevData[curr['Alcohol']], { ...curr, Gamma }];
      } else {
        prevData[curr['Alcohol']] = [{ ...curr, Gamma }];
      }
      return prevData;
    }, {} as Record<number, WineDataType[]>);
  
    return groupedData;
  };


  export const makeArray = (data: WineDataType[], key: keyof WineDataType): number[] => {
    // console.log({key})
    return data.reduce<number[]>((prev, curr) => {
    //   const keyValue = parseFloat(key);
      const value = curr[key];
      if (typeof value === 'number') {
        return [...prev, value];
      }
      return prev;
    }, []);
  };
  

  export const Mean = (data: number[]): number => {
    const sum = data.reduce((preSum, curr) => {
      return preSum = preSum + +curr;
    }, 0);
  
    return sum / data.length;
  };


  export const Median = (data: number[]): number => {
    const sortedData = data.sort((a, b) => a - b);
    return sortedData.length % 2 === 0
      ? (+sortedData[sortedData.length / 2 - 1] + +sortedData[sortedData.length / 2]) / 2
      : +sortedData[Math.floor(sortedData.length / 2)];
  };

  export const Mode = (data: number[]): number => {
    const frequencyTable: { [key: number]: number } = {};
    data.forEach((element) => (frequencyTable[element] = frequencyTable[element] + 1 || 1));
  
    let modes: number[] = [];
    let maxFq = 0;
    for (const key in frequencyTable) {
      if (frequencyTable[key] > maxFq) {
        modes = [+key];
        maxFq = frequencyTable[key];
      } else if (frequencyTable[key] === maxFq) {
        modes.push(+key);
      }
    }
  
    return modes[0];
  };
  

