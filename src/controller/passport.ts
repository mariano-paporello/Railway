import { logger } from "../utils/loggers";
import { repositoryUser } from '../models/users/user.repository';
import { ifCartExist } from "./cart";

// CAMBIAR LA LOGICA PARA PODER PASARLO A CAPAS
export const searchUser= async(req,username , password,  done)=>{
    try{
        const user:any = await repositoryUser.logIn(username, password)
        if(user){
            await ifCartExist(user)
            req.session.dataUser= user
            req.session.gmail= user.gmail;
            req.session.image= user.image
            req.session.contraseña= user.password;
            req.session.username= user.username;
            return done(null, user);
        }else{
        return done(null, false, {msg: "Usuario no encontrado"})
    } 
    }
    catch(err){
        logger.error("Error: ", err)
    }
    
  }
export const createUser = async( req, username, password, done )=>{
    try {
        const {gmail, age, phoneNumber, image } = req.body
        // LOL
        const user:any = await repositoryUser.singUp({
            gmail, 
            password, 
            age, 
            phoneNumber,
            image,
            username
        })
        console.log(user)
        req.session.image= user.image
        req.session.gmail =  user.gmail
        req.session.username= user.username
        await ifCartExist(user)
        return done(null,  user)
    } catch (err) {
        return done(null, false, { mensaje: 'Error Inesperado', err });
    }
}