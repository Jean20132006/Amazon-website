import { User } from "../models/user.models.js";

const registerUser = async (req, res) => {

    try {
        const {username, email, password} = req.body;

        // Basic Validation
        if(!username || !email || !password){
            return res.status(400).json({message: "All fields are important"});
        }

        // Check if the user already exists
        const existing = await User.findOne({email: email.toLowerCase()});
        if(existing){
           return res.status(400).json({message: "user already exists"}); 
        }

        //Create a user
        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password,
            logIn: false
        });

        res.status(201).json({
            message: "user registered successfully",
            user: {id: user._id, username: user.username, email: user.email}
        });
    } catch (error) {
        res.status(500).json({message: "Internal Server error", error: error.message});
        
    }
    
}

export{
    registerUser
}