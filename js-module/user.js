
import {TextMessage} from"./text-message.mjs";
import {MessageSender}



//user Group
class user{

    constructor(_id,_name,_profilePic,_bio,_status){
        this.id =_id;
        this.name=_name;
        this.profilePic=_profilePic;
        this.bio=_bio;
        this.status=_status
    }

   //To send a message using MessageSender
 sendMessage(){
    //1. Creating a Message
    var message = new TextMessage("TextMessage",1,2, Date());
    //2.Creating message sender
    var sender = new MessageSender();
    //3.sends message
    sender.send(message);
    console.log("Message.body");
    console.log("this.status");
    console.log("Message sent"); 
 }
}

//Creating object (1 instance of group)
var user = new User();
user.sendMessage();
