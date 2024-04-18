
import { randomBytes } from "crypto";
import { readFile, writeFile } from "fs/promises";

async function write(filePath, searchString, newData) {
    let data = await readFile('./.env', 'utf-8');

    const index = data.indexOf(searchString);

    if (index === -1) {
        throw new Error(`the key : ${searchString} doesn't exist in .env file, did you delete it by mistake ?`)
    }

    let nlIndex = data.indexOf('\n', index);

    if (nlIndex === -1) {
        nlIndex = data.length;
    }
    
    const newDataString = data.substring(0, index + 11) + newData + data.substring(data.indexOf('\n', index));
    
    await writeFile('.env', newDataString, 'utf-8');
}

const jwtToken = randomBytes(64).toString('hex');
const id = randomBytes(4).toString('hex')

write('.env', 'JWT_SECRET=', jwtToken);
write('.env', 'ID=', id);