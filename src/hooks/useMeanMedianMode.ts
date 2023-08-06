import { useEffect, useState } from 'react'
import { Mean, Median, Mode, groupingData, makeArray } from '../util/messures'
import { DataItem ,WineDataType} from '../util/model'



const useMeanMedianMode = (wineData:WineDataType[],keyName:keyof WineDataType) => {

  const [dataForMessure,setdataForMessure] = useState<DataItem[] | undefined>(undefined)

  useEffect(()=>{
    const getDataForMessure = () =>{
      const dataForMessure:DataItem[]= []
      const groupedData =  groupingData(wineData)
      const keys = Object.keys(groupedData)
     
      for(const key of keys){
        const keyValue = parseFloat(key);
        const value = groupedData[keyValue];
        const keyData = makeArray(value, keyName);
        const mean = Mean(keyData);
        const median = Median(keyData);
        const mode = Mode(keyData);
        dataForMessure.push({ key: keyValue, mean: mean, median: median, mode: mode });
        }
      setdataForMessure(dataForMessure)
    }

    getDataForMessure()
  },[wineData,keyName])

  return dataForMessure

}

export default useMeanMedianMode