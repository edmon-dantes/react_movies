function Movie(props) {
  // props.children recuperar datos internos

  return (
    <div className="movie-item-style-2">
      <img src={props.picture} alt="" />
      <div className="mv-item-infor">
        <h6>
          <a href="moviesingle.html">{props.title}</a>
        </h6>
        <p className="rate">
          <i className="ion-android-star"></i>
          <span>{props.qualification}</span> / 10
        </p>
        <p className="describe">{props.description}</p>
        <p className="run-time">
          Run Time: {props.time}’ . <span>MMPA: PG-13 </span> .
          <span>Release: {props.release}</span>
        </p>
        <p>
          Director: <a href="#">{props.director}</a>
        </p>
        <p>Stars: {props.starts}</p>
      </div>
    </div>
  );
}

export default Movie;
