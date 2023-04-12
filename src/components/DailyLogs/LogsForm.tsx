import { useForm } from 'react-hook-form';
import { useDispatch, useStore } from 'react-redux';

import Input from '../Input';

import { server_calls_logs } from '../../api/server';
import { chooseWeight, chooseSleep, chooseSteps, chooseWorkOut, chooseDate} from '../../redux/slices/LogsSlices';

interface LogFormProps {
    id?: string[]
}

const LogForm = ( props: LogFormProps ) => {

    const { register, handleSubmit } = useForm( {} )
    const dispatch = useDispatch()
    const store = useStore()

    const LogOnSubmit = ( data: any, event: any ) => {
        console.log(`${typeof props.id }`);
        console.log(data);
        
        if (props.id && props.id.length > 0) {
            server_calls_logs.update_log( props.id[0], data )
            console.log(` Updated: ${data.date} ${data.id}`)
            setTimeout(() => window.location.reload(), 500);
            event.target.reset()
        } else {
            dispatch( chooseDate( data.date ));
            dispatch( chooseWeight(data.weight));
            dispatch( chooseSleep(data.sleep));
            dispatch( chooseSteps(data.steps));
            dispatch( chooseWorkOut(data.work_out));
            server_calls_logs.create_log(store.getState())
            setTimeout(() => { window.location.reload()}, 500)
        }
    }
    
    return (
        <div>
            <form onSubmit={ handleSubmit(LogOnSubmit)}>
                <div>
                    <label htmlFor="date" className="text-xl text-sky-800">Date</label>
                        <small>(YYYY/MM/DD)</small>
                    <Input {...register('date')} name='date' placeholder='date'></Input>
                    <label htmlFor="weight" className="text-xl text-sky-800">Weight</label>
                    <Input {...register('weight')} name='weight' placeholder='weight'></Input>
                    <label htmlFor="sleep" className="text-xl text-sky-800">Sleep</label>
                    <Input {...register('sleep')} name= 'sleep' placeholder='sleep'></Input>
                    <label htmlFor="steps" className="text-xl text-sky-800">Steps</label>
                    <Input {...register('steps')} name='steps' placeholder='steps'></Input>
                    <label htmlFor="work_out" className="text-xl text-sky-800">Work Out</label>
                    <Input {...register('work_out')} name= 'work_out' placeholder='work_out'></Input>
                </div>
                <button className='modal-button-label'>SUBMIT</button>
            </form>
        </div>
    )
}

export default LogForm