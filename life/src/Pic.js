import React from 'react';
import App from './App';


function Pic(){
    return(
        <div className='pic'>
            <img src='https://media.wired.com/photos/595481de8e8cc150fa8ec1f3/191:100/pass/Conway_1k.jpg' alt='portrait of James Conway' copyright='PRINCETON UNIVERSITY, OFFICE OF COMMUNICATIONS/DENISE APPLEWHITE'></img>
            <h3>1937 - 2020</h3>
            <p className = 'quote'><span>His FRS nomination, in 1981, reads: </span>
            A versatile mathematician who combines a deep combinatorial insight with algebraic virtuosity, particularly in the construction and manipulation of "off-beat" algebraic structures which illuminate a wide variety of problems in completely unexpected ways. He has made distinguished contributions to the theory of finite groups, to the theory of knots, to mathematical logic (both set theory and automata theory) and to the theory of games (as also to its practice).</p>
        </div>
    )
}
export default Pic;