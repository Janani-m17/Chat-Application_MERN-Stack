import jwt from "jsonwebtoken";

const isAuthenicated = async(req,res, next) =>{
    try{
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({message:"User not authenicatd"})
        };
        const decode = await jwt.verify(token,process.env.JWT_SECRET_KEY);
        // console.log(decode);
        if(!decode){
            return res.status(401).json({message:"Invalid token"});
        };
         
        req.id = decode.userId;
        next();
    } catch(error){
        console.log(error);
    }
};

export default isAuthenicated;

const req = {
    id:"",
}

req.id = "mysecretkey"