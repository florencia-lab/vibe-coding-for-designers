export type ContentItem =
  | { type: "body"; text: string }
  | { type: "bullet"; text: string }
  | { type: "h3"; text: string }
  | { type: "callout"; text: string }
  | { type: "spacer" }
  | { type: "table"; headers: string[]; rows: string[][] }

export interface Section {
  id: string
  number: number
  eyebrow: string
  title: string
  subtitle: string
  content: ContentItem[]
}

export const sections: Section[] = [
  {
    id: "the-full-journey",
    number: 1,
    eyebrow: "THE BIG PICTURE",
    title: "The Full Journey",
    subtitle: "Every step from idea to live URL — nothing skipped",
    content: [
      {
        type: "body",
        text: "Before anything else, here is the complete map. Every step is explained in this guide. Knowing where you are in this journey at any moment is half the battle.",
      },
      {
        type: "table",
        headers: ["Step", "What Happens", "Your Tool"],
        rows: [
          ["1. Design", "Create screens and flows in Figma", "Figma"],
          ["2. Choose an AI tool", "Pick how you'll generate code", "v0, Cursor, Claude Code"],
          ["3. Start the project", "Create or clone a codebase", "Terminal + GitHub"],
          ["4. Run it locally", "Preview on your own machine", "Terminal + browser"],
          ["5. Build with AI", "Prompt, review, commit, repeat", "AI tool + git"],
          ["6. Deploy", "Push to GitHub → goes live automatically", "Vercel"],
          ["7. Configure production", "Add secrets to the hosting platform", "Vercel dashboard"],
          ["8. Ship", "Share your live URL", "Done"],
        ],
      },
      {
        type: "callout",
        text: "You will not understand every tool on day one — and you don't need to. Come back to this map whenever you feel lost. It will tell you exactly which section to re-read.",
      },
    ],
  },
  {
    id: "why-you-cant-open-the-file",
    number: 2,
    eyebrow: "THE MENTAL MODEL",
    title: "Why You Can't Just Open the File",
    subtitle: "What frameworks are and why they change everything",
    content: [
      {
        type: "h3",
        text: "Modern websites are not HTML files",
      },
      {
        type: "body",
        text: "You might expect that 'web code' means HTML and CSS files you double-click to open. That was true 15 years ago. Modern apps use frameworks — structured systems that add routing, components, and dynamic data. The tradeoff: you cannot open the files directly in a browser. You must run a server, even just to preview it locally.",
      },
      {
        type: "callout",
        text: "Think of a framework like Figma. You can't open a .fig file in Preview — you need the Figma app running. Next.js is the 'Figma app' for your code. The terminal command npm run dev is you opening the app.",
      },
      {
        type: "h3",
        text: "The two most common frameworks you'll encounter",
      },
      {
        type: "table",
        headers: ["Framework", "What it's for", "How you'll know"],
        rows: [
          ["Next.js", "Full web apps — pages, API routes, auth", "You'll see an app/ or pages/ folder"],
          ["Vite / React", "Simpler single-page apps and prototypes", "You'll see a src/ folder and index.html"],
        ],
      },
      {
        type: "h3",
        text: "What 'the stack' means",
      },
      {
        type: "body",
        text: "Developers talk about 'the stack' — the combination of framework, styling system, and database. The most common vibe-coding stack right now is Next.js + Tailwind CSS + a database via Prisma. When you start a new project, picking a stack is step one. Ask the AI: 'What stack should I use for a [type of app]?' and use whatever it recommends consistently.",
      },
    ],
  },
  {
    id: "choosing-your-ai-tool",
    number: 3,
    eyebrow: "YOUR TOOLKIT — PART 1",
    title: "Choosing Your AI Tool",
    subtitle: "Browser-based generators vs. editor-integrated tools",
    content: [
      {
        type: "h3",
        text: "Not all AI coding tools work the same way",
      },
      {
        type: "body",
        text: "There are two fundamentally different types of AI coding tool. Using the wrong one for the wrong job is a major source of confusion. Pick one approach per project and stay in it.",
      },
      {
        type: "table",
        headers: ["Type", "Examples", "How it works", "Best for"],
        rows: [
          [
            "Browser-based generator",
            "v0.dev, Bolt, Lovable, Replit",
            "Build the whole project in a sandbox; export to GitHub when ready",
            "Starting from zero — fastest path to a first working version",
          ],
          [
            "Editor-integrated",
            "Cursor, Claude Code, GitHub Copilot",
            "AI edits files directly inside your project on your machine",
            "Iterating on an existing codebase",
          ],
        ],
      },
      {
        type: "h3",
        text: "The recommended path for designers starting out",
      },
      {
        type: "bullet",
        text: "Start with a browser-based generator (v0.dev is closest to Figma thinking)",
      },
      {
        type: "bullet",
        text: "Once you have something working, export it to a GitHub repository",
      },
      {
        type: "bullet",
        text: "From that point, use Cursor or Claude Code for all further changes",
      },
      {
        type: "callout",
        text: "Mixing tools mid-project creates chaos. If you started in v0, finish the initial build in v0. Once it's in GitHub, switch to an editor-integrated tool and never go back to the generator.",
      },
    ],
  },
  {
    id: "what-you-need-installed",
    number: 4,
    eyebrow: "YOUR TOOLKIT — PART 2",
    title: "What You Need Installed",
    subtitle: "One-time setup — do this before anything else",
    content: [
      {
        type: "h3",
        text: "The three things every developer machine needs",
      },
      {
        type: "table",
        headers: ["Tool", "What it is", "How to get it"],
        rows: [
          [
            "Node.js (LTS)",
            "Runtime that powers npm and all modern web tools",
            "nodejs.org → download LTS → install like any Mac app",
          ],
          [
            "Git",
            "Version control — tracks all changes to your code",
            "git-scm.com, or: xcode-select --install in terminal (Mac)",
          ],
          [
            "A code editor",
            "Where you read and edit code files",
            "cursor.com (recommended) or code.visualstudio.com",
          ],
        ],
      },
      {
        type: "callout",
        text: "Without Node.js, nothing works. The error when it's missing — 'command not found: npm' — gives no hint about the cause. If you see that error, installing Node.js is always the first fix to try.",
      },
      {
        type: "h3",
        text: "Accounts you'll need",
      },
      { type: "bullet", text: "GitHub — free at github.com — stores your code in the cloud" },
      { type: "bullet", text: "Vercel — free at vercel.com — hosts your live site, connected to GitHub" },
      { type: "bullet", text: "Your AI tool account — v0.dev, cursor.com, or claude.ai" },
      {
        type: "h3",
        text: "Verify Node.js is installed",
      },
      {
        type: "body",
        text: "Open your terminal and type: node --version. If you see a number like v22.0.0, you're ready. If you see an error, go back to nodejs.org and reinstall.",
      },
    ],
  },
  {
    id: "the-terminal",
    number: 5,
    eyebrow: "YOUR TOOLKIT — PART 3",
    title: "The Terminal in 10 Minutes",
    subtitle: "The only command-line skills you actually need",
    content: [
      {
        type: "h3",
        text: "What the terminal is",
      },
      {
        type: "body",
        text: "The terminal is a text window where you give your computer instructions by typing. On a Mac, press Cmd + Space and type 'Terminal' to open it. Every command runs in a specific folder — called your working directory. Always know which folder you're in.",
      },
      {
        type: "table",
        headers: ["Command", "What it does"],
        rows: [
          ["pwd", "Print working directory — shows which folder you're currently in"],
          ["ls", "List — shows all files and folders in the current directory"],
          ["cd folder-name", "Change directory — moves you into that folder"],
          ["cd ..", "Go up one folder level (two dots = parent folder)"],
          ["npm install", "Install all dependencies listed in package.json"],
          ["npm run dev", "Start the local preview server (your app at localhost:3000)"],
          ["Ctrl + C", "Stop whatever is currently running in the terminal"],
          ["clear", "Clear the terminal screen (doesn't undo anything)"],
        ],
      },
      {
        type: "callout",
        text: "The terminal remembers where you are. If you close it and reopen it, you start at your home folder again. Use cd to navigate back to your project before running any commands.",
      },
    ],
  },
  {
    id: "starting-and-running-locally",
    number: 6,
    eyebrow: "LOCAL DEVELOPMENT — PART 1",
    title: "Starting & Running Locally",
    subtitle: "From nothing to 'it's running in my browser'",
    content: [
      {
        type: "h3",
        text: "Three ways a project starts",
      },
      {
        type: "table",
        headers: ["Scenario", "What to do"],
        rows: [
          ["Starting from scratch", "Use a browser-based generator (v0.dev) and export to GitHub when ready"],
          ["Cloning an existing repo", "Copy the GitHub URL → terminal: git clone <url> → cd into the folder"],
          ["Using create-next-app", "Terminal: npx create-next-app@latest my-app → follow the prompts"],
        ],
      },
      {
        type: "h3",
        text: "The mandatory step everyone forgets after cloning",
      },
      {
        type: "body",
        text: "After cloning, the project folder exists on your machine but the dependencies do not — they're listed in package.json but not downloaded yet.",
      },
      { type: "bullet", text: "cd my-project-name   (navigate into the project folder)" },
      { type: "bullet", text: "npm install   (downloads everything — takes 1-2 minutes)" },
      { type: "bullet", text: "npm run dev   (starts the preview server)" },
      {
        type: "callout",
        text: "npm install is the most commonly missed step. If a cloned project gives you errors about missing modules, run npm install first. It fixes 80% of first-run problems.",
      },
      {
        type: "h3",
        text: "What localhost:3000 means",
      },
      {
        type: "body",
        text: "Once npm run dev is running, open your browser and go to http://localhost:3000. 'Localhost' means 'my own computer' — nothing is on the internet yet, only you can see it. The number 3000 is the port. If something else is using 3000, the terminal will tell you it's running on 3001 instead.",
      },
    ],
  },
  {
    id: "file-structure",
    number: 7,
    eyebrow: "LOCAL DEVELOPMENT — PART 2",
    title: "File Structure & package.json",
    subtitle: "What every file and folder actually is",
    content: [
      {
        type: "h3",
        text: "The anatomy of a Next.js project",
      },
      {
        type: "table",
        headers: ["Path", "What it is", "Do you touch it?"],
        rows: [
          ["app/ or src/", "Your pages, components, API routes", "Yes — this is where you work"],
          ["public/", "Static files: images, fonts, icons", "Yes — put your Figma exports here"],
          [".env.local", "Your local secrets (never committed)", "Yes — add API keys here"],
          ["package.json", "Project manifest: name, scripts, dependencies", "Rarely — AI handles it"],
          ["node_modules/", "Downloaded packages (auto-generated)", "Never — do not touch or commit"],
          ["next.config.js", "Framework settings", "Occasionally, when AI instructs you"],
          ["tailwind.config.js", "Design tokens (colors, fonts, spacing)", "Yes — this is your design system in code"],
        ],
      },
      {
        type: "h3",
        text: "The package.json scripts block",
      },
      {
        type: "body",
        text: "Open package.json and look for the 'scripts' section. It defines the commands available via npm run.",
      },
      { type: "bullet", text: "dev — starts the local preview server" },
      { type: "bullet", text: "build — compiles the production version (Vercel runs this when you deploy)" },
      { type: "bullet", text: "lint — checks for code quality issues" },
      {
        type: "callout",
        text: "If npm run dev gives an error, check the scripts block in package.json first. The command might be named differently on that project (start, serve, etc.).",
      },
    ],
  },
  {
    id: "git-local-vs-remote",
    number: 8,
    eyebrow: "GIT — PART 1",
    title: "Git: Local vs. Remote",
    subtitle: "Understanding where your code actually lives",
    content: [
      {
        type: "h3",
        text: "Two worlds, always in sync",
      },
      {
        type: "body",
        text: "Your code lives in two places at once: your laptop (local) and a server like GitHub (remote). Git is the system that keeps them in sync. Most confusion about git comes from forgetting which world you're currently in.",
      },
      {
        type: "table",
        headers: ["World", "What It Is", "Who Sees It"],
        rows: [
          ["Local", "Your laptop — files you can edit right now", "Only you, until you push"],
          ["Remote", "GitHub — the shared, backed-up version", "Everyone with access"],
        ],
      },
      {
        type: "h3",
        text: "Cloning — getting a repo onto your machine",
      },
      {
        type: "body",
        text: "If a project already exists on GitHub, you clone it. Cloning downloads the full project history to your laptop and links it back to GitHub automatically — you only do this once per machine per project.",
      },
      { type: "bullet", text: "git clone <url>   (the URL comes from the green 'Code' button on GitHub)" },
      { type: "bullet", text: "After cloning: cd into the folder, then run npm install" },
      {
        type: "callout",
        text: "Clone = download + link. Git now knows where 'remote' is, and push/pull work automatically.",
      },
      {
        type: "h3",
        text: "What 'origin' means",
      },
      {
        type: "body",
        text: "When you clone, git names the remote 'origin' by default. git push origin main means: send my commits to the remote called origin, onto the branch called main. You'll see this string a lot — now you know what each part means.",
      },
    ],
  },
  {
    id: "commit-push-pull",
    number: 9,
    eyebrow: "GIT — PART 2",
    title: "Commit, Push, and Pull",
    subtitle: "The three moves that keep your code in sync",
    content: [
      {
        type: "h3",
        text: "Commit — save locally",
      },
      {
        type: "body",
        text: "A commit is a snapshot saved only on your machine. Nobody else sees it yet. Commit often — small, focused commits are easier to undo than big ones.",
      },
      { type: "bullet", text: "git add .   (stage all changed files)" },
      { type: "bullet", text: "git commit -m \"Add invite modal\"   (save snapshot with a label)" },
      {
        type: "h3",
        text: "Push — send to GitHub",
      },
      {
        type: "body",
        text: "Push uploads your local commits to the remote. This is when your work becomes visible to teammates and triggers a deploy if you have Vercel connected. You can have 10 commits locally and push them all at once.",
      },
      { type: "bullet", text: "git push   (or git push origin <branch-name> on a new branch)" },
      {
        type: "h3",
        text: "Pull — get the latest from GitHub",
      },
      {
        type: "body",
        text: "Pull downloads any commits that exist on the remote but not yet on your machine. Always pull at the start of a work session if others might have made changes.",
      },
      { type: "bullet", text: "git pull" },
      {
        type: "callout",
        text: "Commit = save to your machine. Push = share with the world. They are two separate steps on purpose — so you can save freely without accidentally publishing half-finished work.",
      },
    ],
  },
  {
    id: "branches-and-pull-requests",
    number: 10,
    eyebrow: "GIT — PART 3",
    title: "Branches & Pull Requests",
    subtitle: "How to work without breaking what's already live",
    content: [
      {
        type: "h3",
        text: "What a branch is",
      },
      {
        type: "body",
        text: "A branch is a parallel copy of the code where you can build safely without touching the live version. The main branch (called main) is what's running in production. Everything else is a work-in-progress.",
      },
      { type: "bullet", text: "git checkout -b my-feature   (creates a new branch and switches to it)" },
      { type: "bullet", text: "git checkout main   (switches back to main)" },
      { type: "bullet", text: "git branch   (lists all branches; current one has a * next to it)" },
      {
        type: "callout",
        text: "Rule: never commit directly to main. Always work on a feature branch. Main should only ever contain code that is tested and ready to be live.",
      },
      {
        type: "h3",
        text: "What a Pull Request (PR) is",
      },
      {
        type: "body",
        text: "A Pull Request is a formal proposal on GitHub to merge your branch into main. It's not a terminal command — you open it on the GitHub website. This is where code review happens before changes go live.",
      },
      {
        type: "h3",
        text: "The full loop — from pull to PR",
      },
      {
        type: "table",
        headers: ["Step", "Command / Action"],
        rows: [
          ["Get the latest", "git pull"],
          ["Create a branch", "git checkout -b feature/invite-user"],
          ["Build and save", "git add .  +  git commit -m \"Add invite flow\""],
          ["Push branch", "git push origin feature/invite-user"],
          ["Open PR", "GitHub → Compare & pull request → write description"],
          ["Merge & clean up", "Approve on GitHub → Merge → Delete branch"],
        ],
      },
    ],
  },
  {
    id: "figma-to-code",
    number: 11,
    eyebrow: "DESIGNER-SPECIFIC",
    title: "From Figma to Code",
    subtitle: "What AI can and cannot do with your designs",
    content: [
      {
        type: "h3",
        text: "AI cannot read your Figma file",
      },
      {
        type: "body",
        text: "A screenshot will get you 60% of the way there. The other 40% requires you to provide the specs explicitly — the same information you'd hand off to a developer. The closer your prompt reads to a Figma dev handoff, the better the output.",
      },
      {
        type: "h3",
        text: "What to always include in a design prompt",
      },
      {
        type: "table",
        headers: ["What", "How to get it from Figma"],
        rows: [
          ["Hex colors", "Inspect panel → copy the hex value"],
          ["Font name + weight", "Inspect panel → typography section"],
          ["Spacing values", "Select element → inspect panel → margin/padding in px"],
          ["Component names", "Use your exact Figma layer names — AI will match them"],
          ["Icon format", "Export as SVG from Figma → drag into public/ folder"],
        ],
      },
      {
        type: "h3",
        text: "The four states you must always specify",
      },
      {
        type: "body",
        text: "Designers often design the happy path. Code must handle every state. For every UI element that shows data, tell the AI what to show when:",
      },
      { type: "bullet", text: "Loading — data is being fetched (spinner, skeleton, placeholder)" },
      { type: "bullet", text: "Empty — no data exists yet (empty state illustration or message)" },
      { type: "bullet", text: "Error — something went wrong (error message, retry button)" },
      { type: "bullet", text: "Success — the action completed (confirmation, updated UI)" },
      {
        type: "callout",
        text: "If you don't specify these, the AI will either skip them entirely or invent something that doesn't match your design. Designing all four states in Figma before prompting saves hours.",
      },
    ],
  },
  {
    id: "deploying-with-vercel",
    number: 12,
    eyebrow: "SHIPPING",
    title: "Deploying with Vercel",
    subtitle: "From GitHub to a live URL in under 5 minutes",
    content: [
      {
        type: "h3",
        text: "What deployment actually means",
      },
      {
        type: "body",
        text: "Deployment copies your code from GitHub to a server that runs it 24/7 for anyone on the internet. You never configure a server manually. Vercel handles all of that for you.",
      },
      {
        type: "h3",
        text: "One-time setup",
      },
      { type: "bullet", text: "Go to vercel.com → sign up with your GitHub account" },
      { type: "bullet", text: "Click 'Add New Project' → import your GitHub repository" },
      { type: "bullet", text: "Vercel detects Next.js automatically — click Deploy" },
      { type: "bullet", text: "You get a live URL in ~2 minutes" },
      {
        type: "callout",
        text: "After the one-time setup, every push to main automatically deploys. Vercel also creates a preview URL for every open branch/PR so you can share a live preview before merging.",
      },
      {
        type: "h3",
        text: "Environment variables in production",
      },
      {
        type: "body",
        text: "Your .env.local file never leaves your machine — that's the point. But your live server also needs those values. You must add them manually in the Vercel dashboard.",
      },
      { type: "bullet", text: "Vercel dashboard → your project → Settings → Environment Variables" },
      { type: "bullet", text: "Add each key-value pair exactly as it appears in your .env.local" },
      { type: "bullet", text: "Redeploy after adding — existing deploys don't pick up new vars automatically" },
      {
        type: "callout",
        text: "This is the most common cause of 'works locally, broken in production.' If your live app is missing data or throwing auth errors, check your Vercel environment variables first.",
      },
    ],
  },
  {
    id: "security-landmines",
    number: 13,
    eyebrow: "SECURITY",
    title: "Security Landmines",
    subtitle: "What can go seriously wrong — and how to avoid it",
    content: [
      {
        type: "h3",
        text: "The #1 mistake: secrets in code",
      },
      {
        type: "body",
        text: "API keys, passwords, and tokens must NEVER appear in your code files. If they end up on GitHub — even in a private repo — they can be exposed. Once a secret is in git history, it's compromised even if you delete the line later.",
      },
      {
        type: "callout",
        text: "Use environment variables instead. Local: .env.local file. Production: Vercel dashboard. Ask the AI to use process.env.MY_KEY rather than pasting the key directly into the code.",
      },
      {
        type: "h3",
        text: "Other common AI-generated security mistakes",
      },
      { type: "bullet", text: "Exposing your database directly to the browser — always use an API route in between" },
      {
        type: "bullet",
        text: "Trusting user input without validation — always ask 'what if someone enters malicious text?'",
      },
      {
        type: "bullet",
        text: "Disabling authentication 'just for testing' and forgetting to re-enable it",
      },
      {
        type: "bullet",
        text: "Committing .env.local — add it to .gitignore before your very first commit",
      },
      {
        type: "bullet",
        text: "Using npm install blindly — verify the exact package name (typosquatting is real)",
      },
      {
        type: "h3",
        text: "The .gitignore file",
      },
      {
        type: "body",
        text: ".gitignore lists paths git should never track. Every project should have these lines from day one: .env.local and node_modules/. When you use create-next-app or a generator, these are added automatically.",
      },
    ],
  },
  {
    id: "prompting-for-better-code",
    number: 14,
    eyebrow: "BUILDING WITH AI",
    title: "Prompting for Better Code",
    subtitle: "The quality of code you get equals the quality of your brief",
    content: [
      {
        type: "h3",
        text: "Vague prompts produce vague code",
      },
      {
        type: "body",
        text: "Think like a design brief, not a search query. The more precisely you describe the behaviour, the less the AI has to guess — and guesses are where bugs are born.",
      },
      {
        type: "table",
        headers: ["Ingredient", "Example"],
        rows: [
          ["Stack context", "'I'm in a Next.js + Tailwind project'"],
          ["User goal", "'A user needs to invite a teammate by email'"],
          ["Exact behaviour", "'Modal with email field, validate format, POST to /api/invite'"],
          ["Edge cases", "'Error if already a member. Disable button while loading.'"],
          ["Design spec", "'Use color #4F46E5, Inter font, 16px body, 8px border radius'"],
          ["What NOT to do", "'Don't add a cancel button — the modal already has an X'"],
        ],
      },
      {
        type: "h3",
        text: "Rules for staying sane",
      },
      { type: "bullet", text: "One feature per prompt — never 'build me a whole dashboard'" },
      { type: "bullet", text: "Review and commit before the next prompt" },
      { type: "bullet", text: "If the AI goes off-track, start a fresh conversation — context drift is real" },
      {
        type: "callout",
        text: "Ask the AI to explain its code: 'Walk me through what this function does.' If the explanation doesn't match what you expected, the code is probably wrong.",
      },
    ],
  },
  {
    id: "reading-code",
    number: 15,
    eyebrow: "CODE LITERACY",
    title: "Reading Code You Didn't Write",
    subtitle: "The minimum vocabulary to hold your own",
    content: [
      {
        type: "h3",
        text: "You don't need to code — but you need to read",
      },
      {
        type: "body",
        text: "Think of code like a blueprint. You don't need to build the house, but you should be able to read the floor plan. Here's the vocabulary that covers 90% of what you'll encounter:",
      },
      {
        type: "table",
        headers: ["Term", "What It Means", "Why It Matters"],
        rows: [
          ["Component", "A reusable UI block (Button, Card, Modal)", "Changing one changes all instances"],
          ["Function", "A named block of logic", "What the app actually 'does'"],
          ["API call / fetch", "Request to get or send data to a server", "Where things fail or slow down"],
          ["Props", "Data passed into a component from outside", "How components are configured"],
          ["State", "Data that can change and triggers a re-render", "Loading, error, and UI changes live here"],
          ["Database query", "Read/write to stored data", "Can expose or corrupt user data"],
        ],
      },
      {
        type: "h3",
        text: "Red flags to look for in AI-generated code",
      },
      { type: "bullet", text: "Hardcoded API keys or passwords inside a code file" },
      { type: "bullet", text: "console.log statements left in production code" },
      { type: "bullet", text: "Comments that say // TODO: fix this or // hack" },
      { type: "bullet", text: "Files larger than ~300 lines — usually doing too much" },
    ],
  },
  {
    id: "when-things-go-wrong",
    number: 16,
    eyebrow: "DEBUGGING",
    title: "When Things Go Wrong",
    subtitle: "Triage first — then fix. The three types of broken.",
    content: [
      {
        type: "h3",
        text: "The three types of broken — and where to look",
      },
      {
        type: "table",
        headers: ["Type", "What it looks like", "Where to find the error"],
        rows: [
          [
            "Build error",
            "Terminal shows red text; dev server won't start",
            "Terminal output — copy it and paste to AI",
          ],
          [
            "Runtime error",
            "App loads but then crashes or shows an error screen",
            "Browser console (F12) — copy the red text",
          ],
          [
            "Visual bug",
            "App runs fine but something looks wrong",
            "Describe it + screenshot → AI or DevTools inspector",
          ],
        ],
      },
      {
        type: "callout",
        text: "Knowing which type of broken you're dealing with cuts debugging time in half. Before asking the AI for help, identify: is the terminal broken, the browser broken, or just the visuals?",
      },
      {
        type: "h3",
        text: "The browser DevTools you actually need (F12 / Cmd+Option+I)",
      },
      {
        type: "table",
        headers: ["Tab", "What it does", "When to use it"],
        rows: [
          ["Console", "Shows JavaScript errors and logs", "Any time the app crashes unexpectedly"],
          [
            "Elements",
            "Shows live HTML + CSS for any element",
            "When styles don't match your design — click any element to inspect",
          ],
          ["Network", "Shows every request the page makes", "When data isn't loading — red rows = failed requests"],
          ["Device toolbar", "Simulates phone screen sizes", "Mobile testing without a real phone"],
        ],
      },
      {
        type: "h3",
        text: "When to start over vs. keep fixing",
      },
      { type: "bullet", text: "3+ failed AI attempts on the same problem → start a fresh conversation" },
      {
        type: "bullet",
        text: "Can't understand what changed → git checkout . to discard, try a more targeted prompt",
      },
    ],
  },
  {
    id: "cheat-sheet",
    number: 17,
    eyebrow: "QUICK REFERENCE",
    title: "Cheat Sheet",
    subtitle: "The complete reference — save this page",
    content: [
      {
        type: "h3",
        text: "One-time machine setup",
      },
      { type: "bullet", text: "Install Node.js from nodejs.org (LTS version)" },
      { type: "bullet", text: "Install Cursor from cursor.com" },
      { type: "bullet", text: "Create accounts: GitHub + Vercel + your AI tool" },
      {
        type: "h3",
        text: "Starting every project",
      },
      {
        type: "table",
        headers: ["Scenario", "Commands"],
        rows: [
          ["Clone existing repo", "git clone <url> → cd folder → npm install → npm run dev"],
          ["New project", "npx create-next-app@latest name → cd name → npm run dev"],
          ["From v0 / generator", "Export to GitHub → clone → npm install → npm run dev"],
        ],
      },
      {
        type: "h3",
        text: "The daily git loop",
      },
      {
        type: "table",
        headers: ["When", "Command"],
        rows: [
          ["Start of session", "git pull"],
          ["New feature", "git checkout -b feature/name"],
          ["After any working change", "git add .  +  git commit -m \"what this enables\""],
          ["Ready to share", "git push origin feature/name → open PR on GitHub"],
          ["AI broke everything", "git checkout .   (discard uncommitted changes)"],
        ],
      },
      {
        type: "h3",
        text: "Before every deploy",
      },
      { type: "bullet", text: "All secrets in .env.local — not hardcoded in files" },
      { type: "bullet", text: ".env.local listed in .gitignore" },
      { type: "bullet", text: "All env vars added to Vercel dashboard" },
      { type: "bullet", text: "Test all states: loading, empty, error, success" },
      {
        type: "callout",
        text: "The designer's superpower in vibe coding: you know exactly what good looks like. Don't accept code that ships bad UX just because it compiles.",
      },
    ],
  },
]

export const SYSTEM_PROMPT = `You are a friendly, patient programming teacher helping a UI/UX designer learn to vibe code (AI-assisted coding). The designer is an expert in Figma and UX but has zero development experience.

You have deep knowledge of this guide, which covers:
${sections.map((s) => `- Section ${s.number}: ${s.title} — ${s.subtitle}`).join("\n")}

Key content highlights:
- The full journey: Design → AI tool → local setup → build with AI → deploy to Vercel
- Frameworks: Next.js can't be opened directly in a browser; you need npm run dev
- AI tools: browser-based generators (v0, Bolt) vs editor-integrated (Cursor, Claude Code)
- Setup: Node.js, git, Cursor — one-time installs
- Terminal: pwd, ls, cd, npm install, npm run dev, Ctrl+C, clear
- Local dev: clone → npm install → localhost:3000
- File structure: app/ is where you work, node_modules/ is never touched
- Git: local (your machine) vs remote (GitHub); commit = save locally, push = send to GitHub, pull = get latest
- Branches: never commit to main; feature branches + PRs
- Figma to code: AI can't read Figma files; provide hex values, font specs, spacing, and all four states (loading/empty/error/success)
- Deployment: Vercel connects to GitHub; every push to main auto-deploys; env vars must be added to Vercel dashboard separately
- Security: never hardcode secrets; use .env.local locally and Vercel dashboard in production
- Prompting: think like a design brief — context, user goal, exact behaviour, edge cases, design spec
- Debugging: three types (build error = terminal, runtime error = browser console, visual bug = DevTools inspector)

Guidelines:
- Be encouraging and non-judgmental — no question is too basic
- Use analogies to Figma and design concepts when explaining technical ideas
- Keep answers concise and practical — designers learn by doing
- If someone is stuck, give them the exact command or step, not just the concept
- When relevant, mention which section of the guide covers the topic in more depth
- Never make the person feel bad for not knowing something
- If asked about something outside this guide's scope, be honest and suggest where to look`
