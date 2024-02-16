const User = require("../model/user");


async function handleSignUp(req ,res){
    const { userName , email , password } = req.body;
    try {
        await User.create({
            userName,
            email,
            password,
        });
        return res.redirect("/login");
    } catch (error) {
        console.error("Error during user creation:", error.message);
        return res.status(500).send("Internal Server Error");
    }

}

async function handleLogin(req , res){
    return res.render("login");
   
}





module.exports = {
    handleSignUp ,
    handleLogin ,
}