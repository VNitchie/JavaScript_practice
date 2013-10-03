var movieList = [
  { title:'The Shawshank Redemption', release:'1994', imdbVotes:'1043071'},
  { title:'The Godfather', release:'1972', imdbVotes:'1732416'},
  { title:'The Godfather: Part II', release:'1974', imdbVotes:'474640'},
  { title:'Pulp Fiction', release:'1994', imdbVotes:'806431'},
  { title:'12 Angry Men', release:'1957', imdbVotes:'255846'  },
  { title:'Schindler\'s List', release:'1993', imdbVotes:'528900'},
  { title:'The Lord of the Ringss The Return of the King', release:'2003', imdbVotes:'738931'},
  { title:'Fight Club', release:'1998', imdbVotes: '791186'},
  { title:'Star Wars: Episode V - The Empire Strikes Back', release:'1980', imdbVotes:'503348'},
]
var moviesSort = [];
for(var index = 0; index < movieList.length; index++) {
  var movieList = movieList[info];
  var info = {
    title : movieList.title,
    release : movieList.release,
    imdbVotes : movieList.imdbVotes
  }
var count = 0;
var moviesSort = function(lhs, rhs) {
  console.log(count++ + ': ' + lhs.release + ' - ' + rhs.release);
  if(lhs.imdbVote < rhs.imdbVote) {
    return -1;
  }
  else if(rhs.imdbVote < lhs.imdbVote) {
    return 1;
  }
  else {
    return 0;
  }
}
}
return(JSON.stringify(moviesSort(title, release, imdbVote)));
