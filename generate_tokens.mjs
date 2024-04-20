
import { randomBytes } from "crypto";
import { readFile, writeFile } from "fs/promises";

async function write(filePath, searchString, newData) {
    let data = await readFile(filePath, 'utf-8');

    const index = data.indexOf(searchString);

    if (index === -1) {
        console.error(`the key : ${searchString} doesn't exist in .env file, did you delete it by mistake ?`);
        process.exit();
    }

    const nlindex = data.indexOf('\n', index) !== -1 ? data.indexOf('\n', index) : data.length;
    
    const newDataString = data.substring(0, index + searchString.length) + newData + data.substring(nlindex);
    
    await writeFile(filePath, newDataString, 'utf-8');
}

const jwtToken = randomBytes(64).toString('hex');
const id = randomBytes(4).toString('hex')

await write('.env', 'JWT_SECRET=', jwtToken);
console.log('JWT token generated');
await write('.env', 'ID=', id);
console.log('ID generated');