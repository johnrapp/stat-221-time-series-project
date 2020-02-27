// https://www.onthesnow.com/california/mammoth-mountain-ski-area/historical-snowfall.html?y=0&q=top

/*find:
window.onload = function() {
  var ctx2019
*/

JSON.stringify((function (){
   let data = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(y => window["config20" +  y].data.datasets[0].data).reduce((a, b) => a.concat(b));
   let dates = data.map(i => i.x).map(str => str.substring(0, 10));
   let depth = data.map(i => i.y);
   return {dates, depth};
})(), null, "")