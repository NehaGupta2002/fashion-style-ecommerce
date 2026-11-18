
import jwt from 'jsonwebtoken';
import userModel from '../model/user.model';
// export const auth = async(req,res,next)=>{
//     let token = null;
//     try {
//         if(req.headers.authorization){
//             token = req.headers.authorization.split(" ")[1];
//             console.log(token);
//             let decoded  = jwt.verify(token,process.env.JWT_SECRET)
//             console.log(decoded)
//             console.log("Decoded JWT:", decoded);
//             if(decoded){
//                 // const user = await userModel.findOne({_id:decoded.data.id}).select('-password');
//                 const user = await userModel.findById(decoded.id).select('-password');

//                 console.log('middleware',user)
//                 req.user = user;
//                 next();
//             }else{
//                 return res.status(401).json({
//                     message:"Invalid token"
//                 })
//             }

//         }else{
//             return res.status(401).json({
//                 message:"Invalid token"
//             })
//         }
//     } catch (error) {
//         return res.status(500).json({
//             message:error.message
//         })
//     }
// }



export const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // use correct secret
    console.log("DECODED:", decoded);

    const user = await userModel.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token", error: error.message });
  }
};


export const isAdmin = (req, res, next) => {
  // console.log(req.user)
  if (req.user.isAdmin === true) {
    return next();
  } else {
    return res.status(403).json({
      message: err.message,
    });
  }
};


export const protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token);
  if (!token) return res.status(401).json({ message: "Not authorized, no token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await userModel.findById(decoded.id).select("-password");
    if (!req.user) return res.status(401).json({ message: "User not found" });
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Invalid token" });
  }
};


// export const verifyAdmin = async (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];

//   if (!token) return res.status(401).json({ message: "Access token missing" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await user.findById(decoded.id);

//     if (!user || !user.isAdmin) {
//       return res.status(403).json({ message: "Not authorized as admin" });
//     }

//     req.user = user;
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };
