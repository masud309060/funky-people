import React from 'react';
import './User.css'

const User = (props) => {
    console.log(props.fakedata)
    const {name, id, image, phone,email,company} = props.fakedata;
    // console.log(name)
    return (
       <div>
            <div className="user">
            <div className="user-img">
                <img src={image} alt=""/>
            </div>
            <div className="user-info">
                <h3>{name}</h3>
                <p>Phone: {phone}</p>
                <p>E-mail: {email}</p>
                <p>Job place: {company.name}</p>
                <p>Salary: {company.salary} $</p>
                <button>add</button>
            </div>
        </div>

       </div>
    );
};

export default User;