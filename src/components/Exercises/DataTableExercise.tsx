import ModalExercise from './ModalExercise';
import { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { server_calls_exercises } from '../../api/server';
import { useGetDataExercise } from '../../custom-hooks/FetchData';
import { Modal } from '@mui/material';
import { Link } from 'react-router-dom';
import background from '../../assets/images/augustine-wong-li0iC0rjvvg-unsplash.jpg'

const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 2},
    { field: "muscle", headerName: "Muscle", flex: 2},
    { field: "type_exercise", headerName: "Type Exercise", flex: 2},
    { field: "description", headerName: "Equipment", flex: 2},
    { field: "difficulty", headerName: "Difficulty", flex: 2},
];

function DataTableExercise() {
    const [ open, setOpen ] = useState(false);
    const { exerciseData, getData } = useGetDataExercise();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([]);

    const handleOpen = () => {
        setOpen(true)
    }
    
    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls_exercises.delete_exercise(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`);
        setTimeout( () => {window.location.reload()}, 500)
    }

    return (
        <>
        <h2 className='database-title flex justify-center text-2xl pt-3 text-blue-100'>Here's your database where you can ADD, UPDATE or DELETE Exercises
            <i className="fa-solid fa-ranking-star ml-5 text-2xl"></i>
        </h2>
            <ModalExercise
                id= { selectionModel }
                open = { open }
                onClose = { handleClose }
            />
            <div className='flex flex-row justify-center'>
                <div className = "multi-button mb-5">
                    <button
                        className= "multi-button-label hover:text-white"
                        onClick = { handleOpen }
                    >
                        <i className="fa-solid fa-folder-plus"></i>
                        <span>ADD</span>
                    </button>
                    <button
                        className= "multi-button-label p-3 hover:text-white"
                        onClick = { handleOpen }
                    >
                        <i className="fa-regular fa-pen-to-square"></i>
                        <span>UPDATE</span>
                    </button>
                    <button
                        className= "multi-button-label p-3 hover:text-white"
                        onClick = { deleteData }
                    >
                        <i className="fa-solid fa-folder-minus"></i>
                        <span>DELETE</span>
                    </button>
                </div>
            </div>
            <div className={ open ? "hidden" : "container mx-10 flex flex-col items-center"}
            style = {{ height: 400, width: '110%' }}
            >
                <DataGrid rows = { exerciseData } columns = { columns }
                    onRowSelectionModelChange={ ( item:any ) => {
                        setSelectionModel(item)
                    }}
                    getRowHeight={() => 'auto'}
                    className = "datatable bg-slate-400"
                    style= {{ backgroundImage: `url(${ background })`}}
                />
                
            </div>
            <div className={ open ? "hidden" : ""}>
                <hr className='m-5 text-blue-300'/>
                <h4 className='database-title flex justify-center text-yellow-400 text-2xl'>Need ideas for some exercises?
                    <i className="fa-solid fa-stopwatch-20 ml-2"></i>
                </h4>
                <Link to="/apiexercises">
                    <button className='button-dashboard-api flex justify-center p-5'>
                        Click here to find new exercises
                        <i className="fa-solid fa-arrow-up-right-from-square m-2"></i>
                    </button>
                </Link>
            </div>
        </>
    )
}

export default DataTableExercise
