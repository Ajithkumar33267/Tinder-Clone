import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum'
import AddBoxIcon from '@material-ui/icons/AddBox';

const Header = ({ form }) => {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize='large' className='header__icon' />
            </IconButton>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU" alt="header" className='header__logo' />
            <div>
                <IconButton onClick={form}>
                    <AddBoxIcon fontSize='large' className='header__icon' />
                </IconButton>
                <IconButton>
                    <ForumIcon fontSize='large' className='header__icon' />
                </IconButton>

            </div>
        </div>
    )
}

export default Header