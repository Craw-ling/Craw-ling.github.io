const clockText = document.querySelector("#clock");

const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
];

function cycle2() {
    const colorLen = colors.length;
    let NumOfColor = Math.floor(Math.random() * colorLen);
    const NumOfColor2 = Math.floor(Math.random() * colorLen);

    if (NumOfColor === NumOfColor2) {
        NumOfColor = NumOfColor2 - 1;
        if (NumOfColor < 0) {
            NumOfColor = NumOfColor2 - 1;
        }
    }

    clockText.style = `background: linear-gradient(0.25turn,${colors[NumOfColor]},${colors[NumOfColor2]});-webkit-background-clip: text;
    -webkit-text-fill-color: transparent; -webkit-filter: drop-shadow(black 2px 2px 3px)`;
}

function cycle() {
    const time = new Date();
    const first = String(time.getHours()).padStart(2, "0");
    const second = String(time.getMinutes()).padStart(2, "0");
    const third = String(time.getSeconds()).padStart(2, "0");
    clockText.innerText = `${first}:${second}:${third}`;
}

cycle()
cycle2();
setInterval(cycle, 1000);