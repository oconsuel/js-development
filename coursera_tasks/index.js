/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var arrayhash = [];
    var hash = false;
    var position = 0;

    for(var i = 0; i < tweet.length; i++){
        if(tweet[i] === '#'){
            hash = true;
            position = i;
        }

        if(tweet[i] === ' ' && hash){
            arrayhash.push(tweet.slice(position + 1, i))
            hash = false;
        }

        else if(i === tweet.length - 1 && hash){
            arrayhash.push(tweet.slice(position + 1,i + 1))
            hash = false;
        }
    }

    return arrayhash;
};
