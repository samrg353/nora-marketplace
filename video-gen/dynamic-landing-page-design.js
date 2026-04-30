// Workflow configuration - add new blocks here
export const workflowBlocks = [
  {
    "id": "start-inspiration",
    "type": "aiAutonomousAgent",
    "title": "🎨 Creative Director",
    "notes": "",
    "description": "Generate unique landing page concept based on current design trends and market research",
    "command": "",
    "workingDir": "./",
    "interactive": false,
    "mediaUrl": "",
    "mediaType": "auto",
    "showInline": true,
    "autoplay": false,
    "controls": true,
    "autoSelectLatest": false,
    "autoRefreshInterval": 0,
    "fileFilter": "*.*",
    "links": [],
    "logicType": "status",
    "startTime": "09:00",
    "endTime": "17:00",
    "selectedDays": [
      1,
      2,
      3,
      4,
      5
    ],
    "searchString": "",
    "caseSensitive": false,
    "regexPattern": "",
    "regexFlags": "i",
    "threshold": 0,
    "operator": ">=",
    "rangeMin": 0,
    "rangeMax": 100,
    "expression": "",
    "variables": {},
    "edgeDefaults": [],
    "aiProvider": "anthropic",
    "aiModel": "claude-sonnet-4-20250514",
    "aiModelCustom": "",
    "aiApiKey": "",
    "aiCsvEnabled": false,
    "aiCsvDir": "",
    "memoryFolderPath": "G:\\Other computers\\My Laptop (1)\\NORA\\automation\\data",
    "tools": [],
    "inputFolderPath": "",
    "filePattern": "*.txt;*.md;*.json",
    "sortBy": "modified",
    "categories": [
      "summarize",
      "todo",
      "schedule",
      "email",
      "other"
    ],
    "customPrompt": "",
    "conversationMode": "single-turn",
    "maxTurns": 5,
    "duration": 5,
    "unit": "seconds",
    "retryEnabled": false,
    "retryAttempts": 3,
    "retryDelayMs": 1000,
    "retryBackoff": "exponential",
    "goalPrompt": "You are a Creative Director with expertise in web design trends and brand strategy.\n    \nYour role: Generate fresh, varied landing page concepts that differ each time you run.\n\nApproach:\n- Research current design trends (glassmorphism, brutalism, minimalism, 3D elements, etc.)\n- Pick a random industry or use case (SaaS, e-commerce, portfolio, agency, etc.)\n- Choose a unique mood/tone (playful, corporate, edgy, warm, futuristic)\n- Suggest 2-3 divergent creative directions\n- Include specific color palette suggestions\n- Recommend layout patterns (hero-focused, grid-based, scroll-story, etc.)\n\nOutput a concise creative brief with:\n1. Industry/Use Case\n2. Target Audience\n3. Emotional Tone\n4. Visual Style\n5. Color Palette (hex codes)\n6. Layout Approach\n\nBe creative and vary your recommendations significantly each run.",
    "userRequest": "Research current landing page trends and generate 1-3 unique creative directions. Consider different industries, color palettes, and emotional tones. Be unpredictable - explore emerging aesthetics.",
    "defaultWorkingDir": "",
    "maxIterations": 12,
    "timeoutMinutes": 30,
    "budgetLimit": 5,
    "agentDirectory": "",
    "scriptPath": "",
    "scriptType": "auto-detect",
    "routeLabels": "",
    "maxRuntime": 30,
    "debugMode": false,
    "allowToolDiscovery": true,
    "isExecuted": false,
    "position": {
      "x": -118.95611919048056,
      "y": 72.22035240730781
    }
  },
  {
    "id": "ux-strategist",
    "type": "aiAutonomousAgent",
    "title": "🧠 UX Strategist",
    "description": "Define user flow, conversion strategy, and interactive elements",
    "aiProvider": "anthropic",
    "aiModel": "claude-3-5-sonnet-20241022",
    "userRequest": "Based on the creative direction, design the user experience strategy and conversion funnel for the landing page.",
    "goalPrompt": "You are a UX Strategist specializing in conversion optimization and user psychology.\n\nYour role: Transform the creative concept into a strategic user experience plan.\n\nReview the creative brief from the previous step and design:\n\n1. **User Journey Map**\n   - Entry points (ad, search, referral, direct)\n   - Emotional arc through the page\n   - Decision triggers at each section\n\n2. **Conversion Strategy**\n   - Primary CTA (placement, copy, urgency)\n   - Secondary CTAs if applicable\n   - Trust signals positioning\n   - Friction reduction tactics\n\n3. **Interactive Elements**\n   - Hover states and micro-interactions\n   - Scroll-triggered animations\n   - Form UX considerations\n   - Mobile vs desktop prioritization\n\n4. **Content Hierarchy**\n   - Above-the-fold priorities\n   - Section sequence logic\n   - Visual emphasis strategy\n\nProvide specific, actionable UX recommendations that vary based on the creative direction.",
    "memoryFolderPath": "C:/Users/Sam G/Documents/NORA/automation/data",
    "filePattern": "*.txt;*.md;*.json",
    "maxIterations": 15,
    "timeout": 200000,
    "budgetLimit": 5,
    "inlineTools": [],
    "position": {
      "x": 450,
      "y": 100
    },
    "isExecuted": false,
    "status": "idle",
    "output": ""
  },
  {
    "id": "copywriter",
    "type": "aiAutonomousAgent",
    "title": "✍️ Brand Copywriter",
    "description": "Craft compelling headlines, value props, and microcopy",
    "aiProvider": "anthropic",
    "aiModel": "claude-3-5-sonnet-20241022",
    "userRequest": "Write persuasive, on-brand copy for all landing page sections including headlines, subheadlines, body copy, and CTAs.",
    "goalPrompt": "You are a Senior Brand Copywriter with expertise in direct response and storytelling.\n\nYour role: Create all written content for the landing page based on the creative brief and UX strategy.\n\nDeliverables:\n\n1. **Hero Section**\n   - Main headline (vary between benefit-driven, curiosity-driven, or social proof)\n   - Subheadline for context\n   - Primary CTA copy\n\n2. **Value Propositions**\n   - 3-5 key benefits or features\n   - Each with a punchy headline and supporting copy\n   - Use different frameworks: before/after, problem/solution, or feature/benefit\n\n3. **Social Proof Section**\n   - Testimonial suggestions (realistic personas)\n   - Stats or metrics to highlight\n   - Trust badge copy\n\n4. **Final CTA Section**\n   - Compelling close with urgency or FOMO\n   - CTA button copy (not always \"Get Started\" - be creative)\n\n5. **Microcopy**\n   - Form labels and placeholders\n   - Error messages\n   - Loading states\n\nAdapt tone to match the creative direction. Vary writing style significantly: sometimes punchy and short, sometimes narrative and flowing.",
    "memoryFolderPath": "C:/Users/Sam G/Documents/NORA/automation/data",
    "filePattern": "*.txt;*.md;*.json",
    "maxIterations": 12,
    "timeout": 180000,
    "budgetLimit": 5,
    "inlineTools": [],
    "position": {
      "x": 800,
      "y": 100
    },
    "isExecuted": false,
    "status": "idle",
    "output": ""
  },
  {
    "id": "visual-designer",
    "type": "aiAutonomousAgent",
    "title": "🎭 Visual Designer",
    "description": "Create detailed design specifications and component library",
    "aiProvider": "anthropic",
    "aiModel": "claude-3-5-sonnet-20241022",
    "userRequest": "Develop comprehensive visual design specifications including typography, spacing, component designs, and responsive behavior.",
    "goalPrompt": "You are a Visual/UI Designer specializing in modern web interfaces and design systems.\n\nYour role: Create detailed design specifications for implementation.\n\nBased on the creative direction, UX strategy, and copy, specify:\n\n1. **Typography System**\n   - Font pairings (heading + body)\n   - Size scale (mobile + desktop)\n   - Line heights and letter spacing\n   - Weight variations\n\n2. **Color System**\n   - Primary, secondary, accent colors\n   - Background variations\n   - Text contrast checks\n   - Gradient directions if applicable\n\n3. **Spacing & Layout**\n   - Grid system (12-column, custom, etc.)\n   - Container max-widths\n   - Section padding (mobile + desktop)\n   - Component gaps and rhythms\n\n4. **Component Specifications**\n   - Button styles (primary, secondary, ghost)\n   - Input field designs\n   - Card/testimonial layouts\n   - Icon style guide\n\n5. **Responsive Breakpoints**\n   - Mobile (< 768px)\n   - Tablet (768-1024px)\n   - Desktop (> 1024px)\n   - Specific adaptations per section\n\n6. **Motion & Interactions**\n   - Transition timings\n   - Entrance animations\n   - Scroll effects\n   - Loading states\n\nOutput should be implementation-ready. Vary your design choices based on the creative direction - sometimes ultra-minimal, sometimes richly detailed.",
    "memoryFolderPath": "C:/Users/Sam G/Documents/NORA/automation/data",
    "filePattern": "*.txt;*.md;*.json",
    "maxIterations": 15,
    "timeout": 200000,
    "budgetLimit": 5,
    "inlineTools": [],
    "position": {
      "x": 450,
      "y": 400
    },
    "isExecuted": false,
    "status": "idle",
    "output": ""
  },
  {
    "id": "technical-architect",
    "type": "aiAutonomousAgent",
    "title": "⚙️ Technical Architect",
    "description": "Define tech stack, performance optimizations, and implementation approach",
    "aiProvider": "anthropic",
    "aiModel": "claude-3-5-sonnet-20241022",
    "userRequest": "Recommend the optimal technical implementation approach, tech stack, and performance strategy for the landing page design.",
    "goalPrompt": "You are a Technical Architect specializing in modern web development and performance optimization.\n\nYour role: Translate the design into a technical implementation plan.\n\nAnalyze the design requirements and recommend:\n\n1. **Tech Stack Options**\n   - Framework choice (React, Vue, Next.js, Astro, static HTML, etc.) with rationale\n   - CSS approach (Tailwind, styled-components, CSS modules, etc.)\n   - Animation libraries if needed\n   - Form handling approach\n\n2. **Performance Strategy**\n   - Image optimization tactics\n   - Code splitting approach\n   - Critical CSS strategy\n   - Font loading optimization\n   - Lazy loading plan\n\n3. **SEO & Metadata**\n   - Meta tags structure\n   - Open Graph recommendations\n   - Schema markup suggestions\n   - Sitemap needs\n\n4. **Analytics & Tracking**\n   - Conversion event tracking points\n   - Heatmap/session recording recommendations\n   - A/B testing opportunities\n\n5. **Accessibility Considerations**\n   - Semantic HTML requirements\n   - ARIA labels needed\n   - Keyboard navigation plan\n   - Screen reader optimizations\n\n6. **Deployment Recommendations**\n   - Hosting suggestions\n   - CI/CD approach\n   - Environment setup\n\nVary your recommendations based on:\n- Design complexity\n- Target audience technical sophistication\n- Performance priorities\n- Time/budget constraints (infer from design)",
    "memoryFolderPath": "C:/Users/Sam G/Documents/NORA/automation/data",
    "filePattern": "*.txt;*.md;*.json",
    "maxIterations": 12,
    "timeout": 180000,
    "budgetLimit": 5,
    "inlineTools": [],
    "position": {
      "x": 800,
      "y": 400
    },
    "isExecuted": false,
    "status": "idle",
    "output": ""
  },
  {
    "id": "synthesis-director",
    "type": "aiAutonomousAgent",
    "title": "🎯 Design Director",
    "description": "Review all outputs and synthesize into a cohesive design blueprint",
    "aiProvider": "anthropic",
    "aiModel": "claude-3-5-sonnet-20241022",
    "userRequest": "Review all specialist outputs and create a unified, production-ready design blueprint with clear next steps.",
    "goalPrompt": "You are the Design Director responsible for final quality control and synthesis.\n\nYour role: Review all specialist contributions and create the final blueprint.\n\n1. **Consistency Check**\n   - Ensure creative direction, UX, copy, visual design, and tech align\n   - Identify any conflicts or gaps\n   - Recommend adjustments if needed\n\n2. **Unified Blueprint**\n   - Executive summary (1 paragraph)\n   - Page structure outline (section by section)\n   - Content blocks with copy + design specs\n   - Technical implementation notes\n\n3. **Asset Requirements**\n   - List of images needed (with descriptions)\n   - Icon requirements\n   - Illustration needs\n   - Logo specifications\n\n4. **Next Steps & Deliverables**\n   - Wireframe/mockup phase actions\n   - Development milestones\n   - Testing requirements\n   - Launch checklist\n\n5. **Alternative Variations**\n   - Quick wins version (MVP)\n   - Premium version (full features)\n   - A/B test suggestions\n\nProduce a final document that a development team can immediately use to build the landing page.",
    "memoryFolderPath": "C:/Users/Sam G/Documents/NORA/automation/data",
    "filePattern": "*.txt;*.md;*.json",
    "maxIterations": 18,
    "timeout": 240000,
    "budgetLimit": 7,
    "inlineTools": [],
    "position": {
      "x": 450,
      "y": 700
    },
    "isExecuted": false,
    "status": "idle",
    "output": ""
  },
  {
    "id": "save-blueprint",
    "type": "script",
    "title": "💾 Save Design Blueprint",
    "description": "Export final design documentation to file",
    "command": "powershell -Command \"Get-Date | Out-File -FilePath 'data/landing-page-blueprint-$(Get-Date -Format 'yyyyMMdd-HHmmss').txt'\"",
    "workingDir": "C:/Users/Sam G/Documents/NORA/automation",
    "interactive": false,
    "position": {
      "x": 450,
      "y": 950
    },
    "isExecuted": false,
    "status": "idle",
    "output": ""
  },
  {
    "id": "notes-workflow",
    "type": "notepad",
    "title": "📋 Workflow Overview",
    "description": "About this workflow",
    "notes": "DYNAMIC LANDING PAGE DESIGN WORKFLOW - MERCEDES-BENZ\n\nThis workflow creates unique Mercedes-Benz landing page designs through specialized AI agents.\n\nKEY FEATURES:\n✓ Non-deterministic - different results each run\n✓ Multi-agent collaboration with distinct roles\n✓ Comprehensive design process from concept to blueprint\n✓ Production-ready specifications\n✓ Brand-aligned to Mercedes-Benz guidelines\n\nAGENT ROLES:\n1. Creative Director - Sets varied visual direction\n2. UX Strategist - Designs conversion-focused flow  \n3. Brand Copywriter - Crafts persuasive messaging\n4. Visual Designer - Specifies detailed design system\n5. Technical Architect - Plans implementation\n6. Design Director - Synthesizes final blueprint\n\nBRAND CUSTOMIZATION:\n- Mercedes-Benz brand guidelines loaded from data/ folder\n- Maintains premium, sophisticated tone\n- Varies between EQ electric, AMG performance, Maybach luxury, S-Class innovation\n\nOUTPUTS:\nAll agent findings stored in data/ folder.\nFinal blueprint saved with timestamp in data/ folder.",
    "position": {
      "x": 100,
      "y": 700
    },
    "isExecuted": false,
    "status": "idle",
    "output": ""
  }
];

// Define connections between blocks
export const workflowConnections = [
  {
    "id": "edge-1",
    "source": "start-inspiration",
    "target": "ux-strategist",
    "sourceHandle": "complete",
    "type": "smoothstep"
  },
  {
    "id": "edge-2",
    "source": "ux-strategist",
    "target": "copywriter",
    "sourceHandle": "complete",
    "type": "smoothstep"
  },
  {
    "id": "edge-3",
    "source": "copywriter",
    "target": "visual-designer",
    "sourceHandle": "complete",
    "type": "smoothstep"
  },
  {
    "id": "edge-4",
    "source": "copywriter",
    "target": "technical-architect",
    "sourceHandle": "complete",
    "type": "smoothstep"
  },
  {
    "id": "edge-5",
    "source": "visual-designer",
    "target": "synthesis-director",
    "sourceHandle": "complete",
    "type": "smoothstep"
  },
  {
    "id": "edge-6",
    "source": "technical-architect",
    "target": "synthesis-director",
    "sourceHandle": "complete",
    "type": "smoothstep"
  },
  {
    "id": "edge-7",
    "source": "synthesis-director",
    "target": "save-blueprint",
    "sourceHandle": "complete",
    "type": "smoothstep"
  }
];
