import React from 'react';
import './style.css';

const teamMembers = [
    {
        id: 1,
        name: 'Usman Ghazi',
        role: 'CEO',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
        id: 2,
        name: 'Umair Hashmi',
        role: 'Office Administrator',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        id: 3,
        name: 'Ali',
        role: 'Senior Advisor',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        id: 4,
        name: 'Ava Harper',
        role: 'Senior Advisor',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        id: 5,
        name: 'Faisal Abdul Ghani',
        role: 'CTO',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
];

export default function Team() {
    return (
        <section className="team-section">
            <h2>Meet the Team</h2>
            <div className="team-container">
                {teamMembers.map(({ id, name, role, photo }) => (
                    <div key={id} className="team-member">
                        <div className="avatar-wrapper">
                            <img src={photo} alt={name} className="avatar" />
                        </div>
                        <h3>{name}</h3>
                        <p className="role">{role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
