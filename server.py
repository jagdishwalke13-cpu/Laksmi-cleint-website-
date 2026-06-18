import http.server
import socketserver
import os

PORT = 8000
DIRECTORY = "out"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        # Map extensionless URLs to .html for Next.js routing
        path = self.path.split('?')[0]
        if path != '/' and not '.' in path.split('/')[-1]:
            html_path = os.path.join(DIRECTORY, path.lstrip('/') + '.html')
            if os.path.exists(html_path):
                self.path = path + '.html'
        return super().do_GET()

Handler.extensions_map.update({
    ".js": "application/javascript",
    ".css": "text/css",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".woff": "application/font-woff",
    ".woff2": "application/font-woff2",
})

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("Serving Next.js export at port", PORT)
    httpd.serve_forever()
