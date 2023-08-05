


export const groupingData = (data) =>{
   const groupedData = data.reduce((prevData,curr)=>{
        if(prevData[curr['Alcohol']]){
            prevData[curr['Alcohol']] = [...prevData[curr['Alcohol']],curr]
        }else{
         prevData[curr['Alcohol']] = [curr]
        }
    return prevData
   },{})

   return groupedData

}


export const makeArray = (data) =>{
     return data.reduce((prev,curr)=>{
        return prev = [...prev,curr.Flavanoids]
     },[])
}

export const Mean = (data) =>{
    // console.log(data)
   const sum = data.reduce((preSum,curr)=>{
    return preSum=preSum+ +curr
   },0)

//    console.log(sum)

   return sum/data.length;
}


export const Median = (data) =>{
    const sortedData =  data.sort((a,b)=>a-b)
    return sortedData.length % 2 ===0 ? (+sortedData[sortedData.length/2-1]+ +sortedData[sortedData.length/2]) / 2 : +sortedData[Math.floor(sortedData.length/2)]
}


export const Mode = (data) =>{
    // console.log(data)
    const frequencyTable = {}
    data.forEach(element => frequencyTable[element] = frequencyTable[element]+1 || 1)

    let modes = []
    let maxFq = 0;
    for(const key in frequencyTable){
        if(frequencyTable[key]>maxFq){
            modes = [+key]
          maxFq = frequencyTable[key]
        }else if(frequencyTable[key]==maxFq){
            modes.push(+key)
        }
    }

    if(modes.length === Object.keys(frequencyTable).length){
        return 0
    }else{
        return modes[0]
    }

    // return modes
}

