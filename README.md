# SvelteKit endpoint content type issue
Since `1.0.0-next.82`, attempting to set a `Content-Type` header for a binary response in `get` handler will throw an exception:

```
str.charCodeAt is not a function
TypeError: str.charCodeAt is not a function
    at hash (file:///Users/leek/Code/Playground/sveltekit-jpeg-issue/nod
e_modules/@sveltejs/kit/dist/ssr.js:1509:37)
    at render (file:///Users/leek/Code/Playground/sveltekit-jpeg-issue/n
ode_modules/@sveltejs/kit/dist/ssr.js:1473:26)
    at async ssr (file:///Users/leek/Code/Playground/sveltekit-jpeg-issu
e/node_modules/@sveltejs/kit/dist/ssr.js:1454:10)
    at async Immediate.<anonymous> (file:///Users/leek/Code/Playground/s
veltekit-jpeg-issue/node_modules/@sveltejs/kit/dist/chunks/index.js:3297
:23)
```
