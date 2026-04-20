# domarketing.ee backup 2026-04-20 19:30

This folder contains the server backup archive split into GitHub-safe parts.

Original archive:

```text
domarketing-2026-04-20-1930.tar.gz
```

Restore the archive on Windows PowerShell:

```powershell
Get-Content .\domarketing-2026-04-20-1930.tar.gz.part* -Encoding Byte -ReadCount 0 | Set-Content .\domarketing-2026-04-20-1930.tar.gz -Encoding Byte
Get-FileHash .\domarketing-2026-04-20-1930.tar.gz -Algorithm SHA256
```

Compare the result with `SHA256.txt`.
