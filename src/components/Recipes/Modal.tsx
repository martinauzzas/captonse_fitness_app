import RecipesForm from './RecipesForm';

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
                className='max-w-600px w-2/5 fixed flex z-1 my-36 shadow-xl rounded'
                onClick={(e) => {
                   e.stopPropagation()
                }}    
            >
                <div className="modal-body">
                    <div className="">
                        <p className="flex justify-end m-3 p-2 rounded cursor-pointer modal-arrow"
                        onClick={props.onClose}>
                            <i className="fa-solid fa-left-long text-2xl hover:text-red-500 text-sky-800"></i>
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-2">
                        <RecipesForm id= {props.id}></RecipesForm>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal


