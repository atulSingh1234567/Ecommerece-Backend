import { Address } from "../models/address.models.js";
import { User } from "../models/user.models.js";

export const registerUserController = async (req, res) => {
  try {
    const { username, email, gender, alternatePhone, signupPhoneNumber } =
      req.body.formData;

    console.log(username)
    const { address, city, landmark, pincode } = req.body.finalAddress;
    const userAddress = await Address.create({
      address, city, landmark, pincode
    })
    //       // validation
    if (
      !username ||
      !email ||
      !signupPhoneNumber ||
      !alternatePhone ||
      !gender
    ) {
      return res.status(400).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    //       //check exisiting user
    console.log("execuing")
    const exisitingUSer = await User.find({ signupPhoneNumber });
    //       //validation
    console.log(exisitingUSer)
    if (exisitingUSer.length != 0) {
      console.log(exisitingUSer)
      return res.status(200).send(exisitingUSer);
    }
    //   await User.createCollection();
    else {
      console.log('done====================')
      await User.create({
        username,
        email,
        gender,
        alternatePhone,
        signupPhoneNumber,
        address: userAddress
      });
      res.status(201).send({
        success: true,
        message: "Registeration Success, please login",

      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Register API",
      error,
    });
  }
};

// export const registerUserController = async (req, res) => {
//   try {
//     const {username,email,alternatePhone,signupPhoneNumber,gender} = req.body.formData;
//     const {address,city,landmark,pincode} = req.body.finalAddress;
//     const userAddress = await Address.create({
//       address,city,landmark,pincode
//     })
//     if(User.find({signupPhoneNumber}.length != null || User.find({signupPhoneNumber} != undefined))){
//       const user = await User.create({
//         username, email, gender, alternatePhone, signupPhoneNumber,address: userAddress
//       });

//       res.status(201).send({
//         success: true,
//         message: "User Registered Successfully",
//         user
//       })
//     }
//     else{
//       res.send("User Already exists!!")
//     }
//   } catch (error) {
//     console.log("AN ERROR OCCURRED!!" , error);
//     res.status(500).send({
//       success: false,
//       message: "Erro in registering",
//       error
//     })
//   }
// }

export const getexistingUser = async (req, res) => {
  const { signupPhoneNumber } = req.body
  const user = await User.find({ signupPhoneNumber }).populate('address').exec();
  res.send(user);
}

export const showUsers = async (req, res) => {
  const user = await User.find({});
  res.send(user)
}
