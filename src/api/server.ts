const token = import.meta.env.VITE_APP_TOKEN


export const server_calls_recipes = {
    get_recipe: async () => {
        const response = await fetch(`https://gratis-cliff-moonflower.glitch.me/api/recipes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('get_recipe: failed to fetch data')
        }

        return await response.json()
    },

    create_recipe: async (data: any = {}) => {
        const response = await fetch(`https://gratis-cliff-moonflower.glitch.me/api/recipes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('create_recipe: failed to create data')
        }

        return await response.json()
    },

    update_recipe: async ( id: string, data: any = {} ) => {
        const response = await fetch(`https://gratis-cliff-moonflower.glitch.me/api/recipes/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('update_recipe: failed to fetch data')
        }

        return await response.json()
    },

    delete_recipe: async ( id: string, data: any= {} ) => {
        const response = await fetch(`https://gratis-cliff-moonflower.glitch.me/api/recipes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('get_recipe: failed to fetch data')
        }

        return
    },
}

// EXERCISES CALLS

export const server_calls_exercises = {
    get_exercise: async() => {
        const response = await fetch(`https://gratis-cliff-moonflower.glitch.me/api/exercises`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('get_exercise: failed to fetch data')
        }
        return await response.json()
    },
    create_exercise: async(data: any = {}) => {
        const response = await fetch(`https://gratis-cliff-moonflower.glitch.me/api/exercises`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('create_exercise: failed to fetch data')
        }
        return await response.json()
    },
    delete_exercise: async( id: string, data: any = {} ) => {
        const response = await fetch(`https://gratis-cliff-moonflower.glitch.me/api/exercises/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error ('delete_exercise: failed to delete data')
        }
        return await response.json()
    },
    update_exercise: async(id: string, data: any = {}) => {
        const response = await fetch(`https://gratis-cliff-moonflower.glitch.me/api/exercises/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error ('Update_exercise: failed to update exercise')
        }
        return await response.json()
    }
}


export const server_calls_logs = {
    get_log: async() => {
        const response = await fetch (`https://gratis-cliff-moonflower.glitch.me/api/logs`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('get_log: Failed to fetch data')
        }

        return await response.json()
    },

    create_log: async(data: any = {}) => {
        const response = await fetch (`https://gratis-cliff-moonflower.glitch.me/api/logs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('create_log: failed to create data')
        }
    },

    update_log: async( id:string, data:any = {} ) => {
        const response = await fetch(`https://gratis-cliff-moonflower.glitch.me/api/logs/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('update_log: failed to update data')
        }

        return await response.json()
    },

    delete_log: async (id: string, data: any = {}) => {
        const response = await fetch (`https://gratis-cliff-moonflower.glitch.me/api/logs/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('delete_recipe: failed to delete data')
        }
    }
}