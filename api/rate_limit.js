export default function handler(request, response) {
    const SECRET_KEY = '0x4AAAAAAABBzssgfcpBXVvAoaR03SGp6Gg';
    try {
        const body = request.body;
      } catch (error) {
        return response.status(400).json({ error: 'request.body' });
      }
    // Turnstile injects a token in "cf-turnstile-response".
    const token = body.cf-turnstile-response || null;
    // Validate the token by calling the "/siteverify" API.
    let formData = `secret=${SECRET_KEY}&response=${token}`

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
