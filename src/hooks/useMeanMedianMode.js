import { useEffect, useState } from 'react'
import { Mean, Median, Mode, groupingData, makeArray } from '../util/messures'

const useMeanMedianMode = (wineData,keyName) => {

  const [dataForMessure,setdataForMessure] = useState()

  useEffect(()=>{
    const getDataForMessure = () =>{
      const dataForMessure= []
      const groupedData =  groupingData(wineData)
      const keys = Object.keys(groupedData)
     
      for(const key of keys){
          const keyData = makeArray(groupedData[key],keyName)
          const mean  = Mean(keyData)
          const median = Median(keyData)
          const mode = Mode(keyData)
          dataForMessure.push({key:key,mean:mean,median:median,mode:mode})
        }
      setdataForMessure(dataForMessure)
    }

    getDataForMessure()
  },[wineData,keyName])

  return dataForMessure

}

export default useMeanMedianMode