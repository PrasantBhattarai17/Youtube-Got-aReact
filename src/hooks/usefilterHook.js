
import { useDispatch, useSelector } from "react-redux";
import addFilterData from "../utils/filterSlice"; 
import { useEffect, useState } from "react";

const useFilterHook=()=>{
    const dispatch = useDispatch();
    const videoData = useSelector((store) => store.youtube.videoData);
    const searchh = useSelector((store) => store.search);
    const [filteredData,setFilteredList]=useState([]);

    useEffect(() => {
        if (!videoData) return;
        
        // console.log(Object.keys(searchh)[Object.keys(searchh).length - 1]);
        const searchKeys = Object.keys(searchh)[Object.keys(searchh).length - 1];
        if (searchKeys.length === 0) return;


    const filter=(searchKeys,videoData)=>{
        console.log(searchKeys)
        const filterData = videoData.filter((data)=>data?.snippet?.title.toLowerCase().includes(searchKeys.toLowerCase()));
        return filterData;
    };
    const getdata=()=>{
        const data=filter(searchKeys,videoData);
        setFilteredList(data);
        console.log(filteredData)
    }
    getdata();
}, [videoData, searchh]);
};


export default useFilterHook;