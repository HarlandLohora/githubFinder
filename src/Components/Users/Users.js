import React, { Component } from 'react'
import UserItem from './UserItem';
import Spinner from '../Layout/Spinner';


const Users = ({ users,loading }) => {
    const userStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gridGap:'1rem'
    }
    if( loading ){
        return <Spinner />
    }else{
        return(
            <div style = { userStyle }>
                {
                    users.map( user => {
                        let { id } = user
                        return (
                            <UserItem user = { user } key = { id }/>
                        )
                    })
                }
            </div>
        )
    }
}


export default Users;