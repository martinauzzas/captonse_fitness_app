import Input from "../Input";

import { useForm } from 'react-hook-form';
import { server_calls_exercises } from "../../api/server";
import { useDispatch, useStore } from "react-redux";
import { chooseNameExercise, chooseMuscle, chooseDifficulty, chooseDescription, chooseTypeExercise } from "../../redux/slices/ExerciseSlices"

interface ExerciseFormProps {
    id?: string[]
} 

const ExerciseForm = ( props: ExerciseFormProps ) => {

    const { register, handleSubmit } = useForm( {} )
    const dispatch = useDispatch()
    const store = useStore()

    const exerciseOnSubmit = ( data:any, event: any ) => {
        console.log(`${props.id}`);
        
        console.log(data)

        if (props.id && props.id.length > 0) {
            server_calls_exercises.update_exercise(props.id[0], data)
            console.log(` Updated: ${data.name} ${data.id} `)
            setTimeout(() => window.location.reload(), 500);
            event.target.reset()
        } else {
            dispatch( chooseNameExercise(data.name));
            dispatch( chooseMuscle(data.muscle));
            dispatch( chooseTypeExercise(data.type_exercise));
            dispatch( chooseDifficulty(data.difficulty));
            dispatch( chooseDescription(data.description))
            server_calls_exercises.create_exercise(store.getState())
            setTimeout(() => { window.location.reload() }, 500);
        }
    }

    return (
        <div>
            <form onSubmit={ handleSubmit(exerciseOnSubmit)}>
                <div>
                    <label htmlFor="name" className="text-xl text-sky-800 ">Name</label>
                    <Input {...register('name')} name= 'name' placeholder="name"></Input>
                    <label htmlFor="muscle" className="text-xl text-sky-800">Muscle</label>
                    <Input {...register('muscle')} name= 'muscle' placeholder="muscle"></Input>
                    <label htmlFor="type_exercise" className="text-xl text-sky-800">Type Exercise</label>
                    <Input {...register('type_exercise')} name= 'type_exercise' placeholder="type_exercise"></Input>
                    <label htmlFor="difficulty" className="text-xl text-sky-800">Difficulty</label>
                    <Input {...register('difficulty')} name= 'difficulty' placeholder="difficulty"></Input>
                    <label htmlFor="description" className="text-xl text-sky-800">Equipment</label>
                    <Input {...register('description')} name= 'description' placeholder="equipment"></Input>
                </div>
                <button className="modal-button modal-button-label">
                    SUBMIT
                </button>
            </form>
        </div>
    )
}

export default ExerciseForm