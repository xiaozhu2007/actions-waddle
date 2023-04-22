// This is the demo secret key. In prod, we recommend you store
// your secret key(s) safely.
const SECRET_KEY = '0x4AAAAAAABBzssgfcpBXVvAoaR03SGp6Gg';

export default function handler(request, response) {
    const body = request.body;
    // Turnstile injects a token in "cf-turnstile-response".
    const token = body.get('cf-turnstile-response');
    // Validate the token by calling the "/siteverify" API.
    let formData = new FormData();
    formData.append('secret', SECRET_KEY);
    formData.append('response', token);

    const result = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        body: formData,
        method: 'POST',
    });

    const outcome = await result.json();
    if (!outcome.success) {
        response.redirect(302, "/sorry/index")
    }
    // The Turnstile token was successfuly validated. Proceed with your application logic.
    // Validate login, redirect user, etc.
    // For this demo, we just echo the "/siteverify" response:
    response.redirect(302, "/")
}
