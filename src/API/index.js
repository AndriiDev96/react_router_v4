// A simple data API that will be used to get the 
// data for our components.
export const PlayerAPI = {
  players: [
    {number: 1, name: 'Ben Blocker', position: 'G'},
    {number: 2, name: 'Dave Defender', position: 'D'},
    {number: 3, name: 'Sam Sweeper', position: 'D'},
    {number: 4, name: 'Jhon Sweet', position: 'Z'},
    {number: 5, name: 'Matt Midfielder', position: 'M'},
    {number: 6, name: 'William Winger', position: 'F'},
    {number: 7, name: 'Fillipe Forward', position: 'K'},
    {number: 8, name: 'Anders Ckochen', position: 'X'},
    {number: 9, name: 'Annie Josife', position: 'N'},
  ],
  all: function(){return this.players},
  get: function(id){
    const isPlayer = (p) => p.number === id;
    return this.players.find(isPlayer);
  }
}