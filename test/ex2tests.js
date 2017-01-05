/**
 * Created by mrlef on 1/5/2017.
 */


var assert = require('assert');

describe('Array', function () {  //describe bliver brugt til at groupere individuelle tests
    it('should start empty', function () { //indeholder test implementation - altså den individuelle test
        var arr = [];

        assert.equal(arr.length, 0);
    })
})

describe('string', function () {
    var str = "lars"
    it('should be equal "lars"', function () {
        assert.equal(str, "lars")
    })
    // it.only('length', function(){
    //     assert.equal(str.length, 4)
    // })
})



describe('toUpperCase', function () {
    it('should return string to uppercase', function () {
        var str = 'Luna'
        toUpperCase(str, function (data, err) {
            if (err) console.log("fejl");
            else console.log(data)
        });
    });
});


function toUpperCase(string, callback) {
    callback(string.toUpperCase())
}

//skriv mocha i terminal for at teste alt.
//Ved at bruge it.only kører man kun test på den ene test.