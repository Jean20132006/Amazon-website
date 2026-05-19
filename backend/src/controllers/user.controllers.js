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
        res.status(500).json({
            message: "Internal Server error", 
            error: error.message,
            stack: error.stack
        });
        
    }
    
}

const loginUser = async (req, res) => {
    try {

        //Check if the user already exists
        const {email, password} = req.body;
        const user = await User.findOne({email: email.toLowerCase()});
        if(!user){
            return res.status(400).json({message: "user not found"});
        }

        //Compare password
        const isMatch = await user.comparePassword(password);
        if(!isMatch) return res.status(400).json({message: "Invalid credentials"});

        res.status(200).json({
            message: "user logged in",
            user: {
                id: user._id,
                email: user.email,
                username: user.username
            }
        });
    
    } catch (error) {
        res.status(500).json({
            message: "Internal Server error",
            error: error.message,
            stack: error.stack
        });
        
        
    }
}

const logoutuser = async (req, res) => {

    try {
        const {email} = req.body;
        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "Logged out"
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Internal Server error",
            error: error.message,
            stack: error.stack
        });
        
    }
    

}

export{
    registerUser,
    loginUser,
    logoutuser
};
