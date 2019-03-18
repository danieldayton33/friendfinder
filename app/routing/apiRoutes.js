const userData = require("../data/friends");

module.exports = (app)=>{
    app.get("/api/friends",(req, res)=>{
        console.log(userData);
        res.json(userData);
    });
    
    app.post("/api/friends", (req, res)=>{
        let match = [];
        
        const newUserScores = req.body.scores;
        console.log("NEW USER SCORES", newUserScores);
        //function to determine the best match
       userData.forEach(person=>{
           let userScores = person.scores
           console.log("userScores", userScores);
           let matchDifference = 0;
        for(i=0; i<userScores.length; i++){
            console.log("FIRST USER SCORE", userScores[i]);
            console.log("FIRST NEW USER SCORE", newUserScores[i])
            let scoreDifference = userScores[i] - newUserScores[i];
            console.log("DIFFERENCE", scoreDifference);
            scoreDifference = Math.abs(scoreDifference);
            console.log("DIFFERENCE", scoreDifference);
            matchDifference += scoreDifference;
            console.log("MATCHDIFFERENCE", matchDifference);
        }
            match.push(matchDifference);
       });
        console.log("MATCH", match);
        const lowestMatch = Math.min.apply(Math,match);
        console.log("LOWEST MATCH", lowestMatch)
        const finalMatch = match.indexOf(lowestMatch)
        console.log("FINAL MATCH", finalMatch);
        const bestMatch = {
            name: userData[finalMatch].name,
            photo: userData[finalMatch].photo
        }
        console.log("BEST MATCH", bestMatch)
        res.json(bestMatch);
        userData.push(req.body);
    });
}