// import React from 'react'


const nombres = [
  "Sofía", "Mateo", "Valentina", "Santiago", "Isabella", "Lucas", "Camila", "Benjamín", "Valeria", "Thiago",
  "Mariana", "Nicolás", "Lucía", "Gabriel", "Emma", "Liam", "Martina", "Alexander", "Luciana", "Samuel",
  "Victoria", "Sebastián", "Elena", "Daniel", "Mia", "David", "Antonella", "Joaquín", "Renata", "Emanuel",
  "Catalina", "Diego", "Julieta", "Adrian", "Natalia", "Leonardo", "Emilia", "Felipe", "Zoey", "Tomas",
  "Abril", "Matías", "Paula", "Francisco", "Aitana", "Ignacio", "Sara", "Gael", "Ximena", "Ian",
  "Fernanda", "Bruno", "Andrea", "Álvaro", "Alicia", "Máximo", "Guadalupe", "Santino", "Daniela", "Agustín",
  "Regina", "Dylan", "Carolina", "Ezekiel", "Clara", "Lautaro", "Juana", "Axel", "Constanza", "Dante",
  "Josefina", "Iker", "Alba", "Javier", "Romina", "Facundo", "Manuela", "Elián", "Pilar", "Jerónimo",
  "Paloma", "Bautista", "Violeta", "Enzo", "Rocío", "Damián", "Lola", "Esteban", "Amaya", "Marcos",
  "Noa", "Iván", "Maite", "Gonzalo", "Isabel", "Simón", "Carla", "Alan", "Micaela", "Rodrigo"
];

function ListaNombres() {
  return (
    <section className='tarjeta'>
        <h2>Listado de Nombres</h2>
        <ul className='lista-nombres'>
            {/*
            En HTML agregabamos una linea con un "li" por cada item, 
             <li>Pedro</li>
            <li>Sergio</li> 
            */}

            {/* Tengo que utilizar map
            - nombre es el singular del listado de nombres.
            - representa cada nombre en un momento de la iteración.            
            */}          
            {nombres.map((nombre, index)=>(
                <li key={index}>{nombre}</li>
            ))}
        </ul>
    </section>
  )
}

export default ListaNombres