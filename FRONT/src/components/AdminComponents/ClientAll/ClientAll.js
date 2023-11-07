import React from 'react';
import { useEffect } from 'react';
import AccordionInfos from "./AccordionInfos"
import './clientAll.scss';
import useClientAllStore from './useClientAllStore';

const ClientAll = () => {
    const { users, fetchUsers, deleteUser } = useClientAllStore();
    
    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return(
        <section className="clientAll__section">
            <h2>Listes des comptes clients</h2>
            <div className="clientAll__accordionContainer">

             {users.map(user => (
                    <AccordionInfos key={user.id} user={user} deleteUser={deleteUser}/>
                ))}
            
            </div>
        </section>
    )
}

export default ClientAll