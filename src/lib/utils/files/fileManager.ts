import { readFile, readdir } from "fs/promises";

type FileType = 'appIcon'|'other';

export default class FileManager {
    static async get(type: FileType, name: string) {
        switch (type) {                
            case 'appIcon':
                const files = await readdir(`./apps/${name.toLowerCase()}`);

                const regex = /icon\.(jpg|jpeg|png|svg|webp)/i;
            
                const imageName = files.filter(fichier => regex.test(fichier))[0];
                
                if (!imageName) {
                    return await readFile('./icons/file.svg');
                }
            
                const image = await readFile(`./apps/${name.toLowerCase()}/${imageName}`);
        
                return image      
        }
    }
}