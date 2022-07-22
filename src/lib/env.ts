export function getEnvVar(key: string): any {
    // Node.js
    if (globalThis.hasOwnProperty('process')) {
        const process = (globalThis as unknown as { [key: string]: any }).process
        return process.env[key]
    }
    // Deno
    else if (globalThis.hasOwnProperty('Deno')) {
        const deno = (globalThis as unknown as { [key: string]: any }).Deno
        return deno.env.get(key)
    }

    return null
}
