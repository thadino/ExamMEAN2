/**
 * Created by mrlef on 1/5/2017.
 */


// Question 1 - Why would you consider a Scripting Language as JavaScript as your Backend Platform. --------------------

/*
 Nogle af de gode ting ved at bruge Javascript som backend language er:

 * Man kan bruge callbacks, det vil sige man kan let smide en funktion ind som et parameter, med simpel syntaks.
 */


// function _deleteCoffeeBrand(CoffeeBrandID, callback) {  // den tager 2 input parametre, brandId og callback.
//         if (CoffeeBrandID) {
//             CoffeeBrand.deleteCoffeeBrand(CoffeeBrandID, function (data2) {  //her sletter vi et brand og den funktion
//                 //som gør det har en callback i sig, som den sender tilbage til denne funktion som "data2".
//                 callback(data2) // Den kan vi så sende tilbage til den funktion som har kaldt _deleteCoffeeBrand.
//             })
//         } else callback(false) // eller bare sende false tilbage.
// }

/*

 * Der findes packagemanager som NPM, det gør at man let kan tilføje og manage sine dependencies i et projekt.

 * JS på frontend, JS på backend, når man arbejder med AJAX, JSON og REST API's gør det kommunikationen
 * super let.

 */





// Question 2 Explain Pros & Cons in using Node.js + Express to implement your  ----------------------------------------
// Backend compared to a strategy using for example Java/JAX-RS/Tomcat


/*
 Express er et godt framework til at lave webudvikling og mobilapplikationer. Det er nemt at bruge.
 Node.js er ligeledes let at bruge, det er eventdriven og non-blocking. Plus det er open-source hvilket vil sige
 der er mange moduler man kan tage i brug.


 */






// Question 3 - Explain, using relevant examples, about testing JavaScript code, relevant packages ---------------------
// (Mocha etc.) and how to test asynchronous code.

//I test mappen tester vi asynkron kode, samt andre eksempler, ved hjælp af Mocha.


// Question 4 - Explain, using a relevant examples, your strategy for implementing a REST-API with ---------------------
//Node/Express and show how you can "test" all the four CRUD operations
//programmatically using for example the Request package

//Se testAfApi.js for vores api tests. Husk at køre server på test/api.js


// Question 5 - Explain, using relevant examples, different ways to mock out databases, HTTPrequest etc. ---------------


// Question 6 - Explain, using relevant examples, the Express concept; middleware. -------------------------------------

/*
 Middleware funktioner er funktioner som har adgang til både req og res objecterne, samt "next" middleware funktionen.
 Middleware kan eksekvere kode, lave ændringer på req og res objecterne, slutte req-res cycklus og kalde "next"


 I vores app bruger vi det således:

 Vores middleware består i at tjekker på tokens på requests. Bliver requestet ikke denied så bliver der kaldt next som
 sender brugeren videre i sit request.
 */

// app.all('/api/*', function (req, res, next) {
//     var secretKey;
//     // Her henter vi først secretKey
//     var getSecret = Secret.getSecretKey(function (data) {
//         secretKey = data;
//         //Hvis vi finder secretKey går vi videre.
//         if (getSecret !== null) {
//             // check header  for Token
//             console.log("her er req: " + req)
//             console.log("checking if there is a accessToken.")
//             var accessToken = req.get('accessToken'); //det er navnet vi skal give accessToken i request fra client.
//             console.log("her er accessToken: " + accessToken)
//             // decode Token
//             if (accessToken !== null) {
//                 console.log("Verifying said accessToken.")
//                 // verifies Token
//                 jwt.verify(accessToken, secretKey, function (err, decoded) {
//                     if (err) {
//                         console.log("accessToken blev ikke verified.")
//                         var refreshToken = req.get('refreshToken');
//                         //hvis vi finder en refreshToken
//                         if (refreshToken !== null) {
//                             console.log("verifying refreshToken: " + refreshToken);
//
//                             User.getUserByRefreshToken(refreshToken, function (user) {
//                                 //her skal vi tjekke på refreshToken før vi går videre nedenunder.
//                                 if (user === false) {
//                                     console.log("kunne ikke verify refreshToken")
//                                     //det virkede ikke vi sender user til Login.
//                                     res.status(401).send(false);
//                                 } else {
//                                     console.log("refreshToken blev verified, laver ny accessToken");
//                                     //Hvis vi får lavet en ny accessToken sender vi user til home med en accessToken. Den skal client gemme i sharedPreferences og lave en ny cookie med den i.
//                                     //lav ny accessToken
//                                     Token.getToken(user, function (data) {
//                                         console.log("hvad er user? " + user)
//                                         console.log("Success vi har fået en ny accessToken: " + data)
//                                         var newAccessToken = data;
//                                         req.headers.accessToken = newAccessToken;
//                                         jwt.verify(newAccessToken, secretKey, function (err, decoded) {
//                                             console.log("this is decoded from authenticate in app.ja: " + JSON.stringify(decoded) + " her er info vi skal have " + decoded.data.roleId)
//                                             req.decoded = decoded;
//                                             next();
//                                         })
//                                     });
//                                 }
//                             });
//                         }
//                     } else {
//                         // if everything is good, save to request for use in other routes
//                         req.headers.accessToken = accessToken;
//                         req.decoded = decoded;
//                         console.log("accessToken blev verified")
//                         next();
//                         // res.redirect(307, "/home"); //redirect til appens "home" side - Kan ikke finde ud af hvordan jeg sender decoded med. Skal jeg lave en cookie?
//                     }
//                 });
//             } else {
//                 console.log("No Token found will start redirecting...")
//                 // if there is no Token
//                 //redirect user to login page.
//                 res.status(401).send("Send bruger til login side.");
//             }
//         }
//     })
// });