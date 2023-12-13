# URL Globbing with cURL
Content: My Express.js code arrangement for URL globbing with curl

cURL has a feature that enables us use wildcard characters in URLs to
match multiple resources at once. In my folder I have 3 files 
`about.html`, `index.html` and `support.html`. SO we use this feature
to grab all 3 files and get their content with the `curl` command. 
Assuming our base url is on `localhost:4500`. Run the following command

```bash
http://localhost:4500/folder/{index,about,support}.html
```
