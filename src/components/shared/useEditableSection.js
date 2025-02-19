import { useState, useCallback,  } from 'react';
import {v4 as uuidv4} from 'uuid';



export default function useEditableSection(initialData, setGlobalData){
    console.log(typeof initialData, initialData);

    const [tempData, setTempData] = useState(initialData.map(item => ({...item})));
    const [isEditing, setEditing] = useState(false);

    // used to handle save/edit button
    function handleClick(){
        // Save mode
        if(isEditing){
            setGlobalData([
                ...tempData
            ]);
            setEditing(false);            
        }else{
            setTempData(initialData.map(item => ({...item})));
            setEditing(true);
        }
    }

    // used to display input as it is typed
    const handleChange = useCallback((e, id) => {
        setTempData(prevData => 
            prevData.map((item) =>
            item.id === id ?
            {
            ...item,
            [e.target.name]: e.target.value
            }
            :item)
        )
    }, []);

    const  handleRemove = (id) =>{
        setGlobalData(prevData => prevData.filter(item => item.id !== id));
        console.log("Removed item with id: ", id);
    }

    const handleAdd = () =>{
        setTempData(prevData => [...prevData, {id: uuidv4()}]);
    }

    return { tempData, isEditing, handleClick, handleChange, handleRemove, handleAdd }
}
