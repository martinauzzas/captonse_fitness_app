import { FormEvent, useEffect, useState } from 'react';
import { Stack, Button, Typography} from '@mui/material';
import { Link } from 'react-router-dom';


// Creating costumized types
export interface IRecipe {
    uri: string;
    label?: string;
    image?: string;
    source?: string;
    url?: string;
    shareAs?: string;
    yield?: number;
    dietLabels?: string[];
    healthLabels?: string[];
    cautions?: string[];
    ingredientLines?: string[];
    ingredients?: {
        text?: string;
        weight?: number;
    }[];
    calories?: number;
    totalWeight?: number;
    totalTime?: number;
}

const recipe_app_id = import.meta.env.VITE_RECIPE_APP_ID
const recipe_app_key = import.meta.env.VITE_RECIPE_APP_KEY

function Recipe_api() {


    // Create states to hold onto the data that we want to display
    const [recipesFound, setRecipesFound] = useState<IRecipe[]>([]);
    const [recipeSearch, setRecipeSearch] = useState('');
  

    // Need to specify type for the query: in this case in a string
  // And then specify what we will get as response: Promise that includes the interface IRecipe created
    const searchForRecipes = async (query: string): Promise<IRecipe[]> => {
        const result = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${recipe_app_id}&app_key=${recipe_app_key}`);
        return (await result.json()).hits.map((hit: { recipe: IRecipe }) => hit.recipe);
      };
  

    // hook. the query needs to be encoded in case there are any special character
    // the response will just call the searchforrecipes const
    // The () at the end is what actually call the function
    useEffect(() => {
      (async () => {
        const query = encodeURIComponent(recipeSearch);
        const response = await searchForRecipes(query);
        setRecipesFound(response.slice(0,15));
      })();
    }, [recipeSearch]);
  

    // for the input we need to specify the specified type that we want to retrieve
    const search = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const input = form.querySelector('#searchText') as HTMLInputElement;
      setRecipeSearch(input.value);
      input.value = '';
    };
  
    return (
      <div className="bg-gradient-to-r from-teal-700 to-green-600 min-h-screen">
        <Link to="/recipes">
            <i className="fa-solid fa-arrow-left ml-5 mt-5 p-3 bg-white rounded-md hover:bg-red-700"></i>
        </Link>

        <h1 className='text-3xl p-5 flex justify-center text-red-700'>FIND A GOOD RECIPE!
            <i className="fa-brands fa-pagelines ml-3"></i>
        </h1>

        <form className="searchForm flex justify-center" onSubmit={(event) => search(event)}>
            <input 
                id="searchText" 
                type="text" 
                className='button-recipe-api flex justify-center m-5 ml-0'
                placeholder='Insert ingridient here'
                />
            <button className='button-recipe-api'>
                <i className="fa-solid fa-magnifying-glass-plus text-2xl text-red-700"></i>
            </button>
        </form>

        <hr className='m-5'/>

        {recipeSearch && <p className='flex justify-center text-2xl text-red-700'>Results for {recipeSearch}... <i className="fa-solid fa-utensils ml-3"></i></p>}
        <div className='flex flex-row flex-wrap justify-center content-center'>
          {recipesFound.map((hit) => (
            <div className="recipe-card mt-24">
                <img src={hit.image} alt={hit.label} loading="lazy" className='bg-white'/>
                <Stack direction="column">
                    <Button sx={{ mt: '5px', color: '#000000', background: '#ffffff', fontSize: '14px', cursor: 'default'}}
                        className='hover:text-black'
                    >
                    {hit.dietLabels}
                    </Button>
                    <Button sx={{ mt: '5px', color: '#000000', background: '#ffffff', fontSize: '14px'}}
                        className='hover:text-black'
                    >
                    <a href={hit.url} target="_blank">View Recipe</a>
                    </Button>
                </Stack>
                <Typography color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} textTransform="capitalize" mt="11px" pb="10px" >
                    {hit.label}
                </Typography>
            </div>
          ))}
        </div>
      </div>
    );
  }

  
  
export default Recipe_api;

  