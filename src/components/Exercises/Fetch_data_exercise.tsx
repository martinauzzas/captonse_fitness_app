const api_key = import.meta.env.VITE_EXERCISE_API_ID

export const exerciseOptions = {
    getExercises: async () => {
        const headers = new Headers({
            'X-RapidAPI-Key': api_key,
		    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        })

        const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises`, {
            method: 'GET',
            headers
        });


        const data = await response.json()
        console.log(data)
        return data
    },

    searchExercises: async (searchTerm: string) => {
        const headers = new Headers ({
            'X-RapidAPI-Key': api_key,
		    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        })
        const respone = await fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${searchTerm}`, {
            method: 'GET',
            headers
        })

        const data = await respone.json();
        console.log(data);
        return (data)
    }

};