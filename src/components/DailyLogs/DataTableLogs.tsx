import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { server_calls_logs } from "../../api/server";
import { useGetDataLog } from "../../custom-hooks/FetchData";

import background from '../../assets/images/augustine-wong-li0iC0rjvvg-unsplash.jpg'
import Modal from './ModalLogs';

const column: GridColDef[] = [
    { field: "date", headerName: "Date", flex: 2},
    { field: "weight", headerName: "Weight", flex: 2},
    { field: "steps", headerName: "Steps", flex: 2},
    { field: "sleep", headerName: "Sleep", flex: 2},
    { field: "work_out", headerName: "Work Out", flex: 2}
];

function DataTable() {
    const [ open, setOpen ] = useState(false);
    const { logData, getData } = useGetDataLog();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls_logs.delete_log(selectionModel[0]);
        getData();
        console.log(` Selection Model: ${selectionModel}`)
        setTimeout(() => { window.location.reload}, 500);   
    }

    return (
        <>
            <h2 className='database-title flex justify-center text-2xl pt-3 text-blue-100'>
                    Add your daily logs and keep track of your progress!
                <i className="fa-solid fa-spa ml-5 text-2xl text-green-600"></i>
            </h2>
            <Modal
                id= { selectionModel}
                open= { open }
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
            <div className={ open ? "hidden" : "container mx-10 pb-10 flex flex-col"}
                style = {{ height: 458, width: '110%' }}
            >
                <DataGrid rows = { logData } columns = { column }
                    onRowSelectionModelChange={ (item: any) => {
                        setSelectionModel(item)
                    }}
                    getRowHeight={() => 'auto'}
                    className="datatable-recipes bg-slate-400"
                    style= {{ backgroundImage: `url(${ background })`}}
                />
            </div>
        </>
    )
}

export default DataTable