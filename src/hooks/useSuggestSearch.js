import { useEffect } from "react";
import { YOUTUBE_SUGGESTION_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addSuggestions } from "../utils/searchSlice";

const useSuggestSearch=(searchTxt,setSearchText)=>{
const searchCache=useSelector((store)=>store.search);
const dispatch=useDispatch();
const getSuggestions= async()=>{
 const response=await fetch(YOUTUBE_SUGGESTION_API+searchTxt);
 const json=await response.json();
 dispatch(addSuggestions({[searchTxt]:json[1]}))
 console.log(searchCache)
};


useEffect(()=>{
   const timer=setTimeout(() => {
      if(searchCache[searchTxt])
         setSearchText(searchCache[searchTxt]);
      else
       getSuggestions();
   }, 200); 

   return()=>{
         clearTimeout(timer);
      };
},[searchTxt])

};

export default useSuggestSearch;