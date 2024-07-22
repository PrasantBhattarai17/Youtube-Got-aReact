import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilterdata } from '../Store/filterSlice'; // Ensure correct path and action name

const useFilterHook = () => {
    const dispatch = useDispatch();
    const videoData = useSelector((store) => store.youtube.videoData);
    const searchh = useSelector((store) => store.search);

    useEffect(() => {
        if (!videoData) return;

        const searchKeys = Object.keys(searchh)[Object.keys(searchh).length - 1];
        if (!searchKeys) return;

        const filter = (searchKeys, videoData) => {
            const filterData = videoData.filter((data) =>
                data?.snippet?.title.toLowerCase().includes(searchKeys.toLowerCase())
            );
            return filterData;
        };

        const getdata = () => {
            const data = filter(searchKeys, videoData);
            dispatch(addFilterdata(data)); // Correctly calling the action creator
        };

        getdata();
    }, [searchh, dispatch, videoData]); // Correct dependency array
};

export default useFilterHook;
