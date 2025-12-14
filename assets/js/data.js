const portfolioData = {
    personal: {
        name: "Maddur Jeevan Kumar Reddy",
        title: "Backend Engineer",
        email: "reddyjeevan936@gmail.com",
        phone: "+91-9390643938",
        location: "Hyderabad, India",
        resumeFile: "Jeevan_Resume_2112025.pdf"
    },
    
    skills: {
        languages: [
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { name: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }
        ],
        backend: [
            { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
            { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
            { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" },
            { name: "Microservices", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" }
        ],
        databases: [
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" }
        ],
        devops: [
            { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
            { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
            { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
            { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
        ]
    },
    
    experience: [
        {
            title: "Software Development Engineer",
            company: "FarmSetu Technologies",
            period: "July 2025 – Present",
            description: "Architected scalable backend services using Python, Django, and FastAPI for agri-food platform. Reduced API latency by 25% through query optimization and caching. Engineered microservices architecture enabling independent deployment."
        },
        {
            title: "Software Development Engineer",
            company: "Altiushub",
            period: "May 2024 – June 2025",
            description: "Designed multi-tenant SaaS application using Django. Implemented automated testing pipeline achieving 90% test coverage. Optimized performance resulting in 40% reduction in server load times."
        },
        {
            title: "Software Development Engineer",
            company: "PxG Partners",
            period: "October 2023 – April 2024",
            description: "Developed client-facing web applications using CodeIgniter (PHP) framework. Enhanced platform efficiency by resolving performance bottlenecks in legacy codebase."
        },
        {
            title: "Software Development Engineer",
            company: "Conduira",
            period: "April 2023 – September 2023",
            description: "Led platform migration from AWS to Azure ensuring 100% data integrity. Developed Python automation scripts improving operational efficiency by 30%."
        },
        {
            title: "Software Developer Intern",
            company: "Conduira",
            period: "June 2022 – March 2023",
            description: "Enhanced platform performance by optimizing REST APIs and implementing efficient resource management. Contributed to internal applications and automation scripts."
        }
    ],
    
    projects: [
        {
            name: "Intelligent E-Commerce Microservices Platform",
            tech: "Python, Java, FastAPI, Spring Boot, Docker, Kubernetes, AWS",
            description: "Architected polyglot microservices handling 10K+ concurrent users with 99.9% uptime. Implemented event-driven architecture with message queues for order processing. Built auto-scaling infrastructure reducing costs by 40% during low-traffic periods.",
            metrics: "10K+ users • 99.9% uptime • 40% cost reduction"
        },
        {
            name: "High-Performance Discord Bot Infrastructure",
            tech: "Python, asyncio, Redis, WebSocket, YouTube API",
            description: "Engineered distributed bot system serving 50+ Discord servers simultaneously. Implemented connection pooling and caching layer reducing API calls by 80%. Built real-time audio streaming pipeline with sub-200ms latency.",
            metrics: "50+ servers • 80% API reduction • <200ms latency"
        },
        {
            name: "IoT Agricultural Data Processing System",
            tech: "Java, Spring Boot, PostgreSQL, REST API, IoT sensors",
            description: "Built real-time data ingestion pipeline processing 1M+ sensor readings daily. Designed predictive analytics engine with 85% accuracy for crop yield forecasting. Implemented data aggregation reducing storage costs by 60%.",
            metrics: "1M+ daily readings • 85% prediction accuracy • 60% storage savings"
        }
    ]
};
