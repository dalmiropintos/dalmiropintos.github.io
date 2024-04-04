# Blog entrada 1

* esto es markdown
* una lista

**Hola Mundo**, _esto es markdown_



| pais | capital |
| --- | --- |
| argentina | buenos aires |
| uruguay | montevideo |
| brasil | brasilia |

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Using marked.js</title>
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
</head>
<body>
    <div id="markdown-content"></div>

    <script>
        // Your JavaScript code using marked.js goes here
        const markdownContent = document.getElementById('markdown-content');
        markdownContent.innerHTML = marked('# Hello, Marked.js!');
    </script>
</body>
</html>
```