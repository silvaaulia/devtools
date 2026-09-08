<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About - DevTools</title>
    <meta name="robots" content="index, follow">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/public/assets/css/style.css">
    <style>
        .about-page {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 60px 24px;
        }

        .about-container {
            text-align: center;
            max-width: 700px;
        }

        .about-title {
            font-size: 48px;
            font-weight: 800;
            margin-bottom: 12px;
        }

        .about-subtitle {
            font-size: 18px;
            color: var(--text-secondary);
            margin-bottom: 40px;
        }

        .about-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
            margin-bottom: 40px;
        }

        .about-item {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: var(--radius);
            padding: 24px;
            transition: all 0.2s;
        }

        .about-item:hover {
            border-color: var(--accent);
            transform: translateY(-2px);
        }

        .about-item-icon {
            font-size: 20px;
            margin-bottom: 10px;
        }

        .about-item-title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 6px;
        }

        .about-item-desc {
            font-size: 13px;
            color: var(--text-secondary);
        }

        .features-box {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: var(--radius);
            padding: 24px;
        }

        .features-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 16px;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 12px;
        }

        .feature-item {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            color: var(--text-secondary);
        }

        .feature-check {
            color: var(--accent);
            font-weight: 600;
        }

        .about-back {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-top: 32px;
            padding: 12px 24px;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-sm);
            color: var(--text-secondary);
            font-size: 14px;
            font-weight: 500;
            transition: all 0.2s;
        }

        .about-back:hover {
            border-color: var(--accent);
            color: var(--accent);
        }

        @media (max-width: 640px) {
            .about-title {
                font-size: 36px;
            }

            .about-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>

    <header class="header">
        <div class="header-inner">
            <a href="/" class="logo">
                <span class="logo-icon">&lt;/&gt;</span>DevTools
            </a>
        </div>
    </header>

    <main class="about-page">
        <div class="about-container">
            <h1 class="about-title">About</h1>
            <p class="about-subtitle">Powerful developer tools, all running locally in your browser.</p>

            <div class="about-grid">
                <div class="about-item">
                    <div class="about-item-icon">🎨</div>
                    <h3 class="about-item-title">Front-end Development</h3>
                    <p class="about-item-desc">Format, minify, and optimize HTML, CSS, and JavaScript code.</p>
                </div>
                <div class="about-item">
                    <div class="about-item-icon">✨</div>
                    <h3 class="about-item-title">UI/UX Design</h3>
                    <p class="about-item-desc">Create beautiful and user-friendly interfaces.</p>
                </div>
                <div class="about-item">
                    <div class="about-item-icon">🌐</div>
                    <h3 class="about-item-title">Web Design</h3>
                    <p class="about-item-desc">Build responsive and modern websites.</p>
                </div>
            </div>

            <div class="features-box">
                <h2 class="features-title">Why Choose DevTools?</h2>
                <div class="features-grid">
                    <div class="feature-item">
                        <span class="feature-check">✓</span>
                        <span>100% Free</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-check">✓</span>
                        <span>No Data Sent</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-check">✓</span>
                        <span>Works Offline</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-check">✓</span>
                        <span>No Signup</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-check">✓</span>
                        <span>Fast & Lightweight</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-check">✓</span>
                        <span>Privacy First</span>
                    </div>
                </div>
            </div>

            <a href="/" class="about-back">← Back to Home</a>
        </div>
    </main>

    <footer class="footer">
        <p class="footer-text">&copy; 2024 DevTools. All tools run locally in your browser.</p>
    </footer>

</body>
</html>
