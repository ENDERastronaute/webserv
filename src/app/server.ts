
'use server'

import { sign } from "@/lib/utils/security/jwt";
import { execSync } from "child_process"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
    const password = formData.get('password');
    const username = formData.get('username');

    try {
        const result = execSync(`echo "${password}" | su ${username} -c "cat ./configs/.login"`).toString().trim();

        if (result !== 'test') {
            return;
        }
        
        cookies().set('id', await sign({ id: process.env.ID }));

    } catch {
        return;
    }

    redirect('/view')
}