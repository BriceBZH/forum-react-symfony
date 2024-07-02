import React, { useEffect, useState } from 'react';

const membersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/membersList')
            .then(response => response.json())
            .then(data => setUsers(data.users))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div>
            <h1>Liste des utilisateurs</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom d'utilisateur</th>
                        <th>Date d'inscription</th>
                        <th>Nombre de messages</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.registeredAt}</td>
                            <td>{user.messageCount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default membersList;