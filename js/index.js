generateCandy = () => {
    console.log("make a candy");
    let randomIndex = Math.floor((Math.random() * 2) + 1);

}

function Candy(src) {
    this.imgSrc = src;
}

const sourPatchWatermelon = new Candy('images/SourPatchWatermelon.png');
const skittles = new Candy('images/skittles.png');
const candyBag = [sourPatchWatermelon, skittles];