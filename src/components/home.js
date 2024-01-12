import './home.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Home = () => {

    const [data, setData] = useState([]);

    function getData() {
        axios
            .get('https://64a9638b8b9afaf4844aa03e.mockapi.io/notes')
            .then((res) => {
                setData(res.data);
            });
    }

    function handleDelete(id) {
        axios
            .delete(`https://64a9638b8b9afaf4844aa03e.mockapi.io/notes/${id}`)
            .then(() => {
                getData();
            });
    }

    const setToLocalStorage = (id, title, note) => {
        localStorage.setItem('id', id);
        localStorage.setItem('note', note);
        localStorage.setItem('title', title);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className='home-body'>
                <div className='home-section'>
                    <div className='home-segment'>
                        <div className='home-head'>
                            Notes
                        </div>

                        <div>
                            {data.map((eachData) => {
                                return (
                                    <>
                                        <div>
                                            <div>
                                                <div>
                                                    <div>
                                                        {eachData.title}
                                                    </div>

                                                    <div>
                                                        <div>
                                                            <Link to='/update'>
                                                                <IconButton
                                                                    color='success'
                                                                    onClick={() => setToLocalStorage(
                                                                        eachData.id,
                                                                        eachData.note,
                                                                        eachData.title,
                                                                    )}
                                                                >
                                                                    <EditIcon />
                                                                </IconButton>
                                                            </Link>
                                                        </div>

                                                        <div>
                                                            <IconButton
                                                                color='error'
                                                                onClick={() => handleDelete(eachData.id)}
                                                            >
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    {eachData.note}
                                                </div>
                                            </div>
                                        </div>
                                    </>

                                );
                            })}
                        </div >

                        <div>
                            <Link to='/create'>
                                <Button
                                    variant='contained'
                                >
                                    Create New
                                </Button>
                            </Link>
                        </div>
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

export default Home;