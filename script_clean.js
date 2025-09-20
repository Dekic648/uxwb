/* ========================================
   UX PRINCIPLES GUIDE - CLEAN JAVASCRIPT
   ======================================== */

// Principles Data
const principlesData = [
    {
        id: 'user-centered-design',
        title: "User-Centered Design (UCD)",
        category: 'methodology',
        description: "An approach to product development that involves users throughout the design process to create products that truly meet their needs and expectations.",
        origin: "User-Centered Design emerged from the field of human-computer interaction in the 1980s, emphasizing the importance of understanding users' needs, behaviors, and contexts when designing interactive systems.",
        keyTakeaways: [
            "Involve users in every phase of product development",
            "Focus on understanding user needs before designing solutions",
            "Test early and often with real users to validate assumptions",
            "Iterate based on user feedback to improve the product"
        ],
        examples: [
            "Conducting user interviews during the ideation phase",
            "Creating user personas based on research findings",
            "Testing prototypes with target users before development",
            "Gathering feedback through usability testing sessions"
        ]
    },
    {
        id: 'researching-citizen-needs',
        title: "Researching Citizen/User Needs",
        category: 'research',
        description: "A systematic approach to understanding the needs, behaviors, and pain points of citizens and users through various research methods to inform better public service design.",
        origin: "Citizen research emerged from public administration and civic technology movements, adapting user research methodologies for government and public sector contexts to improve citizen services.",
        keyTakeaways: [
            "Use multiple research methods to get comprehensive insights",
            "Include diverse citizen groups to ensure inclusive design",
            "Combine quantitative and qualitative data for complete picture",
            "Document findings clearly for stakeholder communication"
        ],
        examples: [
            "Conducting citizen interviews about government services",
            "Analyzing web analytics to understand user behavior patterns",
            "Distributing surveys to gather broad citizen feedback",
            "Observing citizens using public services in their natural environment"
        ]
    },
    {
        id: 'early-user-involvement',
        title: "Early User Involvement",
        category: 'methodology',
        description: "The principle of involving users in the earliest phases of product development when the cost of making changes is lowest and the impact of user feedback is highest.",
        origin: "This principle is based on the concept that the cost of fixing problems increases exponentially as a product moves through development phases, making early user input crucial for success.",
        keyTakeaways: [
            "Include users during ideation and concept development phases",
            "Early involvement reduces the cost of making changes later",
            "User feedback in early stages prevents costly mistakes",
            "Validate assumptions before investing in full development"
        ],
        examples: [
            "User interviews during the ideation phase",
            "Concept testing with paper prototypes",
            "Early usability testing of wireframes",
            "User feedback sessions before detailed design"
        ]
    },
    {
        id: 'user-research-interviews',
        title: "User Research & Interviews",
        category: 'research',
        description: "Structured conversations with users to understand their needs, behaviors, pain points, and expectations regarding a product or service.",
        origin: "User interviews are a foundational research method in UX design, adapted from qualitative research methodologies in social sciences and anthropology.",
        keyTakeaways: [
            "Recruit 5-10 users who match your target audience profile",
            "Use structured interview sessions lasting up to 1 hour",
            "Ask open-ended questions about current behaviors and needs",
            "Document findings using sticky notes for easy organization"
        ],
        examples: [
            "One-on-one interview sessions with target users",
            "Group workshops with 5 users at a time",
            "Contextual inquiry - observing users in their environment",
            "Follow-up interviews to validate findings"
        ]
    },
    {
        id: 'affinity-mapping',
        title: "Affinity Mapping",
        category: 'research',
        description: "A collaborative method for organizing and synthesizing research findings by grouping similar insights and identifying patterns in user feedback.",
        origin: "Affinity mapping originated from the KJ Method developed by Jiro Kawakita in the 1960s, and was later adapted for design thinking and UX research processes.",
        keyTakeaways: [
            "Group individual findings on sticky notes by similar themes",
            "Look for patterns and relationships between different insights",
            "Prioritize findings based on frequency and importance",
            "Involve the entire team in the analysis process"
        ],
        examples: [
            "Organizing interview findings on a wall or whiteboard",
            "Grouping user pain points by category",
            "Identifying common user needs across different segments",
            "Creating themes for feature prioritization"
        ]
    },
    {
        id: 'prototyping',
        title: "Prototyping",
        category: 'design',
        description: "Creating low-fidelity, inexpensive representations of a product to test concepts and gather user feedback before full development.",
        origin: "The term 'prototype' comes from Greek meaning 'primitive form'. In UX design, prototyping emerged as a way to test ideas quickly and cheaply before investing in development.",
        keyTakeaways: [
            "Start with paper prototypes using sketches and drawings",
            "Create digital prototypes using tools like PowerPoint or Google Slides",
            "Focus on key functionality rather than visual perfection",
            "Make prototypes interactive to simulate real user experience"
        ],
        examples: [
            "Paper sketches of mobile app screens",
            "Interactive PowerPoint presentations",
            "Clickable wireframes in design tools",
            "Physical mockups for hardware products"
        ]
    },
    {
        id: 'usability-testing',
        title: "Usability Testing",
        category: 'testing',
        description: "A method for evaluating a product by testing it with representative users to identify usability problems and gather qualitative and quantitative data.",
        origin: "Usability testing became formalized in the 1980s with the work of Jakob Nielsen and others, building on earlier human factors research and ergonomics principles.",
        keyTakeaways: [
            "Test with 5-8 representative users to find most usability issues",
            "Give users realistic tasks to complete with the product",
            "Observe users without interfering in their natural behavior",
            "Measure effectiveness, efficiency, and user satisfaction"
        ],
        examples: [
            "Task-based testing of e-commerce checkout process",
            "A/B testing different interface designs",
            "Remote usability testing with screen sharing",
            "Moderated vs. unmoderated testing sessions"
        ]
    },
    {
        id: 'think-aloud-protocol',
        title: "Think Aloud Protocol",
        category: 'testing',
        description: "A usability testing method where users verbalize their thoughts, feelings, and reactions while using a product, providing insight into their mental model and decision-making process.",
        origin: "The think-aloud protocol was developed by cognitive psychologists in the 1970s as a way to study problem-solving processes, and was later adapted for usability testing.",
        keyTakeaways: [
            "Ask users to speak their thoughts aloud while using the product",
            "Don't interrupt users during their thinking process",
            "Capture both verbal and non-verbal reactions",
            "Use findings to understand user mental models"
        ],
        examples: [
            "User says: 'I'm looking for the login button...'",
            "Observing user hesitation at confusing interface elements",
            "Understanding why users make specific choices",
            "Identifying where users get stuck or confused"
        ]
    },
    {
        id: 'problem-prioritization',
        title: "Problem Prioritization Matrix",
        category: 'methodology',
        description: "A systematic approach to prioritizing usability problems based on their impact on critical user journeys, difficulty to overcome, and frequency of occurrence.",
        origin: "Problem prioritization matrices are adapted from project management and quality assurance methodologies, applied specifically to UX problem-solving.",
        keyTakeaways: [
            "Focus on problems that occur on critical user paths (red routes)",
            "Prioritize issues that users cannot easily overcome",
            "Address problems that occur consistently across users",
            "Use a matrix to categorize problems by severity and urgency"
        ],
        examples: [
            "Critical: Login failure on e-commerce site",
            "Serious: Confusing navigation that users can work around",
            "Moderate: Minor interface inconsistencies",
            "Low: Cosmetic issues that don't affect functionality"
        ]
    },
    {
        id: 'usability-dimensions',
        title: "Three Dimensions of Usability",
        category: 'testing',
        description: "The ISO 9241 standard defines usability through three key dimensions: effectiveness, efficiency, and user satisfaction.",
        origin: "The ISO 9241 standard was first published in 1998 and has become the international standard for defining and measuring usability in human-computer interaction.",
        keyTakeaways: [
            "Effectiveness: Can users complete their tasks successfully?",
            "Efficiency: How quickly can users complete their tasks?",
            "Satisfaction: How do users feel about using the product?",
            "Measure all three dimensions to get a complete usability picture"
        ],
        examples: [
            "Effectiveness: Task completion rate, error rate",
            "Efficiency: Time to complete tasks, learning curve",
            "Satisfaction: User ratings, preference tests",
            "Combined: Overall usability score"
        ]
    },
    {
        id: 'concept-evaluation',
        title: "Concept Evaluation",
        category: 'research',
        description: "A research method for gathering user feedback on product concepts and feature lists before detailed design and development begins.",
        origin: "Concept evaluation emerged from market research methodologies, adapted for UX design to validate product concepts early in the development process.",
        keyTakeaways: [
            "Present users with a list of planned features and functionality",
            "Ask users to rank features by importance and priority",
            "Group features into categories: essential, nice-to-have, unnecessary",
            "Gather qualitative feedback on why features matter to users"
        ],
        examples: [
            "Feature prioritization workshops with users",
            "Card sorting exercises for feature organization",
            "User surveys on feature importance",
            "Focus groups discussing product concepts"
        ]
    }
];

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const principlesGrid = document.getElementById('principlesGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('principleModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const contactForm = document.getElementById('contactForm');

// Theme Management
let currentTheme = localStorage.getItem('theme') || 'dark';

function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    icon.className = currentTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

// Filter Management
function filterPrinciples(filter) {
    // Update active filter button
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
    });
    
    // Filter and display principles
    const filteredPrinciples = filter === 'all' 
        ? principlesData 
        : principlesData.filter(principle => principle.category === filter);
    
    displayPrinciples(filteredPrinciples);
}

// Display Principles
function displayPrinciples(principles) {
    principlesGrid.innerHTML = '';
    
    principles.forEach(principle => {
        const card = createPrincipleCard(principle);
        principlesGrid.appendChild(card);
    });
}

function createPrincipleCard(principle) {
    const card = document.createElement('div');
    card.className = 'principle-card';
    
    card.innerHTML = `
        <div class="category">${principle.category}</div>
        <h3>${principle.title}</h3>
        <p>${principle.description}</p>
    `;
    
    card.addEventListener('click', () => openModal(principle));
    
    return card;
}

// Modal Management
function openModal(principle) {
    modalBody.innerHTML = `
        <h2>${principle.title}</h2>
        <div class="category">${principle.category}</div>
        <p><strong>Description:</strong> ${principle.description}</p>
        
        <h3>Origin</h3>
        <p>${principle.origin}</p>
        
        <h3>Key Takeaways</h3>
        <ul>
            ${principle.keyTakeaways.map(takeaway => `<li>${takeaway}</li>`).join('')}
        </ul>
        
        <h3>Examples</h3>
        <ul>
            ${principle.examples.map(example => `<li>${example}</li>`).join('')}
        </ul>
    `;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Contact Form
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.name || !data.email || !data.subject || !data.message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate form submission
    alert('Thank you for your message! We\'ll get back to you soon.');
    contactForm.reset();
}

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Navigation Highlighting
function initNavigationHighlighting() {
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize Application
function init() {
    // Initialize theme
    initTheme();
    
    // Display all principles initially
    displayPrinciples(principlesData);
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize navigation highlighting
    initNavigationHighlighting();
    
    // Add event listeners
    themeToggle.addEventListener('click', toggleTheme);
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            filterPrinciples(filter);
        });
    });
    
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    contactForm.addEventListener('submit', handleContactForm);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
}

// Start the application
document.addEventListener('DOMContentLoaded', init);
