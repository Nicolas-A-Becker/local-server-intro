const express = require("express");
const app = express();
app.use(express.static("public"));


app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/albums', (req, res)=>{
    albums = [];
    albums[0] = {
        title:"Mud on the Tires",
        img:"images/mud-on-the-tires.jpg",
        artist:"Brad Paisley",
        genre:"Country",
        peak:8,
        songs: ["Mud on the Tires","Celebrity","Ain't Nothin' Like","Little Moments","That's Love","Somebody Knows You Now","Famous People","Hold Me In Your Arms","Whiskey Lullaby","The Best thing That I had Goin'","The Cigar Song","Make a Mistake","Make a Mistake With Me", "Is it Raining at Your House", "Spaghetti Wester Song", "Farther Along", "Kung Pao"]
    }
    albums[1] = {
        title:"Uncaged",
        img:"images/uncaged.jpg",
        artist:"Zach Brown Band",
        genre:"Country",
        peak:1,
        songs: ["Jump Right In","Uncaged","Goodbye in Her Eyes","The Wind","Island Song","Sweet Annie","Natural Disaster","Overnight","Lance's Song","Day That I Die","Last But Not Least"]
    }
    albums[2] = {
        title:"Tides of a Teardrop",
        img:"images/tides-of-a-teardrop.png",
        artist:"Mandolin Orange",
        genre:"Americana/Folk",
        peak:164,
        songs: ["Golden Embers","The Wolves","Into the Sun","Like You Used To","Mother Deer","Lonely All the Time","When She's Feeling Blue","Late September","Suspended in Heaven","Time We Made Time"]
    }
    albums[3] = {
        title:"The Firewatcher's Daughter",
        img:"images/the-firewatchers-daughter.jpg",
        artist:"Brandi Carlile",
        genre:"Americana/Folk",
        peak:9,
        songs: ["Wherever Is Your Heart","The Eye","The Things I Regret","Mainstream Kid","Beginning to Feel the Years","Wilder","Blood Muscle Skin & Bone","I Belong to You","Alibi","The Stranger at My Door","Heroes and Songs","Murder in the City"]
    }
    albums[4] = {
        title:"Honky Tonk Attitude",
        img:"images/honky-tonk-attitude.jpg",
        artist:"Joe Diffie",
        genre:"Country",
        peak:67,
        songs: ["Honky Tonk Attitude","I'm Not Through Losin' You","Prop Me Up Beside The Jukebox","If I Had Any Pride Left at All","I Can Walk the Line","Somewhere Under the Rainbow","John Deere Green","In My Own Backyard","Here Comes That Train","And That Was the Easy Part","Cold Budweiser and a Sweet 'Tater"]
    }
    albums[5] = {
        title:"I love It",
        img:"images/i-love-it.jpg",
        artist:"Craig Morgan",
        genre:"Country",
        peak:124,
        songs: ["I Love It","Almost Home","Look At Us","In the Dream","You Never Know","What You Do to Me","Every Friday Afternoon","Where Has My Hometown Gone","Always Be Mine","Money","God, Family and Country"]
    }

    res.json(albums);
});

app.listen(3000, ()=>{
    console.log("listening on port 3000");
});