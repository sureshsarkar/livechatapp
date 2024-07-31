import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

export const sendMessage = async (req,res)=>{
    try {

        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

      let conversation = await Conversation.findOne({
        participants: { $all: [senderId,receiverId] },
        });

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId,receiverId]
            })
        };

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }
        //  await conversation.save();
        //  await newMessage.save();

           // This will run in paralal
           await Promise.all([conversation.save(),newMessage.save()]);

       return res.status(200).send({
            message:newMessage,
            success:true
        })
    } catch (error) {
        return res.status(200).send({
            message:`Failed to send ${error}`,
            success:false
        })  
    }
}

export const getMessage = async (req,res)=>{
    try {
        const {id: receiverId} = req.params;
        const senderId = req.user._id;
         const conversation = await Conversation.findOne({
            participants: {$all:[senderId,receiverId]}
         }).populate("messages");

         // if not conversation found
         if(!conversation){
            return res.status(200).send({
                message:[],
                success:true
            })
         }

         const messages = conversation.messages;

         return res.status(200).send({
            message:messages,
            success:true 
         });

        return res.status(201).send({
            message:"Message Got",
            success:true
        })
    } catch (error) {
        return res.status(400).send({
            message:`Error is ${error}`,
            success:false
        })
    }
}