import { useState } from "react";
import { CustomTableProps, TableRow, DataItem } from "../util/model";


const CustomTable:React.FC<CustomTableProps> = ({title, data,name }) => {

    const rowObj: { [key: number]: string } = {0:'mean','1':'median',2:'mode'}

        const getTableRow = (): TableRow[]  =>{
            let tableRowsData : TableRow[] = []
            let rowHead = [`${name} Mean`, `${name} Median`, `${name} Mode`]
            for(let i=0; i<3; i++){
                let propKeyValue = data.reduce((prev,curr,index)=>{
                    return prev = {...prev,[`${rowObj[i]}-${index}`]:curr[`${rowObj[i]}` as keyof DataItem]}
                },{})
                let obj ={messaure:rowHead[i],...propKeyValue}
                tableRowsData.push(obj)
                
            }
            return tableRowsData
        }
        
    const [tableRows] = useState<TableRow[]>(getTableRow())

    const tableHead = data.reduce((prev,curr)=>{
        return prev=[...prev,`Class ${curr.key}`]
    },['Measure'])




    const getTableColumnData = (item:TableRow, index:number) => {

        let tdData = tableHead.slice(1).map((_, idx) => {
          const value = item[`${rowObj[index]}-${idx}`];
          const formattedValue = typeof value === "number" ? Number.isInteger(value) ? value : value.toFixed(3) : value;
         return <td key={`${index}-${idx}`}>
            {formattedValue}
          </td>
        });
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
