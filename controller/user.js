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
        return res.status(500).send("This email already registered");
    }

}

async function handleLogin(req , res){
    const { email , password  } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.render("login", {
                error: "Invalid email or password",
            });
        }
        // Redirect to home page if login is successful
        return res.redirect("/");
    } catch (error) {
        console.error("Error during login:", error.message);
        return res.status(500).send("Internal Server Error");
    }
   
}





module.exports = {
    handleSignUp ,
    handleLogin ,
}