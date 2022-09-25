import React from 'react'
import "./card.css"
export const Card = ({ user }) => {
    return (
        <div className="col-md-6 col-lg-4 py-2">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title pb-3">{user.name} {user.username} </h5>
                    <div className="card-text">
                        <ul className='list-unstyled'>
                            <li><i className="fa-solid fa-mobile-retro"></i> {user.phone} </li>
                            <li><i className="fa-solid fa-location-dot"></i> {user.address.city} </li>
                            <li><i className="fa-solid fa-briefcase"></i> {user.company.name} </li>
                            <li ><i className="fa-solid fa-envelope"></i>{user.email}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
