const app = require('./app')
const dotenv = require('dotenv')
const connecttoDB = require('./database/database')
//  uncaught Exception

process.on("uncaughtException", (err)=>
{
    console.log({Error: err.message});
    console.log("Shutting down the server due to uncaught exception.")
    process.exit(1);
})
dotenv.config({
  path: "backend/config/config.env"
});
connecttoDB();

const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server is running at port http://localhost:${process.env.PORT}`)
});


// unhandeled promise rejection

process.on("unhandledRejection", (err)=>
{
    console.log({Error: err.message});
    console.log("Shutting down the server due to unhandeled promise rejection.")
    server.close(()=>
    {
        process.exit(1);
    })
})