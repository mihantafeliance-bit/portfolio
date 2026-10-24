$ErrorActionPreference = 'Stop'
$previewRoot = $PSScriptRoot
$previewPython = Join-Path $previewRoot 'source\tools\python\python.exe'

if (Test-Path -LiteralPath $previewPython) {
    Write-Host 'Portfolio : http://127.0.0.1:8765/ (Ctrl+C pour arreter)'
    & $previewPython -m http.server 8765 --bind 127.0.0.1 --directory $previewRoot
} elseif (Get-Command py -ErrorAction SilentlyContinue) {
    Write-Host 'Portfolio : http://127.0.0.1:8765/ (Ctrl+C pour arreter)'
    py -3 -m http.server 8765 --bind 127.0.0.1 --directory $previewRoot
} elseif (Get-Command python -ErrorAction SilentlyContinue) {
    Write-Host 'Portfolio : http://127.0.0.1:8765/ (Ctrl+C pour arreter)'
    python -m http.server 8765 --bind 127.0.0.1 --directory $previewRoot
} else {
    throw 'Python est introuvable. Utilisez Open with Live Server dans VS Code pour lancer le portfolio.'
}
