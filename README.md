# assyntra – Android APK build

1. Create a new (private is fine) GitHub repo and push this folder to it.
2. Open the repo's **Actions** tab -> "Build Android APK" (runs automatically on push, or click "Run workflow").
3. When it finishes (~5 min), download the **assyntra-apk** artifact, unzip it, and install `app-debug.apk` on your phone (allow "Install unknown apps").

The web app lives in `www/`. Edit it there and push again to get a new APK.
