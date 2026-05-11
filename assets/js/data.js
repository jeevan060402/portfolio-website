const portfolioData = {
    personal: {
        name: "Maddur Jeevan Kumar Reddy",
        title: "Backend Engineer",
        email: "reddyjeevan936@gmail.com",
        phone: "+91-9390643938",
        location: "Hyderabad, India",
        linkedin: "https://www.linkedin.com/in/jeevan-kumar-reddy-maddur-7b7516191/",
        github: "https://github.com/jeevan060402",
        resumeFile: "Jeevan_Resume_14122025.pdf"
    },

    metrics: [
        { value: "25%", label: "API Latency Reduced", icon: "⚡" },
        { value: "40%", label: "Throughput Improved", icon: "🚀" },
        { value: "AWS→Azure", label: "Cloud Migration", icon: "☁️" },
        { value: "PyPI", label: "Open-Source Package", icon: "📦" },
        { value: "3+", label: "Years Experience", icon: "🏗️" }
    ],

    skills: {
        backend: [
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
            { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
            { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
            { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
        ],
        cloudDevops: [
            { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
            { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
            { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
            { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
            { name: "Shell Scripting", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" }
        ],
        observability: [
            { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
            { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" }
        ],
        practices: [
            { name: "Microservices", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
            { name: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { name: "System Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" },
            { name: "Multi-tenancy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "Agile / Scrum", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" }
        ]
    },

    experience: [
        {
            title: "Software Development Engineer II",
            subtitle: "Backend & DevOps",
            company: "FarmSetu Technologies",
            location: "Nashik, India",
            period: "July 2025 – Present",
            bullets: [
                "Built and published <a href='https://pypi.org/project/setu-trafficmonitor/' target='_blank' rel='noopener'><strong>setu-trafficmonitor</strong></a>, an open-source Python package for real-time ingress/egress traffic monitoring, currently used across production microservices.",
                "Designed and deployed scalable backend services using <strong>Django</strong> and <strong>FastAPI</strong> for a high-traffic agri-food platform serving thousands of active users.",
                "Reduced PostgreSQL query execution time by <strong>25%</strong> through indexing strategies, query refactoring, and Postgres <code>EXPLAIN ANALYZE</code>.",
                "Orchestrated trade and logistics microservices on <strong>Kubernetes (K8s)</strong>, managing rolling deployments, service discovery, and horizontal pod autoscaling.",
                "Implemented production monitoring and observability using <strong>Prometheus</strong> and <strong>Grafana</strong>, improving incident visibility and debugging efficiency.",
                "Integrated third-party services (Razorpay payment gateway, logistics APIs) to improve platform capabilities and transaction workflows.",
                "Automated deployment workflows and backend operational tasks using <strong>Linux</strong> and <strong>Shell Scripting</strong>."
            ]
        },
        {
            title: "Software Development Engineer",
            subtitle: "Backend",
            company: "Altiushub",
            location: "Hyderabad, India",
            period: "May 2024 – June 2025",
            bullets: [
                "Engineered a <strong>multi-tenant SaaS backend</strong> in Django implementing tenant isolation, role-based access controls, and secure data access patterns for enterprise pharma clients.",
                "Improved system throughput by <strong>40%</strong> through ORM optimization, backend refactoring, and <strong>Redis</strong> caching for frequently accessed workflows.",
                "Designed and managed <strong>self-hosted GitHub Actions runners</strong> on Linux servers, automating CI/CD workflows, deployment pipelines, and infrastructure management.",
                "Configured and maintained <strong>Linux-based self-hosted CI/CD environments</strong> with Docker, shell scripting, and workflow orchestration for scalable application deployment.",
                "Integrated third-party APIs with retry logic and circuit-breaker patterns to maintain high availability under traffic spikes.",
                "Collaborated with infrastructure teams across <strong>AWS</strong> and <strong>Azure</strong> environments to stabilize production releases."
            ]
        },
        {
            title: "Software Development Engineer",
            subtitle: "Project Engagement",
            company: "PxG (PTG) Partners",
            location: "Hyderabad, India",
            period: "Oct 2023 – Apr 2024",
            bullets: [
                "Refactored legacy backend systems to improve maintainability, stability, and production performance.",
                "Supported Linux server troubleshooting, deployment validation, and backend issue resolution under tight project timelines."
            ]
        },
        {
            title: "Software Development Engineer",
            subtitle: "Backend & Cloud Migration",
            company: "Conduira",
            location: "Hyderabad, India",
            period: "Apr 2023 – Sept 2023",
            bullets: [
                "Executed a production migration from <strong>AWS to Azure</strong>, ensuring <strong>100%</strong> data consistency, minimal downtime, and smooth cloud transition.",
                "Automated backend operational workflows using Python, reducing manual effort by approximately <strong>30%</strong>.",
                "Developed reusable <strong>Shell Scripts</strong> for deployment validation, monitoring, and routine Linux-based operational tasks.",
                "Supported Dockerized application deployments and backend optimization/debugging in Agile delivery cycles."
            ]
        },
        {
            title: "Software Developer Intern",
            subtitle: "→ Full-Time Conversion",
            company: "Conduira",
            location: "Hyderabad, India",
            period: "Jun 2022 – Mar 2023",
            bullets: [
                "Built and optimized backend features and REST APIs; developed Python automation scripts.",
                "Supported debugging, testing, and release activities; earned full-time conversion based on performance within 9 months."
            ]
        }
    ],

    projects: [
        {
            name: "setu-trafficmonitor",
            tech: "Python · Django · PyPI",
            description: "Open-source middleware package for real-time HTTP ingress/egress traffic monitoring. Currently deployed in production across all microservices at FarmSetu Technologies.",
            metrics: "Production-deployed · PyPI published · Open-source",
            link: "https://pypi.org/project/setu-trafficmonitor/",
            linkLabel: "View on PyPI"
        },
        {
            name: "Intelligent E-Commerce Microservices Platform",
            tech: "FastAPI · Docker · Kubernetes · AWS · Jenkins CI/CD",
            description: "Polyglot microservices backend with Jenkins CI/CD, Kubernetes orchestration, NLTK-based recommendation service, and auto-scaling infrastructure on AWS.",
            metrics: "Kubernetes-orchestrated · Jenkins CI/CD · AWS-hosted",
            link: "https://github.com/jeevan060402",
            linkLabel: "View on GitHub"
        },
        {
            name: "Distributed Audio Bot",
            tech: "Python · asyncio · FFMPEG",
            description: "Asynchronous, event-driven bot with concurrent request-queuing for low-latency audio streaming. Features connection pooling and Redis caching to handle concurrent server requests.",
            metrics: "Async architecture · Low-latency streaming · Event-driven"
        }
    ]
};
