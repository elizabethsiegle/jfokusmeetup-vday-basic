import html from "../static/index.html";

export default {
  async fetch(request, env, ctx) {
    const contentType = request.headers.get('Content-Type');

    // Only parse form data if the Content-Type is correct
    if (contentType?.includes('multipart/form-data') || contentType?.includes('application/x-www-form-urlencoded')) {
      try {
        const formData = await request.formData();
        const name = formData.get('name');
        const favMovie = formData.get('fav-movie');

        if (request.url.includes("/api")) {
			console.log(name, favMovie);
			const messages = [
				{ role: "system", content: "You are a friendly assistant who generates valentines messages" },
				{
				role: "user",
				content: `Return a personal valentine's day poem for the user and nothing else. Do not return a preamble, just a poem. Their friend is named ${name} and their favorite movie is ${favMovie}`,
				},
			];
			const response = await env.AI.run("@cf/meta/llama-3.3-70b-instruct-fp8-fast", { messages });
			console.log(response['response']);
			return new Response(JSON.stringify(response["response"]));
        }
      } catch (error) {
        // Handle errors (e.g., malformed form data)
        return new Response('Error parsing form data', { status: 400 });
      }
    }

    // Serve the HTML file for all other requests
    return new Response(html, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
};