import { useEffect } from "react";
import { YOUTUBE_SUGGESTION_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addSuggestions } from "../utils/searchSlice";

const useSuggestSearch=(searchTxt)=>{
const searchCache=useSelector((store)=>store.search);
const dispatch=useDispatch();
const getSuggestions= async()=>{
 const response=await fetch(YOUTUBE_SUGGESTION_API+searchTxt);
 const json=await response.json();
 dispatch(addSuggestions([searchTxt],[json[1]]))
};


useEffect(()=>{
   const timer=setTimeout(() => {
    getSuggestions();
   }, 2000); 

   return(
      ()=>{
         clearTimeout(timer);
      }
   );
},[searchTxt])

};

export default useSuggestSearch;