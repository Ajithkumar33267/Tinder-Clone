import React, { useState } from 'react'
import "./TinderForm.css"
import axios from 'axios';

const TinderForm = () => {

    const url = 'http://localhost:8001/tinder/cards'

    const [name, setName] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    const addUser = (e) => {
        e.preventDefault();

        if (!name || !imgUrl) return alert("Please fill all fields")

        axios.post(url, {
            name,
            imgUrl
        }).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })

        setName('')
        setImgUrl('')
    };

    return (
        <div className='tinterForm'>
            <form className='form' onSubmit={addUser}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU' alt='logo' />
                <input type='text' className='form-name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' />
                <input type='text' className='form-img' value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} placeholder='Enter Image URL' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default TinderForm