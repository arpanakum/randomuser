import React from 'react';

function User(props) {
    
    const users = props.userData;
    console.log("user component rendered");
    const userList = users.map((user) => {
       return <p key={user.id}>{user.name}</p>;
    })
    
    return (
        <div>
           {userList}
        </div>
    )
}

export default User;