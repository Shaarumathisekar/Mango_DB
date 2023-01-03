
import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

//environmental variables - env
console.log(process.env.MONGO_URL);

//const express = require("express");
//imported 3 rd party package
const app = express();//calling the imported package
const PORT = 4000;

//connection
//const MONGO_URL = "mongodb://127.0.0.1";
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL); // dail
await client.connect(); // call  //how await is working without async function 
//(reason: top level await new feature without async function . await will work)
console.log("Mongo is connected !!!");
//     return client;
//   }

//   const client = await createConnection();

//xml json
// middleware -> express.json() -JSON -> JS object
//commonly we are using here instead of using in many places.
app.use(express.json());

app.get("/", function (request, response) {
    response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

//Task 1
//http://localhost:4000/movies - movies(data)

app.get("/movies", async function (request, response) {
    if (request.query.rating) {
        request.query.rating = +request.query.rating;
    }
    console.log(request.query);
    //mongo dbquery ()
    //db.movies.find({})
    // mogo db query to nodejs
    //curser - Pagination  | cursor -> Array | toArrya()
    const movies = await client
        .db('b40wd')
        .collection('movies')
        .find(request.query)
        .toArray();

    //console.log(movies);

    response.send(movies);
});


//http:/   /localhost:4000/movies/99

app.get("/movies/:id", async function (request, response) {
    const { id } = request.params;
    //mongo dbquery ()
    //db.movies.findOne( { id: '100'})
    // mogo db query to nodejs
    const movie = await client
        .db('b40wd')
        .collection('movies')
        .findOne({ id: id });

    console.log(movie);
    movie
        ? response.send(movie)
        : response.status(404).sendStatus({ message: "movie not found" });

});

//xml json
// middleware -> express.json() -JSON -> JS object
//create query in postman
//app.post("/movies", express.json(), async function (request, response) {
app.post("/movies", async function (request, response) {
    const data = request.body;
    console.log(data);
    //insertquery
    //db.movies.insertMany(data)
    const result = await client
        .db('b40wd')
        .collection('movies')
        .insertMany(data);

    response.send(result);
});

app.delete("/movies/:id", async function (request, response) {
    const { id } = request.params;
    //mongo dbquery ()
    //db.movies.deleteOne({id: id})
    // mogo db query to nodejs
    const result = await client
        .db('b40wd')
        .collection('movies')
        .deleteOne({ id: id })

    console.log(result);
    result.deletedCount > 0
        ? response.send({ message: "movie deleted successfully" })
        : response.status(404).send({ message: "movie not found" });

});

app.put("/movies/:id", async function (request, response) {
    const { id } = request.params;
    const data = request.body;
    //mongo dbquery ()
    //db.movies.updateOne( { id: '99'}, {$set: {rating: 9}})
    // mogo db query to nodejs
    const result = await client
        .db('b40wd')
        .collection('movies')
        .updateOne({ id: id }, { $set: data });

    console.log(result);

    response.send(result);
});
app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
