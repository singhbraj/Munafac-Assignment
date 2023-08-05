import { WineData } from '../util/WineData'
import { Mean, Median, Mode, groupingData, makeArray } from '../util/grouping'

const useMeanMedianMode = () => {

    const FlavanoidsClassWise= []
    const groupedData =  groupingData(WineData)
    const keys = Object.keys(groupedData)

    for(const key of keys){
        const Flavanoids = makeArray(groupedData[key])
        const mean  = Mean(Flavanoids)
        const median = Median(Flavanoids)
        const mode = Mode(Flavanoids)
        FlavanoidsClassWise.push({key:key,mean:mean,median:median,mode:mode})
      }

  return FlavanoidsClassWise

}

export default useMeanMedianMode