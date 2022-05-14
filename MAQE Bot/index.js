function start(a) {
  let x = 0;
  let y = 0;
  let dir = Math.PI / 2;
  let distance = "";
  let n = 0;
  let heading = ["north", "east", "south", "west"];
  // passthrough all index
  for (var i = 0; i <= a.length; i++) {
    // check LRW
    if (a.charAt(i) == "W") {
      // store data
      distance = "0";
      i += 1;
      while (a.charAt(i) != "R" && a.charAt(i) != "L" && a.charAt(i) != "W") {
        if (i == a.length) return;
        else {
          distance += a.charAt(i);
          i += 1;
        }
        console.log(distance);
      }
      distance = Math.floor(distance);
      i -= 1;
    } else if (a.charAt(i) == "L") {
      distance = 0;
      dir += Math.PI / 2;
      n = n - 1;
    } else if (a.charAt(i) == "R") {
      distance = 0;
      dir -= Math.PI / 2;
      n = n + 1;
    }

    x += Math.round(parseInt(distance) * Math.cos(dir));
    y += Math.round(parseInt(distance) * Math.sin(dir));
    console.log(x, y);
    let trueHeading = heading[((n % 4) + 4) % 4];
    console.log(trueHeading);
  }
}
cmd = "W5RW5RW2RW1R";
//cmd = "RRW11RLLW19RRW12LW1";
//cmd = "LLW100W50RW200W10";
//cmd = "LLLLLW99RRRRRW88LLLRL";
//cmd = "W55555RW555555W444444W1";

start(cmd);
