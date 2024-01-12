import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import TextField from '@mui/material/TextField';

const Create = () => {
    const history = useNavigate();
    const [note, setNote] = useState('');
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://64a9638b8b9afaf4844aa03e.mockapi.io/notes', {
            note: note,
            title: title,
        })
            .then(() => {
                history('/');
            });
    };

    return (
        <>
            <div>
                <div>
                    <div>
                        Create Note
                    </div>

                    <div>
                        <div>
                            <TextField
                                label='Title'
                                variant='standard'
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                multiline
                                rows={5}
                                label='Add Note'
                                color='secondary'
                                variant='standard'
                                onChange={(e) => setNote(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <Button
                            type='submit'
                            variant='contained'
                            onClick={handleSubmit}
                        >
                            Create
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

export default Create;