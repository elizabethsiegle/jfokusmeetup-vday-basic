import html from "../static/index.html";

export default {
	async fetch(request, env, ctx) {
		if (request.url.includes("/api")) {
			const messages = [
				{ role: "system", content: "You are a friendly assistant who generates valentines messages" },
				{
				  role: "user",
				  content: "Return a simple valentine's day poem for the user",
				},
			  ];
			  const response = await env.AI.run("@cf/meta/llama-3.3-70b-instruct-fp8-fast", { messages });
			  console.log(response['response']);
			  return Response.json(response['response']);
		}
		return new Response(html, {
			headers: {
				"Content-Type": "text/html",
			},
		});
	},
};
