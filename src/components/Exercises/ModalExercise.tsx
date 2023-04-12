import React from 'react'
import ExerciseForm from './ExerciseForm';
import Exercices from '../../pages/Exercises';

type Props = {
    id: string[],
    open : Boolean,
    onClose?: () => void
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>);
    return (
        <div
            onClick= { props.onClose }
            className= "modal-body z-1"
        >
            <div
                className='max-w-600px w-2/5 fixed flex z-1 bg-white my-32 rounded'
                onClick={(e) => {
                   e.stopPropagation()
                }}    
            >
                <div className="modal-body">
                    <div className="flex flex-row space-apart">
                        <p className="flex justify-center m-3 p-2 rounded  cursor-pointer"
                        onClick={props.onClose}>
                            <i className="fa-solid fa-left-long text-2xl hover:text-red-500 text-sky-800"></i>
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <ExerciseForm id= {props.id}></ExerciseForm>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal