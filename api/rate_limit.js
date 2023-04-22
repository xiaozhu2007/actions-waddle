module.exports = (request, response) => {
    try {
        const body = request.body;
    } catch (e) {
        return response.status(400).json({ error: e });
    }

    fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        body: `secret=0x4AAAAAAABBzssgfcpBXVvAoaR03SGp6Gg&response=${request.body.token}`,
        method: 'POST',
    });
    // if (!result.json().success) return response.status(400).send("Failed");
    // The Turnstile token was successfuly validated. Proceed with your application logic.
    // Validate login, redirect user, etc.
    // For this demo, we just echo the "/siteverify" response:
    return response.status(200).send("Vaildate OK")
}
