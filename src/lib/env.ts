export const getEnvVar = (key: string): any => {
    if (globalThis.hasOwnProperty('process')) {
        const process = (globalThis as unknown as { [key: string]: any }).process
        return process.env[key]
    } else if (globalThis.hasOwnProperty('Deno')) {
        const deno = (globalThis as unknown as { [key: string]: any }).Deno
        return deno.env.get(key)
    }
}
