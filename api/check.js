export default function handler(request, response) {
  response.status(200).json({
    code: 0,
    msg: "success",
    body: request.body,
    query: request.query,
    cookies: request.cookies,
    github: "xiaozhu2007/actions-waddle",
  });
}
