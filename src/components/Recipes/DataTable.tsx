import Modal from './Modal'
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { server_calls_recipes } from "../../api/server";
import useGetDataRecipe from "../../custom-hooks/FetchData";
import { Link } from 'react-router-dom';
import background from '../../assets/images/augustine-wong-li0iC0rjvvg-unsplash.jpg'

const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 110 },
    { field: "meal", headerName: "Meal", width: 110 },
    { field: "ingridients", headerName: "Ingredients", width: 150 },
    { field: "full_recipe", headerName: "Full Recipe", width: 300},
];

function DataTable() {
    const [ open, setOpen ] = useState(false);
    const { recipeData, getData } = useGetDataRecipe();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }
    
    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls_recipes.delete_recipe(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => { window.location.reload() }, 500)
    }

    return (
        <>
        <h2 className='database-title flex justify-center text-2xl pt-3 text-yellow-500'>RECIPES DATABASE
            <i className="fa-solid fa-kitchen-set ml-5 text-2xl"></i>
        </h2>

        {/* MODAL */}
        <Modal 
            id = {  selectionModel  }
            open = { open }
            onClose = { handleClose }
        />
        {/* BUTTONS SECTION */}
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
        {/* DATATABLE */}
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style = {{ height: 400, width: '90%' }}
        >
            <DataGrid rows = { recipeData } columns = { columns }
                onRowSelectionModelChange={ (item: any) => {
                    setSelectionModel(item)
                }}
                getRowHeight={() => 'auto'}
                className='datatable-recipes bg-slate-400'
                style= {{ backgroundImage: `url(${ background })`}}
                />
        </div>
            <div className={ open ? "hidden" : ""}>
                <hr className='m-5 text-blue-300'/>
                <div className="flex flex-col justify-center ">
                    <h4 className='flex justify-center text-yellow-400 text-2xl'>
                        Want to find new Recipes?
                        <i className="fa-solid fa-cookie-bite ml-2 mt-1"></i>
                    </h4>
                    <Link to="/apirecipes" className= "flex justify-center">
                        <button className='button-dashboard-api ml-24 flex justify-center p-5'>
                            Click here!
                            <i className="fa-solid fa-arrow-up-right-from-square m-2"></i>
                        </button>
                    </Link>
                </div>
            </div>
    </>
    )
}
export default DataTable;