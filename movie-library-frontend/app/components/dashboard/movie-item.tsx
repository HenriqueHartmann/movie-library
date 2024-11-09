type MovieItemParams = {
    movieImageSrc: string,
    movieTitle: string,
    movieYear: string
}

/* eslint-disable @next/next/no-img-element */
export default function MovieItem({movieImageSrc, movieTitle, movieYear} : MovieItemParams) {
    return (
      <div className="movie-card">
        {/* Image */}
        <div className='movie-image'>
            <img 
                src={movieImageSrc}
                alt='Movie Cover' />
        </div>
        {/* Name and Year */}
        <div className='movie-title'>
            <span><strong>{movieTitle}</strong></span>
        </div>
        <div className='movie-year'>
            <span><strong>{movieYear}</strong></span>
        </div>
      </div>
    );
}