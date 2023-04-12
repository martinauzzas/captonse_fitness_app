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
            className="background bg-cover bg-slate-600">
            <div className="background-title flex-wrap flex justify-start h-full">
                <h1 className="text-5xl text-blue-600 flex items-center ml-24 ">
                    FITNESS APP
                </h1>
                <h3 className='text-3xl text-blue-800 flex items-center ml-10'>
                    Get ready for change to happen.
                </h3>
            </div>
        </div>
        <div style= {{ backgroundImage: `url(${ background10 })`}}
            className="background bg-cover bg-slate-600">
            <div className="background-paragraph flex-wrap flex justify-center w-full">
                <h1 className="text-5xl text-blue-600 flex items-center ml-24 ">
                    KEY FEATURES
                </h1>
            </div>
        </div>
        <div className='flex flex-row'>
            <div style= {{ backgroundImage: `url(${ HomeImg })`}}
                className="background-paragraph3 bg-cover bg-slate-600">
                <div className="background-paragraph3">
                    <p className='pl-3 text-2xl paragrafo-exercises items-center'>Find exercises and save them to your database</p>
                </div>
            </div>
            <div style= {{ backgroundImage: `url(${ food })`}}
                className="background-paragraph3 bg-cover bg-slate-600">
                <div className="background-paragraph2">
                    <p className='pl-3 text-2xl paragrafo-food'>Find recipes and add them to your database</p>
                </div>
            </div>
            <div style= {{ backgroundImage: `url(${ track })`}}
                className="background-paragraph3 bg-cover bg-slate-600">
                <div className="background-paragraph2">
                    <p className='pl-3 text-2xl paragrafo-track'>Track your daily progress</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
