"use server"

import { AuthError } from "next-auth"
import { signIn } from "../auth"

export async function loginIn(formData: any) {
    try {
      await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirectTo: "/dashboard/hero"
      })
    } catch (error) {
      if(error instanceof AuthError){
        switch(error.type) 
        {
          case "CredentialsSignin":
            return { error: "Invalid credentials" }
          default:
            return { error: "An error occurred" }
        }
      }
      throw error;
    }
}