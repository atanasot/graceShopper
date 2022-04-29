const router = require("express").Router();
const {
  models: { User },
} = require("../db");
const { isLoggedIn, verifyUserOrAdmin, verifyAdmin } = require("./verifyAuth");
module.exports = router;
//all users
router.get("/", verifyAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "username", "isAdmin"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

//single user
router.get('/:id', verifyAdmin, async (req, res, next) => {
  try {
    const singleUser = await User.findByPk(req.params.id);
    if (!singleUser) {
      const error = new Error('USER NOT FOUND');
      error.status = 404;
      throw error;
    }
    res.status(200).send(singleUser);
  } catch (err) {
    next(err);
  }
});

//add user
router.post("/", verifyAdmin, async (req, res, next) => {
  try {
    const newUser = await User.create(req.body.user)({
    });
    res.status(201).send(newUser);
  } catch (err) {
    next(err);
  }
});

//delete user
router.delete("/:id", verifyAdmin, async(req,res,next)=>{
  try{
    const singleUser = await User.findByPk(req.params.id);
    await singleUser.destroy();
    res.sendStatus(204);
  }catch(ex) {
    next(ex)
  }
})
