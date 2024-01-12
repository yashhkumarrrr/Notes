import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';

const Update = () => {

    const [id, setId] = useState(0);
    const [note, setNote] = useState('');
    const [title, setTitle] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setNote(localStorage.getItem('note'));
        setTitle(localStorage.getItem('title'));
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        axios
            .put(`https://64a9638b8b9afaf4844aa03e.mockapi.io/notes/${id}`, {
                note: note,
                title: title,
            })
            .then(() => {
                navigate('/');
            });
    };

    return (
        <>
            <div>

                <div>
                    <div>
                        Edit Note
                    </div>

                    <div>
                        <TextField
                            required
                            value={title}
                            variant='standard'
                            label='Edit Title'
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div>
                        <TextField
                            rows={8}
                            required
                            multiline
                            value={note}
                            label='Edit Note'
                            color='secondary'
                            variant='standard'
                            onChange={(e) => setNote(e.target.value)}
                        />
                    </div>

                    <div>
                        <Button
                            type='submit'
                            variant='contained'
                            onClick={handleUpdate}
                        >
                            Update
                        </Button>
                    </div>
                </div>

                <div className='footer-body'>
                    Developed by - &nbsp;
                    <Link
                        className='footer-link'
                        to='https://yashhkumarrrr.netlify.app/'
                    >
                        Yash
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Update;