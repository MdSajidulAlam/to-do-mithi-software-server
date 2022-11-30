import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const AddTask = () => {
    const [user] = useAuthState(auth)
    const email = user.email
    const taskNameRef = useRef('')
    const taskDescriptionRef = useRef('')
    const handleAddTask = e => {
        e.preventDefault()
        const taskName = taskNameRef.current.value
        const taskDescription = taskDescriptionRef.current.value
        const task = { email, taskName, taskDescription }
        const url = 'https://rocky-waters-36222.herokuapp.com/addtask'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => toast.success('Task Added'))
        e.target.reset()
    }
    return (
        <div className='mt-5 w-50 mx-auto'>
            <Form onSubmit={handleAddTask}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control disabled value={user.email} readOnly type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Task Name</Form.Label>
                    <Form.Control ref={taskNameRef} type="text" placeholder="Task Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Task Description</Form.Label>
                    <Form.Control ref={taskDescriptionRef} as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="Submit" value='Add Task'>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddTask;