@echo off
echo Starting Localhost Server on port 8080...
echo Please wait, your browser will open shortly.
start http://localhost:8080/index.html
powershell -Command "$listener = New-Object System.Net.HttpListener; $listener.Prefixes.Add('http://localhost:8080/'); $listener.Start(); Write-Host 'Server is running! Press Ctrl+C to stop.'; while ($listener.IsListening) { $context = $listener.GetContext(); $response = $context.Response; $requestUrl = $context.Request.Url.LocalPath; if ($requestUrl -eq '/') { $requestUrl = '/index.html' }; $filePath = Join-Path (Get-Location).Path $requestUrl; if (Test-Path $filePath -PathType Leaf) { $content = [System.IO.File]::ReadAllBytes($filePath); if ($filePath.EndsWith('.css')) { $response.ContentType = 'text/css' } elseif ($filePath.EndsWith('.js') -or $filePath.EndsWith('.jsx')) { $response.ContentType = 'application/javascript' } elseif ($filePath.EndsWith('.html')) { $response.ContentType = 'text/html' }; $response.ContentLength64 = $content.Length; $response.OutputStream.Write($content, 0, $content.Length) } else { $response.StatusCode = 404 }; $response.Close() }"
pause
