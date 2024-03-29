module.exports = (request, response) => {
    /*
        fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            body: `secret=0x4AAAAAAABBzssgfcpBXVvAoaR03SGp6Gg&response=${request.body.token}`,
            method: 'POST',
        });
        // if (!result.json().success) return response.status(400).send("Failed");
        // The Turnstile token was successfuly validated. Proceed with your application logic.
        // Validate login, redirect user, etc.
        // For this demo, we just echo the "/siteverify" response:
        */
    return response.status(200).json({
        code: 0,
        response: request.body.token,
        secret: "0x4AAAAAAABBzssgfcpBXVvAoaR03SGp6Gg"
    })
}
