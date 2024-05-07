
'use server'

import { sign } from "@/lib/utils/security/jwt";
import { execSync } from "child_process"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(prevState: any, formData: FormData) {
    const password = formData.get('password');
    const username = formData.get('username') as string;

    try {
        if (!username.includes('&') && !username.includes('|') && !username.includes(';')) {
            const result = execSync(`echo "${password}" | su ${username} -c "cat ./configs/.login"`).toString().trim();

            if (result !== 'test') {
                return {
                    message: 'Invalid credentials'
                };
            }
    
            cookies().set('id', await sign({ id: process.env.ID }));
        }
        else {
            return {
                message: 'Invalid credentials'
            };
        }


    } catch {
        return {
            message: 'Invalid credentials'
        };
    }

    redirect('/view')
}