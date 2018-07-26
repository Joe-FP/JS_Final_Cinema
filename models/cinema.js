const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function(){
  return this.films.map(film => film.title);
};

Cinema.prototype.getFilm = function(title){
  return this.films.find(film => film.title === title);
};

Cinema.prototype.getFilmsByGenre = function(genre){
  return this.films.filter(film => film.genre === genre);
};

Cinema.prototype.anyFilmsInYear = function(year){
  return this.films.some(film => film.year === year);
};

Cinema.prototype.allFilmsOverDuration = function(duration){
  return this.films.every(film => film.length > duration);
};

Cinema.prototype.totalRunningTime = function(){
  array = this.filmLengths();
  return array.reduce((accLength, length) => accLength + length);
};

Cinema.prototype.filmLengths = function(){
  return this.films.map(film => film.length);
};

module.exports = Cinema;
