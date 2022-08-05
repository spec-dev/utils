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

export function jsonResp(body: StringKeyMap): Response {
    return new Response(JSON.stringify(body), {
        headers: { 'Content-Type': 'application/json' },
    })
}

export function success(data: any): Response {
    return jsonResp({ data, error: null })
}

export function error(error: any): Response {
    let msg = error
    if (typeof error === 'object') {
        msg = error.message || error.msg
    }
    return jsonResp({ error: msg, data: null })
}
