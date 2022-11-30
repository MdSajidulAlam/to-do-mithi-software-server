import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import toast from 'react-hot-toast';

const Task = ({ task }) => {
    const [complete, setComplete] = useState(false)
    const handleComplete = () => {
        setComplete(!complete)
        toast.success('Task Completed', { id: 'Sajid' })
    }
    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure?")
        if (confirm) {
            const url = `https://rocky-waters-36222.herokuapp.com/task/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Task deleted', { id: 'Sajid' })
                })
        }
    }
    return (
        <Card className='col-4' style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Task: {task.taskName}</Card.Title>
                <Card.Text className={`${complete ? 'text-decoration-line-through' : ''}`}>
                    Description: {task.taskDescription}
                </Card.Text>
                <button onClick={handleComplete} className='btn btn-primary'>Complete</button>
                <button onClick={() => handleDelete(task._id)} className='btn btn-danger mx-2'>Delete</button>
            </Card.Body>
        </Card >
    );
};

export default Task;