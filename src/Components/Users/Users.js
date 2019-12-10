import React, { Component } from 'react'
import UserItem from './UserItem';

class Users extends Component{
    render( props ){
        const userStyle = {
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gridGap:'1rem'
        }
        let { users } = this.props;
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