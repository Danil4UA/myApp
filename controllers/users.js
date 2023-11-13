import bcrypt from "bcrypt";
import pool from "../database.js";
export const getUsers = async (req,res)=>{
    try{
        const [result] = await pool.query(`SELECT * FROM users`)
        res.status(200).json(result)
    }catch(error){
        console.log(error)
        res.status(400)
    }
}
export const createUser = async (req,res)=>{
    try{
        req.body.password = await bcrypt.hash(req.body.password, 10);
        await pool.query(`
        INSERT INTO users (login, password)
        VALUES
        (?, ?)
        `, [req.body.login, req.body.password])
        res.status(200).json("user created")
    }catch(error){
        console.log(error)
        res.status(400)
    }
}
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        await pool.query(`DELETE FROM users WHERE id = ?`, id);
        res.status(200).json("Ok");
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Failed to delete user" });
    }
};