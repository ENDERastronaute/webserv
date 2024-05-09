
export async function execute(command: string): Promise<string> {
    const res = await fetch('/api/application/terminal', {
        method: 'POST',
        body: JSON.stringify({
            command: command
        })
    })

    const output = await res.json();

    return output.output;
}