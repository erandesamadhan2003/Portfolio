export const TERMINAL_BANNER =
    `███████╗ █████╗ ███╗   ███╗ █████╗ ██████╗ ██╗  ██╗ █████╗ ███╗   ██╗   ███████╗██████╗  █████╗ ███╗   ██╗██████╗ ███████╗
██╔════╝██╔══██╗████╗ ████║██╔══██╗██╔══██╗██║  ██║██╔══██╗████╗  ██║   ██╔════╝██╔══██╗██╔══██╗████╗  ██║██╔══██╗██╔════╝
███████╗███████║██╔████╔██║███████║██║  ██║███████║███████║██╔██╗ ██║   █████╗  ██████╔╝███████║██╔██╗ ██║██║  ██║█████╗
╚════██║██╔══██║██║╚██╔╝██║██╔══██║██║  ██║██╔══██║██╔══██║██║╚██╗██║   ██╔══╝  ██╔══██╗██╔══██║██║╚██╗██║██║  ██║██╔══╝
███████║██║  ██║██║ ╚═╝ ██║██║  ██║██████╔╝██║  ██║██║  ██║██║ ╚████║   ███████╗██║  ██║██║  ██║██║ ╚████║██████╔╝███████╗

Welcome to Samadhan Erande.dev

Type "help" to begin.`;

export const COMMAND_NAMES = [
    "help", "whoami", "skills", "projects", "contact",
    "stack", "pipeline", "status", "github", "linkedin", "date",
    "banner", "matrix", "coffee", "funfact", "sudo",
    "ls", "pwd", "cat", "bio", "cd", "clear", "exit",
];


export const resolveTerminalCommand = (raw = "") => {
    const cmd = raw.trim().toLowerCase();
    const rawTrimmed = raw.trim();

    if (!cmd) return { type: "noop" };
    if (cmd === "clear") return { type: "clear" };
    if (cmd === "exit") return { type: "exit", lines: ["Closing terminal..."] };

    if (cmd === "help") {
        return {
            type: "text",
            lines: [
                "Welcome to Samadhan's Developer Terminal",
                "",
                "Navigation:",
                "  cd <path>        → splashscreen | about | skills | project | blog | contact | dashboard | ~",
                "",
                "Information:",
                "  whoami           → developer profile",
                "  bio              → short bio",
                "  skills           → technology stack",
                "  projects         → portfolio projects list",
                "  contact          → contact information",
                "  github           → GitHub profile",
                "  linkedin         → LinkedIn profile",
                "  stack            → technology architecture",
                "  pipeline         → CI/CD pipeline flow",
                "  status           → system status",
                "  date             → current system date",
                "  banner           → display ASCII banner",
                "",
                "Filesystem:",
                "  ls               → list portfolio sections",
                "  pwd              → current directory",
                "  cat about.txt    → about information",
                "",
                "Terminal:",
                "  clear            → clear terminal",
                "  exit             → close terminal",
            ],
        };
    }

    if (cmd === "whoami") {
        return {
            type: "text",
            lines: [
                "┌──────────────────────────────────────┐",
                "│         SAMADHAN ERANDE              │",
                "├──────────────────────────────────────┤",
                "│  Role     : Full Stack Developer     │",
                "│           : DevOps Engineer          │", 
                "│           : Blockchain Developer     │",
                "│  College  : IIIT Vadodara            │",
                "│  Branch   : Information Technology   │",
                "│  Location : India                    │",
                "│  Phone    : +91 9405652637           │",
                "│  Status   : Available for Hire       │",
                "└──────────────────────────────────────┘",
            ],
        };
    }

    if (cmd === "bio") {
        return {
            type: "text",
            lines: [
                "Samadhan Erande",
                "Full Stack Developer • DevOps Engineer • Blockchain Developer",
            ],
        };
    }

    if (cmd === "skills") {
        return {
            type: "text",
            lines: [
                "── Technical Stack ──────────────────────",
                "",
                "  Languages   : C, C++, JavaScript, Python, Solidity",
                "  Frontend    : React.js, Angular, React Native, Tailwind CSS",
                "  Backend     : Node.js, Express.js, REST APIs, WebSockets",
                "  Databases   : MongoDB, MySQL, PostgreSQL",
                "  DevOps      : Docker, Kubernetes, GitHub Actions, Terraform, Linux, AWS",
                "  Blockchain  : Ethereum, Solidity, Ethers.js, Hardhat, OpenZeppelin",
                "  Tools       : Git, GitHub, Postman",
                "",
                "─────────────────────────────────────────",
            ],
        };
    }

    if (cmd === "projects") {
        return {
            type: "text",
            lines: [
                "── Portfolio Projects ────────────────────",
                "",
                "  1. SecureVote          — Blockchain E-Voting DApp",
                "  2. CoCode              — Real-Time Collaborative Code Editor",
                "  3. SketchNSnort        — Multiplayer Drawing Game",
                "  4. SocialBoost AI      — Agentic Content Automation",
                "  5. WalletPulse         — Personal Finance (Docker + K8s)",
                "  6. Custom Unix Shell   — C++ Shell Implementation",
                "  7. HTTP Server         — Built from raw TCP sockets",
                "  8. Job Portal          — Unified Campus Recruitment",
                "  9. Hot-Swap System     — High-Availability Module System",
                "",
                "  → Use 'cd project' to view full project page.",
                "─────────────────────────────────────────",
            ],
        };
    }

    if (cmd === "contact") {
        return {
            type: "text",
            lines: [
                "── Contact Information ───────────────────",
                "",
                "  Email    : erandesamadhan2003@gmail.com",
                "  Phone    : +91 9405652637",
                "  GitHub   : github.com/erandesamadhan2003",
                "  LinkedIn : linkedin.com/in/samadhan-erande-103712326",
                "  Location : India",
                "",
                "  → Use 'cd contact' to open contact form.",
                "─────────────────────────────────────────",
            ],
        };
    }

    if (cmd === "linkedin") {
        return {
            type: "text",
            lines: [
                "── LinkedIn ─────────────────────────────",
                "",
                "  URL      : linkedin.com/in/samadhan-erande-103712326",
                "  Phone    : +91 9405652637",
                "",
                "─────────────────────────────────────────",
            ],
        };
    }

    if (cmd === "github") {
        return {
            type: "text",
            lines: [
                "── GitHub Profile ───────────────────────",
                "",
                "  URL      : github.com/erandesamadhan2003",
                "  Repos    : 30+",
                "  Commits  : 600+",
                "",
                "─────────────────────────────────────────",
            ],
        };
    }

    if (cmd === "stack") {
        return {
            type: "text",
            lines: [
                "── Technology Architecture ──────────────",
                "",
                "  Client   → React.js + Tailwind CSS",
                "  Server   → Node.js + Express.js",
                "  Database → MongoDB / PostgreSQL / MySQL",
                "  Cache    → (Redis ready)",
                "  Auth     → JWT / Role-Based Access",
                "  Deploy   → Docker → Kubernetes (AKS)",
                "  CI/CD    → GitHub Actions",
                "  IaC      → Terraform",
                "  Cloud    → AWS / Azure",
                "",
                "─────────────────────────────────────────",
            ],
        };
    }

    if (cmd === "pipeline") {
        return {
            type: "text",
            lines: [
                "── CI/CD Pipeline ───────────────────────",
                "",
                "  Developer",
                "      ↓  git push",
                "  GitHub Repository",
                "      ↓  trigger",
                "  GitHub Actions (CI)",
                "      ↓  build + test",
                "  Docker Build & Push",
                "      ↓  image ready",
                "  Kubernetes Deployment",
                "      ↓  rolling update",
                "  Production",
                "",
                "─────────────────────────────────────────",
            ],
        };
    }

    if (cmd === "status") {
        return {
            type: "text",
            lines: [
                "── System Status ────────────────────────",
                "",
                "  portfolio.service   → ✅ Running",
                "  backend.api         → ✅ Online",
                "  database.mongo      → ✅ Connected",
                "  docker.daemon       → ✅ Active",
                "  kubernetes.cluster  → ✅ Healthy",
                `  uptime              → ${Math.floor(performance.now() / 1000)}s`,
                "",
                "─────────────────────────────────────────",
            ],
        };
    }

    if (cmd === "date") {
        return {
            type: "text",
            lines: [new Date().toString()],
        };
    }

    if (cmd === "banner") {
        return { type: "banner" };
    }

    if (cmd === "ls") {
        return {
            type: "text",
            lines: [
                "drwxr-xr-x  about/",
                "drwxr-xr-x  projects/",
                "drwxr-xr-x  skills/",
                "drwxr-xr-x  blog/",
                "drwxr-xr-x  contact/",
                "-rw-r--r--  about.txt",
                "-rw-r--r--  resume.pdf",
            ],
        };
    }

    if (cmd === "pwd") {
        return {
            type: "text",
            lines: ["/home/samadhan/portfolio"],
        };
    }

    if (cmd === "cat about.txt") {
        return {
            type: "text",
            lines: [
                "Samadhan Erande is a software developer currently pursuing",
                "Information Technology at IIIT Vadodara.",
                "",
                "He builds full-stack web applications, scalable backend systems,",
                "and automated DevOps infrastructure using Docker, Kubernetes,",
                "GitHub Actions, and Terraform.",
                "",
                "He has also explored blockchain development using Solidity and Ethereum.",
            ],
        };
    }

    if (cmd === "matrix") {
        return {
            type: "text",
            lines: [
                "Entering the Matrix...",
                "",
                "01001000 01100101 01101100 01101100 01101111",
                "Wake up, Neo...",
                "The codebase has you.",
                "Follow the white rabbit. 🐇",
                "",
                "echo 'There is no spoon.'",
            ],
        };
    }

    if (cmd === "coffee") {
        return {
            type: "text",
            lines: [
                "Brewing developer fuel...",
                "",
                "  ( (",
                "   ) )",
                " ........",
                " |      |]",
                " \\      /",
                "  `----'",
                "",
                "☕ Coffee ready. Code can now continue.",
            ],
        };
    }

    if (cmd === "funfact") {
        const fact = FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)];
        return {
            type: "text",
            lines: ["── Fun Fact ──────────────────────────────", "", `  ${fact}`, "", "──────────────────────────────────────────"],
        };
    }

    if (cmd === "sudo hire samadhan") {
        return {
            type: "text",
            lines: [
                "[sudo] password for recruiter: ************",
                "",
                "✅ Permission granted.",
                "🚀 Initiating hire sequence for Samadhan Erande...",
                "",
                "  Checking availability........... ✅ Available",
                "  Verifying skills................ ✅ Verified",
                "  Confirming culture fit.......... ✅ Confirmed",
                "  Sending offer letter............ ✅ Sent",
                "",
                "🎉 Samadhan has been successfully hired!",
                "   Contact: erandesamadhan2003@gmail.com",
            ],
        };
    }

    if (cmd.startsWith("sudo")) {
        return {
            type: "text",
            lines: [
                `[sudo] password for recruiter: `,
                "Sorry, try: sudo hire samadhan",
            ],
        };
    }

    if (cmd.startsWith("cd")) {
        const target = cmd.replace(/^cd\s*/, "").trim();

        if (!target) {
            return {
                type: "text",
                lines: [
                    "Usage: cd <path>",
                    "Examples: cd splashscreen, cd about, cd skills, cd project, cd dashboard",
                    'Type "help" to see all commands.',
                ],
            };
        }

        const map = {
            splashscreen: "/",
            splash: "/",
            about: "/about",
            skills: "/skills-achievements",
            project: "/projects",
            projects: "/projects",
            blog: "/blog",
            blogs: "/blog",
            contact: "/contact",
            dashboard: "/dashboard",
            home: "/dashboard",
            "~": "/dashboard",
        };

        const to = map[target];
        if (!to) {
            return {
                type: "text",
                lines: [
                    `cd: no such path: ${target}`,
                    'Type "help" to see valid paths.',
                ],
            };
        }

        return { type: "navigate", lines: [`Changing directory to ${target}...`], to };
    }

    if (
        [
            "splashscreen",
            "splash",
            "about",
            "skills",
            "dashboard",
            "project",
            "projects",
            "blog",
            "blogs",
            "contact",
        ].includes(cmd)
    ) {
        return {
            type: "text",
            lines: [
                `Invalid command: ${cmd}`,
                `Use "cd ${cmd}" to navigate.`,
                'Type "help" to see commands.',
            ],
        };
    }

    return {
        type: "text",
        lines: [`Command not found: ${cmd}`, `Type "help" to see available commands.`],
    };
};
