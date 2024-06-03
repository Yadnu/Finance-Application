'use server';

import { cookies } from "next/headers";
import { createAdminClient, createSessionClient } from "../appwrite";
import { parseStringify } from "../utils";
import { ID } from "node-appwrite";


export const signIn = async () =>{
    try{

    } catch (error){
        console.error('Error', error);
    }

}

export const signUp = async (userData: SignUpParams ) =>{
    try{
        const { account } = await createAdminClient();
        const newUserAccount = await account.create(ID.unique(), userData.email, userData.password, `${userData.firstName} ${userData.lastName}`);
        const session = await account.createEmailPasswordSession(userData.email, userData.password);
        cookies().set("appwrite-session", session.secret,{
            path:"/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        })
        return parseStringify(newUserAccount)
    } catch (error){
        console.error('Error', error);
    }

}

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      const result = await account.get();
  
      const user = await getUserInfo({ userId: result.$id})
  
      return parseStringify(user);
    } catch (error) {
      console.log(error)
      return null;
    }
  }