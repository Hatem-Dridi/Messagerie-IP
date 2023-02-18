import { Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";
import User from "../models/userModel";

function createToken(_id: string) {
    return jwt.sign({_id}, process.env.SECRET as Secret, {expiresIn: "3d"});
}


export async function signUp(req: Request, res: Response) {
    const { email, password, userName } = req.body;

    try {
        const user = await User.signup(email, password, userName);
        const token = createToken(user._id);
        res.status(200).json({user, token});
    } catch (error) {
        res.status(400).json({error: (error as Error).message});
    }
}