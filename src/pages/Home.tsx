import HomeImg from '../assets/images/thomas-yohei-BAlBUJb-SXQ-unsplash.jpg'
import '../index.css'
import background8 from '../assets/images/minna-hamalainen-Mgx1oe2vlVY-unsplash.jpg'
import background10 from '../assets/images/wesley-tingey-57wo9F-r2-A-unsplash.jpg'
import food from '../assets/images/nadine-primeau-FfLlgRfL5l8-unsplash.jpg'
import track from '../assets/images/mr-lee-888HU1GauzY-unsplash.jpg'


const Home = () => {
  return (
    <>
        <div
            style= {{ backgroundImage: `url(${ background8 })`}}
            className="bg-cover bg-slate-600 h-screen">
            <h1 className="text-5xl text-blue-600 flex justify-center p-10 bg-pink-400 bg-opacity-50">
                FITNESS APP
            </h1>
            <h3 className='flex text-3xl justify-center p-10 bg-pink-400 bg-opacity-50 text-blue-800 items-center'>
                Get ready for change to happen.
            </h3>
        </div>
        <div style= {{ backgroundImage: `url(${ background10 })`}}
            className="bg-cover bg-slate-600 h-screen">
            <div className="flex-wrap flex justify-center w-full p-5 bg-pink-400 bg-opacity-50">
                <h1 className="text-5xl text-blue-600 flex items-center">
                    KEY FEATURES
                </h1>
            </div>
        </div>
        <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-3">
            <div style= {{ backgroundImage: `url(${ HomeImg })`}}
                className="bg-cover h-screen">
                <p className='text-2xl bg-blue-600 bg-opacity-50 items-center p-5'>
                    Find exercises and add them to your database
                </p>
            </div>
            <div style= {{ backgroundImage: `url(${ food })`}}
                className="bg-cover h-screen">
                <p className='flex justify-center text-2xl bg-red-500 bg-opacity-70 p-5'>
                    Find recipes and add them to your database
                </p>
            </div>
            <div style= {{ backgroundImage: `url(${ track })`}}
                className="bg-cover h-screen">
                <p className='text-2xl bg-green-300 bg-opacity-70 p-5'>
                    Track your daily progress and add them to your database
                </p>
            </div>
        </div>
    </>
  )
}

export default Home
