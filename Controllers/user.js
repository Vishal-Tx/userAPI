import { ObjectId, ObjectID } from "bson";
import { object } from "webidl-conversions";
import User from "../models/user.js";

export const createUser = async (req, res) => {
  const { email, name } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    const result = await User.create({
      email,
      name,
    });

    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const transferAmount = async (req, res) => {
  const { from, to, amount } = req.body;
  //   console.log(req.body);

  try {
    const fromUser = await User.findById(from);

    const toUser = await User.findById(to);

    if (!fromUser)
      return res
        .status(404)
        .json({ message: "The Sender Account doesn't exist" });

    if (!toUser)
      return res
        .status(404)
        .json({ message: "The Receiver Account doesn't exist" });

    if (!amount)
      return res.status(400).json({ message: "No transfer amount found." });

    if (amount <= 0)
      return res
        .status(400)
        .json({ message: "Amount can't be zero or negative" });

    if (fromUser.coin < amount)
      return res.status(400).json({ message: "Insufficient Amount" });

    fromUser.coin = fromUser.coin - parseInt(amount);
    toUser.coin = toUser.coin + parseInt(amount);

    await fromUser.save();
    await toUser.save();
    console.log("ufromUser", fromUser);
    console.log("utoUser", toUser);
    return res.status(200).json({ fromUser, toUser });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

export const checkBalance = async (req, res) => {
  const { id: _id } = req.body;

  try {
    const existingUser = await User.findById(_id);
    if (!existingUser) {
      return res.status(400).json({ message: "User doesn't exists." });
    }

    const balance = existingUser.coin;
    res.status(200).json({ balance });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
