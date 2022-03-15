const User = require("../models/User");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const upload = multer({ dest: "public/" });

const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};
const getOneUser = async (req, res) => {
  try {
    const id = req.params.userId;
    const user = await User.findById(id);
    res.status(200).json(user ? user : "El producto no existe");
  } catch (error) {
    res.status(200).json({ msj: "Error al consultar el id", error });
  }
};

//Crear un usuario en la base de datos
const createUsers = async (req, res) => {
  try {
    console.log(req.body);
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ status: "Usuario creado correctamente" });
    //throw
  } catch (error) {
    console.log(error);
    res.status(203).json({ status: "Usuario no creado correctamente", error });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.userId;
  await User.findByIdAndDelete(id);
  res.status(200).json({ msj: "Usuario eliminado" });
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) throw "Uno o mas campos estan vacios";

    const user = await User.findOne({ email });

    if (user) {
      if (password === user.password) {
        // generar token

        const token = jwt.sign(
          {
            user_id: user._id,
            email,
            username: user.username,
            phone: user.phone,
            permissions: user.Permissions,
            image: user.image,
          },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "2h" }
        );

        return res.status(200).json({ status: "Sesion iniciada", token });
      }

      throw "Credentials are inavlid";
    }

    throw "Usuario no existe";
  } catch (err) {
    res.status(401).json({ err });
  }
};

const uploadProfilePicture = upload.single("file");

const updateProfilePictureInBD = async (req, res) => {
  if (req.file) {
    const id = req.params.userId;
    const updated = await User.findByIdAndUpdate(id, {
      image: req.file.filename,
    });
    res.status(201).json(updated);
  }
};

module.exports = {
  getUsers,
  getOneUser,
  createUsers,
  deleteUser,
  login,
  uploadProfilePicture,
  updateProfilePictureInBD,
};
