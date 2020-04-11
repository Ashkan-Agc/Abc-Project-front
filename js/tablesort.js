$(function() {

  // initial sort set using sortList option
  $(".table1").tablesorter({
    theme : 'blue',
    // sort on the first column and second column in ascending order
    sortList: [[0,0],[1,0]]
  });

  // initial sort set using data-sortlist attribute (see HTML below)
  $(".table2").tablesorter({
    theme : 'blue'
  });

});