import React from "react";
import Linechart from "./Linechart";
import { useState, useEffect } from "react";

const TIME_RAGE_IN_MILLISECONDS = 30 * 1000;
const ADDING_DATA_INTERVAL_IN_MILLISECONS = 1000;
const ADDING_DATA_RAITO = 0.8;

export default ()=>{
    const nameList = ["banana","apple","orange"];
    const defaultDataList = nameList.map(name=>({
        name: name,
        data:[]
    }));
    const [dataList, setDataList] = useState(defaultDataList);

    useEffect(()=> {
        const addDataRandomly = data => {
            if(Math.random()< 1-ADDING_DATA_RAITO) {
                return data;
            }
            return [
                ...data,
                {
                    x: new Date(),
                    y: data.length * Math.random()
                }
            ]
        };
        const interval = setInterval(()=> {
            setDataList(
                dataList.map(val => {
                    return {
                        name: val.name,
                        data: addDataRandomly(val.data)
                    };
                })
            );
        }, ADDING_DATA_INTERVAL_IN_MILLISECONS);

        return () => clearInterval(interval);
    });
    
    return (
        <div>
          <Linechart
            dataList={dataList}
            range={TIME_RAGE_IN_MILLISECONDS}
          />
        </div>
    );
}