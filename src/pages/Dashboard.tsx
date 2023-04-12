import { Link } from 'react-router-dom';
import ToDoList from '../components/ToDoList';
import '../index.css'
import Quotes from '../components/Quotes';
import background4 from '../assets/images/andrea-leopardi-QVD3Xht9txA-unsplash.jpg'


const Dashboard = () => {
  return (
    <div>
    <div
        style= {{ backgroundImage: `url(${ background4 })`}}
        className="background bg-cover bg-slate-600">
            <h1 className='text-5xl flex justify-center pt-5 text-yellow-500 '>
            <i className="fa-solid fa-chevron-right mr-5"></i>
                WELCOME TO YOUR DASHBOARD
                <i className="fa-solid fa-chevron-left ml-5"></i>
            </h1>
            <div>
            <Quotes></Quotes>
        </div>
            <div className='flex flex-row'>
                <div className='navigation-buttons-position'>
                    <ul>
                        <li >
                            <button className="button-dashboard p-3 m-2 justify-items-center">
                                    <Link to="/recipes">
                                        RECIPES
                                    </Link>
                            </button>
                        </li>
                            <button className="button-dashboard p-3 m-2 justify-items-center">
                                    <Link to="/exercises">
                                        EXERCISES
                                    </Link>
                            </button>
                        <li>
                        </li>
                        <li>
                            <button className="button-dashboard p-3 m-2 justify-items-center">
                                    <Link to="/dailylog">
                                        DAILY LOGS
                                    </Link>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className= 'todolist-position '>
                    <h3 className='text-2xl text-yellow-400 bg-blue-500 p-2'>YOUR WEEKLY CHALLENGES:</h3>
                    <ToDoList taskName={''}></ToDoList>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
