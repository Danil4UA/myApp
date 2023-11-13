import pool from "../database.js";
export const getPosts = async (req,res)=>{
    try{
        const [result] = await pool.query(`
        SELECT * FROM posts
        `)
        res.status(200).json(result)
    }catch(error){
        console.log(error)
        res.status(400).json("Something went wrong")
    }
}
export const createPost = async (req,res)=>{
    try{
        await pool.query(`
        INSERT INTO posts (title, content)
        VALUES
        (?, ?)
        `, [req.body.title, req.body.content])
        res.status(200).json("created")
    }catch(error){
        console.log(error)
        res.status(400).json("Something went wrong")
    }
}

export const getSinglePost = async (req,res)=>{
    try{
        const id = req.params.id;
        const [result] = await pool.query(`
            SELECT * FROM posts WHERE id = ? 
        `, id)
        res.status(200).json(result)
    }catch(error){
        console.log(error)
    }
}
export const updatePost = async (req, res) => {
    try {
        const id = req.params.id;
        const [result] = await pool.query(`
            UPDATE posts 
            SET title = ?, content = ?
            WHERE id = ?
        `, [req.body.title, req.body.content, id]);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Failed to update post" });
    }
};

export const deletePost = async (req,res)=>{
    try{
        const id = req.params.id;
        await pool.query(`
        DELETE FROM posts WHERE id = ?
        `, id)
        res.status(400).json({message: "Deleted successfully"})
    }catch(error){
        console.log(error)
        res.status(400).json({ error: "Failed to delete post" });
    }
}
