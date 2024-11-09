/* eslint-disable @next/next/no-img-element */
import './assets/css/dashboard/page-style.css'
import MovieItem from './components/dashboard/movie-item';

export default function Dashboard() {
    return (
      <div className='body'>
        {/* Menu */}
  
        {/* Content */}
        <div className='content'>
            {/* Grid */}
            <div className='content-grid'>
                {/* Grid Item */}
                <div className='content-grid-item'>
                  <MovieItem movieImageSrc={"https://www.grapheine.com/wp-content/uploads/2019/11/affiche-jurassic-park-800x1183.jpg"} movieTitle={"Jurassic Park"} movieYear={"1993"}  />
                </div>
                <div className='content-grid-item'>
                  <MovieItem movieImageSrc={"https://m.media-amazon.com/images/M/MV5BMzdmYmUzYjAtMmJhNi00NGU3LWJiODYtM2I5MGFhZjBhM2NhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"} movieTitle={"Godzilla"} movieYear={"1998"}  />
                </div>
                <div className='content-grid-item'>
                  <MovieItem movieImageSrc={"https://alternativemovieposters.com/wp-content/uploads/2023/07/Dave-Merrell_PulpFiction.jpg"} movieTitle={"Pulp Fiction: Tempo de Violência"} movieYear={"1994"}  />
                </div>
                <div className='content-grid-item'>
                  <MovieItem movieImageSrc={"https://i.ebayimg.com/images/g/C9QAAOSwoTlgSnpq/s-l1200.png"} movieTitle={"Jaws"} movieYear={"1975"}  />
                </div>
                <div className='content-grid-item'>
                  <MovieItem movieImageSrc={"https://m.media-amazon.com/images/I/81UOBSDQh0L._AC_UF894,1000_QL80_.jpg"} movieTitle={"Indiana Jones: Raiders of the Lost Ark"} movieYear={"1981"}  />
                </div>
            </div>
        </div>
  
        {/* Footer */}
      </div>
    );
}
