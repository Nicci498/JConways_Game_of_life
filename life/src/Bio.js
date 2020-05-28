import React from 'react';

function Bio(){
    return(
        <div className = 'bio'>
        <h3>Rules of the Game</h3>
        <ol>
            <li>If a cell has more than three neighbors, it dies. (overpopulation)</li>
            <li>If a cell has less than two neighbors it also dies. (underpopulation)</li>
            <li>If a dead cell has exactly 3 live cell neighbors, it becomes a live cell as well. (reproduction)</li>
            <li>If a cell has exactly two or three live neighbors, it survives.</li>
        </ol>
        <h3>About Mr. Conway </h3>
        <p>John Horton Conway born December 26 1937 was an English mathematician active in the theory of finite groups, knot theory, number theory, combinatorial game theory and coding theory. He also made contributions to many branches of recreational mathematics, most notably the invention of the cellular automaton called the Game of Life (shown above).</p>

        <p>Born and raised in Liverpool, Conway spent the first half of his career at the University of Cambridge before moving to the United States, where he held the John von Neumann Professorship at Princeton University for the rest of his career. On 11 April 2020, at age 82, he died of complications from COVID-19.</p>

        <p>Conway received the Berwick Prize in 1971, was elected a Fellow of the Royal Society in 1981,became a fellow of the American Academy of Arts and Sciences in 1992, was the first recipient of the Pólya Prize, he won the Nemmers Prize in Mathematics in 1998 and received the Leroy P. Steele Prize for Mathematical Exposition of the American Mathematical Society in 2000. In 2001 he was awarded an honorary degree from the University of Liverpool. In 2017 Conway was given honorary membership of the British Mathematical Association.</p>
        <div className = 'spacer'>

        </div>
        <h3>Publications</h3>
        <ul>
       <li> 1971 – Regular algebra and finite machines. Chapman and Hall, London, 1971, Series: Chapman and Hall mathematics series, ISBN 0412106205.</li>
       <li>1976 – On numbers and games. Academic Press, New York, 1976, Series: L.M.S. monographs, 6, ISBN 0121863506.</li>
        <li>1979 – On the Distribution of Values of Angles Determined by Coplanar Points (with Paul Erdős, Michael Guy, and H. T. Croft). Journal of the London Mathematical Society, vol. II, series 19, pp. 137–143.</li>
        <li>1979 – Monstrous Moonshine (with Simon P. Norton).[50] Bulletin of the London Mathematical Society, vol. 11, issue 2, pp. 308–339.</li>
        <li>1982 – Winning Ways for your Mathematical Plays (with Richard K. Guy and Elwyn Berlekamp). Academic Press, ISBN 0120911507.</li>
        <li>1985 – Atlas of finite groups (with Robert Turner Curtis, Simon Phillips Norton, Richard A. Parker, and Robert Arnott Wilson). Clarendon Press, New York, Oxford University Press, 1985, ISBN 0198531990.</li>
        <li>1988 – Sphere Packings, Lattices, and Groups[51] (with Neil Sloane). Springer-Verlag, New York, Series: Grundlehren der mathematischen Wissenschaften, 290, ISBN 9780387966175.</li>
        <li>1995 – Minimal-Energy Clusters of Hard Spheres (with Neil Sloane, R. H. Hardin, and Tom Duff). Discrete & Computational Geometry, vol. 14, no. 3, pp. 237–259.</li>
        <li>1996 – The Book of Numbers (with Richard K. Guy). Copernicus, New York, 1996, ISBN 0614971667.</li>
        <li>1997 – The Sensual (quadratic) Form (with Francis Yein Chei Fung). Mathematical Association of America, Washington, DC, 1997, Series: Carus mathematical monographs, no. 26, ISBN 1614440255.</li>
        <li>2002 – On Quaternions and Octonions (with Derek A. Smith). A. K. Peters, Natick, MA, 2002, ISBN 1568811349.</li>
        <li>2008 – The Symmetries of Things (with Heidi Burgiel and Chaim Goodman-Strauss). A. K. Peters, Wellesley, MA, 2008, ISBN 1568812205.</li>
        </ul>
        <div className = 'spacer'>

        </div>
    </div>
    )
}

export default Bio;