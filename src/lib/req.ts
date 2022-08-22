import { StringKeyMap } from './types'

export async function getPayload(req: Request): Promise<any[] | null> {
    try {
        const payload = await req.json()
        return payload || {}
    } catch (err) {
        console.error(`Error parsing JSON payload: ${err}`)
        return null
    }
}

export function jsonResp(data: StringKeyMap): Response {
    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
    })
}

export function error(error: any): Response {
    let msg = error
    if (typeof error === 'object') {
        msg = error.message || error.msg
    }
    return jsonResp({ error: msg })
}
