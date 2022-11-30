import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <Link to='/addtask'><button className='btn btn-info'>Add Task</button></Link>
        </div>
    );
};

export default Home;