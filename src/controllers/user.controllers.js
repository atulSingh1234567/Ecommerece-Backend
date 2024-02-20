import { Address } from "../models/address.models.js";
import { User } from "../models/user.models.js";

// export const registerUserController = async (req, res) => {
//     try {
//       const { username, email,gender, alternatePhone,signupPhoneNumber } =
//         req.body;
//         console.log(!username);
//         console.log(!email)
//         console.log(!signupPhoneNumber);
//         console.log(!alternatePhone);
//         console.log(!gender)
//       // validation
//       if (
//         !username ||
//         !email ||
//         !signupPhoneNumber ||
//         !alternatePhone ||
//         !gender
//       ) {
//         return res.status(400).send({
//           success: false,
//           message: "Please Provide All Fields",
//         });
//       }
//       //check exisiting user
//       const exisitingUSer = await User.find({ email });
//       //validation
//       if (exisitingUSer) {
//         return res.status(500).send({
//           success: false,
//           message: "email already taken",
//         });
//       }
//   //   await User.createCollection();
//    await User.create({
//       username,
//       email,
//       gender,
//       alternatePhone,
//       signupPhoneNumber,
//     });
//     res.status(201).send({
//       success: true,
//       message: "Registeration Success, please login",

//     });
//     } catch (error) {
//       console.log(error);
//       res.status(500).send({
//         success: false,
//         message: "Error In Register API",
//         error,
//       });
//     }
//   };

export const registerUserController = async (req, res) => {
  try {
    const {username,email,alternatePhone,signupPhoneNumber,gender} = req.body.formData;
    const {address,city,landmark,pincode} = req.body.finalAddress;
    if(User.find({signupPhoneNumber}.length != null || User.find({signupPhoneNumber} != undefined))){
      const user = await User.create({
        username, email, gender, alternatePhone, signupPhoneNumber
      });
      const userAddress = await Address.create({
        address,city,landmark,pincode
      })
      res.status(201).send({
        success: true,
        message: "User Registered Successfully",
        user
      })
    }
    else{
      res.send("User Already exists!!")
    }
  } catch (error) {
    console.log("AN ERROR OCCURRED!!" , error);
    res.status(500).send({
      success: false,
      message: "Erro in registering",
      error
    })
  }
}

export const getUser = async (req, res) => {
  const user = await User.find();
  res.send(user);
}
