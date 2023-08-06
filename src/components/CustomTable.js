import { useState } from "react";

const CustomTable = ({title, data,name }) => {

    const rowObj = {0:'mean','1':'median',2:'mode'}

        const getTableRow = () =>{
            let tableRowsData = []
            let rowHead = [`${name} Mean`, `${name} Median`, `${name} Mode`]
            for(let i=0; i<3; i++){
                let propKeyValue = data.reduce((prev,curr,index)=>{
                    return prev = {...prev,[`${rowObj[i]}-${index}`]:curr[`${rowObj[i]}`]}
                },{})
                let obj ={messaure:rowHead[i],...propKeyValue}
                tableRowsData.push(obj)
                
            }
            return tableRowsData
        }
        
    const [tableRows,] = useState(getTableRow())

    const tableHead = data.reduce((prev,curr)=>{
        return prev=[...prev,`Class ${curr.key}`]
    },['Measure'])




    const getTableColumnData = (item, index) => {

        let tdData = tableHead.slice(1).map((_, idx) => (
          <td key={`${index}-${idx}`}>
            {item[`${rowObj[index]}-${idx}`]?.toFixed(3)}
          </td>
        ));
        return tdData;
      };

  return (
    <div className="table-wrapper">
        {title && <h2 className="table-title">{title}</h2>}
      <table className="custom-table">
        <thead>
            <tr>
            {tableHead.map((item,index)=>{
                return (
                    <th key={index}>{item}</th>
                )
            })}
            </tr>
         
        </thead>
        <tbody>
           {tableRows?.map((item,index)=>{
            return(
            <tr key={index}>
            <td>{item.messaure}</td>
              {getTableColumnData(item,index)}
            </tr>
            )
           })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
