import { FormEvent, useEffect, useState } from 'react'
import { exerciseOptions } from './Fetch_data_exercise'
import { Link } from 'react-router-dom'
import { Button, Grid, Stack, Typography } from '@mui/material'

export interface ExerciseProps {
    id?: string,
    name?: string,
    description?: string,
    gifUrl?: string
    bodyPart?: string,
    target?: string
}

interface SearchExerciseProps {
    exercises: ExerciseProps[]
}

function Exercises_api ( ) {

    const [searchTerm, setSearchTerm ] = useState('')
    const [exercises, setExercises ] = useState<ExerciseProps[]>([]);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const exercises = await exerciseOptions.searchExercises(searchTerm);
        setExercises(exercises.slice(0, 20));
        console.log(exercises);
    }

    return (
        <div className='bg-gradient-to-r from-slate-700 to-sky-800 min-h-screen'>
            <Link to="/exercises">
                <i className="fa-solid fa-arrow-left ml-5 mt-5 p-3 bg-white rounded-md hover:bg-yellow-300"></i>
            </Link>
            <h1 className='text-3xl p-5 flex justify-center text-yellow-400'>FIND THE RIGHT EXERCISE FOR YOU!</h1>
            <form onSubmit={handleFormSubmit}>
                    <h4 className='text-xl flex justify-center m-5 text-red-600'>Insert the body part that you want to train:</h4>
                <div>
                    <input 
                        type="text" 
                        id='exerciseName' 
                        name="exerciseName"
                        value= {searchTerm}
                        onChange={handleInputChange}
                        className='button-dashboard-api m-5 ml-0'
                        placeholder='Body part...'
                        />
                    <button type="submit" className='button-dashboard-api'>
                        <i className="fa-solid fa-person-running"></i>
                    </button>
                </div>
            </form>
                        
                <div className='body-parts-position'>
                    <h5 className='flex justify-center pt-5 font-bold'>Body parts:</h5>
                    <div className='flex justify-center flex-row text-sm'>
                        <ul className='mt-5 mr-1 underline'>
                            <li>UPPER ARMS</li>
                            <li>LOWER ARMS</li>
                            <li>UPPER LEGS</li>
                            <li>LOWER LEGS</li>
                        </ul>
                        <ul className='m-5 underline'>
                            <li>NECK</li>
                            <li>BACK</li>
                            <li>CARDIO</li>
                        </ul>
                        <ul className='m-5 underline'>
                            <li>CHEST</li>
                            <li>SHOULDERS</li>
                            <li>WAIST</li>
                        </ul>
                    </div>
                </div>
                <hr className='m-5'/>

            <div className='flex flex-row flex-wrap justify-center content-center'>
                {exercises.map((exercise) => (
                    <div className="exercise-card">
                        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" className='bg-white'/>
                        <Stack direction="row">
                            <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', cursor: 'default'}}
                                className='hover:text-black'
                            >
                            {exercise.bodyPart}
                            </Button>
                            <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px'}}>
                            {exercise.target}
                            </Button>
                        </Stack>
                        <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} textTransform="capitalize" mt="11px" pb="10px" >
                            {exercise.name}
                        </Typography>
                    </div>
                ))}
            </div> 
        </div>
    )
}

export default Exercises_api