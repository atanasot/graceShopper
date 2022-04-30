const {
    models: { User },
  } = require("../db");

const isLoggedIn = async (req, res, next) => {
    try {
      req.user = await User.findByToken(req.headers.authorization);
      next();
    } catch (ex) {
        next(ex);
    }
  };
  
  const verifyUserOrAdmin = (req,res,next)=>{
    isLoggedIn(req,res,()=>{
      if(req.user.id === req.params.id || req.user.isAdmin){
        next()
      }else{
        const error = Error('You are not authorized');
        res.status(403).json('')
      }
    });
  }
  const verifyAdmin = (req,res,next)=>{
    isLoggedIn(req,res,()=>{
      if(req.user && req.user.isAdmin){
        next()
      }else{
        const error = Error('You are not authorized');
        res.status(403).json('')
      }
    });
  }

  module.exports = { isLoggedIn, verifyUserOrAdmin, verifyAdmin};