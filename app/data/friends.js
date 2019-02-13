
var Friend = function(name, photo, scores){
    this.name =  name,
    this.photo = photo,
    this.scores = scores,

    this.compareFriend = function(otherFriend){
        var totalDiff = 0;
        for (let i = 0; i < this.scores.length; i++) {
            totalDiff += Math.abs(this.scores[i] - otherFriend.scores[i])            
        }

        return totalDiff;
    }
};

var friendsArray = [
    new Friend("Brian May", "http://tinyurl.com/y6r8agxu", [2, 2, 3, 5, 1, 1, 1, 2, 5, 4]),
    new Friend("Jimi Hendrix", "http://tinyurl.com/y3pezk4d", [1, 5, 5, 4, 4, 3, 5, 1, 4, 5]),
    new Friend("Jimmy Page", "http://tinyurl.com/y3sjtkuw", [5, 2, 4, 4, 5, 3, 1, 3, 5, 5]),
    new Friend("David Gilmour", "http://tinyurl.com/y59o6yb9", [3, 5, 5, 5, 1, 2, 1, 2, 5, 1]),
    new Friend("Guthrie Govan", "http://tinyurl.com/yxtm6dk7", [2, 3, 4, 1, 5, 1, 3, 5, 2, 3]),
    new Friend("Jeff Buckley", "http://tinyurl.com/y2h97l63", [3, 3, 3, 5, 1, 3, 5, 1, 4, 4]),
    new Friend("Slash", "http://tinyurl.com/y3whdntc", [5, 1, 5, 2, 2, 5, 1, 4, 2, 5]),
    new Friend("The Edge", "http://tinyurl.com/yyexyd22", [1, 1, 2, 5, 1, 3, 1, 1, 5, 1]),
    new Friend("Alex Lifeson", "http://tinyurl.com/y2t4uzth", [5, 5, 3, 3, 4, 2, 1, 2, 4, 2]),
    new Friend("James Hetfield", "http://tinyurl.com/y58g9z54", [4, 1, 2, 3, 1, 5, 1, 5, 1, 5]),
    new Friend("Jack Black", "http://tinyurl.com/yysvsdcg", [5, 4, 3, 4, 1, 4, 1, 5, 3, 4]),
];

function bestMatch(user, fArray){
    
}

module.exports = {
    friends: friendsArray
}
