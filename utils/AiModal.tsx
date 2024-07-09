import * as https from 'https';

interface GenerationConfig {
    temperature: number;
    top_k: number;
    top_p: number;
    max_tokens: number;
    web_access: boolean;
}

interface Message {
    role: string;
    content: string;
}

interface ChatResponse {
    result: string;
    status: boolean;
    server_code: number;
}

const options = {
    method: 'POST',
    hostname: 'chatgpt-42.p.rapidapi.com',
    port: null,
    path: '/conversationgpt4-2',
    headers: {
        'x-rapidapi-key': 'cca330428dmsh4b459b029c77e3cp1a7504jsn8f61efbba564',
        'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
        'Content-Type': 'application/json'
    }
};

const generationConfig: GenerationConfig = {
    temperature: 0.2,
    top_k: 5,
    top_p: 0.9,
    max_tokens: 806,
    web_access: false
};

export const chatSession = (userMessage: string, history: Message[] = []): Promise<ChatResponse> => {
    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            const chunks: Uint8Array[] = [];

            res.on('data', (chunk) => {
                chunks.push(chunk);
            });

            res.on('end', () => {
                const body = Buffer.concat(chunks);
                try {
                    const response: ChatResponse = JSON.parse(body.toString());
                    resolve(response);
                } catch (error) {
                    reject(error);
                }
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.write(JSON.stringify({
            messages: [
                ...history,
                {
                    role: 'user',
                    content: userMessage
                }
            ],
            ...generationConfig
        }));

        req.end();
    });
};
