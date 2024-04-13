import jwt from 'jsonwebtoken'
const generateTokenAndSetCookie= (userId,res)=> {
    const token= jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: '30d'

    })
    res.cookie("jwt", token,{
        maxAge: 30*24* 60 * 60 * 1000, //MS
        httpOnly:true, //prevent XSS attack cross-site scripting attack
        sameSite: "strict", //CSRP attacks cross-site request forgery attack
        secure: process.env.NODE_ENV !== "development "


    });
};
export default generateTokenAndSetCookie;