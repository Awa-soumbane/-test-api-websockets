import { Body, OnModuleInit } from "@nestjs/common";
import { 
MessageBody,
SubscribeMessage,
WebSocketGateway,WebSocketServer } from "@nestjs/websockets";
import { Server }from 'socket.io';


@WebSocketGateway ()
export class MyGateway implements OnModuleInit{
   
    @WebSocketServer()
    server: Server;
    
    onModuleInit() {
        this.server.on('connection', (Socket)=>
        {
            console.log(Socket.id); 
            console.log('connexion');
        });
    }

@SubscribeMessage ('awa soumbane')
onNewMessage(@MessageBody()body:any){
    console.log(body);
    this.server.emit('onMessage', {
        prenom:'AS',
        content:body,
    })
}
}