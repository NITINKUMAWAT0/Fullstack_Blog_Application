export const register = async (res, res, next)=>{
    try {
        const { firstName, lastName, email, password, image, accoutType, provider} = req.body;

        if(!(firstName || lastName || email || password)){
            return next ("Provide Required fields");
        }

        if(accoutType === "writer" &&  !image){
            return next ("Provide Required fields");
        }



    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message});
        
    }
}

export const googleSignup = async (res, res, next)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message});
        
    }
}

export const login = async (res, res, next)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message});
        
    }
}