import pool from "../database.js";
import axios from "axios"
const getPairsPrice = async (req,res)=>{
    try{
        const pairs = await req.body.pairs;
        const result = await axios.get(`https://www.freeforexapi.com/api/live?pairs=${pairs}`)
        res.status(200).json(result.data.rates)
    }catch(error){
        console.error(error);
        res.status(400).json({ error: "Failed to get price" });
    }
}