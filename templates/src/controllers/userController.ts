import { Request , Response } from "express";

export const hello = (req : Request  , res : Response)=>{
  try{
    return res.status(200).json({
      message : "Hello !"
    })
  }catch(error){
    return res.status(500).json({
      error 
    })
  }
}