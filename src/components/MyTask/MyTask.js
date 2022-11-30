import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Task from './Task';

const MyTask = () => {
    const [user] = useAuthState(auth)
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const email = user?.email
        const url = `https://rocky-waters-36222.herokuapp.com/mytasks?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [tasks, user?.email])


    return (
        <div className='mt-5 row gap-5 container'>
            {
                tasks.map(task => <Task key={task._id} task={task}></Task>)
            }
        </div>
    );
};

export default MyTask;