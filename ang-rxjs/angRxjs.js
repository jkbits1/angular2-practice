/**
 * Created by jk on 28/11/15.
 */

var team = [
  { name: "Igor Minar", commits: 159 },
  { name: "Jeff Cross", commits: 84 },
  { name: "Brian Ford", commits: 113 }
];

//team.forEach(function (val) {
//  console.log(val.name.toUpperCase());
//});

var teamNames = function (member) {
  return member.name;
};

var upperNames = function (name) {
  return name.toUpperCase();
};

var filterTeam = function (member) {
  return member.commits > 100;
};

var newTeam = team.map(teamNames);

var busyTeam = team.filter(filterTeam);

var total = team.reduce(function (prev, curr) {
  return prev + curr.commits;
}, 0);

team
  .filter(filterTeam)
  .map(teamNames)
  .map(upperNames)
  .forEach(function (val) {
    console.log(val);
  });
