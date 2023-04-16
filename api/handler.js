export default function handler(request, response) {
  response.status(200).json({
    code: 0,
    msg: "No tracking",
    github: "xiaozhu2007/actions-waddle",
  });
}
