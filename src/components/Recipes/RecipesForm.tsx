import Input from "../Input";

import { useForm } from 'react-hook-form';
import { server_calls_recipes } from "../../api/server";
import { useDispatch, useStore } from "react-redux";
import { chooseFull_recipe, chooseIngridients, chooseMeal, chooseName } from "../../redux/slices/RecipesSlices"


interface RecipeFormProps {
    id?: string[]
}

const RecipesForm = ( props: RecipeFormProps ) => {

    const { register, handleSubmit } = useForm( {} )
    const dispatch = useDispatch(); // this will be the function that we can use our slices
    const store = useStore();

    const recipeOnSubmit = ( data: any, event: any ) => {
        console.log(`${props.id }`);
        console.log(data)

        if (props.id && props.id.length > 0 ) {
            server_calls_recipes.update_recipe(props.id[0], data)
            console.log(` Updated: ${data.name} ${data.id} `)
            setTimeout(() => window.location.reload(), 500);
            event.target.reset()
        } else {
            dispatch( chooseName(data.name ));
            dispatch( chooseMeal(data.meal));
            dispatch( chooseIngridients(data.ingridients));
            dispatch( chooseFull_recipe(data.full_recipe));
            server_calls_recipes.create_recipe(store.getState())
            setTimeout(() => { window.location.reload() }, 500);
        }

    }

    return (
        <div>
            <form onSubmit={ handleSubmit(recipeOnSubmit)}>
                <div>
                    <label htmlFor="name" className="text-xl text-sky-800">Name</label>
                    <Input {...register('name')} name= 'name' placeholder="name" ></Input>
                    <label htmlFor="meal" className="text-xl text-sky-800 ">Meal</label>
                    <Input {...register('meal')} name= 'meal' placeholder="meal"></Input>
                    <label htmlFor="ingridients" className="text-xl text-sky-800 ">Ingridients</label>
                    <Input {...register('ingridients')} name= 'ingridients' placeholder="ingridients"></Input>
                    <label htmlFor="full_recipe" className="text-xl text-sky-800 ">Full Recipe</label>
                    <Input {...register('full_recipe')} name= 'full_recipe' placeholder="full_recipe"></Input>
                </div>
                <button className="modal-button modal-button-label">
                    SUBMIT
                </button>
            </form>
        </div>
    )
}

export default RecipesForm
