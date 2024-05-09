
import { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import { execute } from './server';

interface Output {
    command: string;
    result: string;
}

export default function Terminal() {
    const [command, setCommand] = useState('');
    const [output, setOutput] = useState<Output[]>([]);

    const clientCommands: any = {
        clear: () => setOutput([]),
    }

    const handleCommandChange = (evt: any) => {
        setCommand(evt.target.value);
    }

    const handleSubmit = (evt: any) => {
        evt.preventDefault();

        let result = '';

        if (command.trim() !== '' && !command.match(/^.*\\ *$/im) && !Object.keys(clientCommands).includes(command)) {
            (async () => (result = await execute(command)))()
        }

        setOutput([...output, { command: command, result: result }]);

        if (Object.keys(clientCommands).includes(command)) {
            clientCommands[command]();
        }

        setCommand('')
    }

    return (
        <div className={`${styles.terminal} tab`}>
            <form onSubmit={handleSubmit}>
                {
                    output.map((out, index)=> (
                        <div key={index}>
                            <span>$ {out.command}</span>
                            <span>  {out.result}</span>
                        </div>
                    ))
                }
                <div className={styles.line}>
                    <span>$ </span>
                    <input type="text" value={command} onChange={handleCommandChange} />
                </div>
            </form>
        </div>
    )
}