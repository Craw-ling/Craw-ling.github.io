const backgorunds = ["1.png", "2.jpg", "3.jpg", "4.jpg"]

function selectBg() {
    let sequence = Math.floor(Math.random()*backgorunds.length);
    //sequence = "2";
    document.body.style = `background-image: url(imgs/${backgorunds[sequence]})`;
}

selectBg();