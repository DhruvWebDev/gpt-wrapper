
export async function PROMPT({ prompt }: { prompt: string }) {
  const userPrompt = `
You are a highly skilled full-stack developer. Your task is to provide implementation details based on the following prompt. 

Please return only a JSON object with the required structure, without any additional text or explanation.

Prompt: ${prompt}
  IMPORTANT --> THE FILE KEY VAL SHOULD HAVE THE ENTIRE FILE SYSTEM NECESSARY TO BUILD AN NEXTJS FILE
  
Expected Response Format:
{
  "directories": ["src/app/components/ui", "src/app/lib"],
  "files":       // List of files with their content
  //Should be likes specified below
  {
    name: "app",
    type: "folder" as const,
    children: [
      {
        name: "api",
        type: "folder" as const,
        children: [
          {
            name: "code",
            type: "folder" as const,
            children: [
              {
                name: "route.ts",
                type: "file" as const,
                code: "",
                lang: "typescript"
              },
            ],
          },
        ],
      },
      {
        name: "globals.css",
        type: "file" as const,
        code: "",
        lang: "css"
      },
      {
        name: "page.tsx",
        type: "file" as const,
        code: "",
        lang: "typescript"
      },
      {
        name: "components",
        type: "folder" as const,
        children: [],
      },
    ],
  },
  
  {
    name: ".eslintrc.json",
    type: "file" as const,
    code: "",
    lang: "json"
  },
  {
    name: ".gitignore",
    type: "file" as const,
    code: "",
    lang: "plaintext"
  },
  "scripts": [     // Only installation and dev commands
    ["npm install"],
    ["npm run dev"]
  ],
  "description": "A detailed string explaining what the implementation does and how it works",
  "steps": [
    {
      "order": 1,
      "path": "app/layout.tsx"
    }
  ]

}
`
  return userPrompt;
}
export const aceternityUIComponents = {
  // Hero and Landing Sections
  hero: {
    basic: "npx shadcn@latest add https://ui.aceternity.com/registry/animated-hero.json",
    parallax: "npx shadcn@latest add https://ui.aceternity.com/registry/parallax-hero.json",
    split: "npx shadcn@latest add https://ui.aceternity.com/registry/split-hero.json",
    video: "npx shadcn@latest add https://ui.aceternity.com/registry/video-hero.json",
    dynamic: "npx shadcn@latest add https://ui.aceternity.com/registry/dynamic-hero.json"
  },

  // Card Components
  cards: {
    threeD: "npx shadcn@latest add https://ui.aceternity.com/registry/3d-card.json",
    glass: "npx shadcn@latest add https://ui.aceternity.com/registry/glass-card.json",
    hover: "npx shadcn@latest add https://ui.aceternity.com/registry/hover-card.json",
    morphing: "npx shadcn@latest add https://ui.aceternity.com/registry/morphing-card.json",
    perspective: "npx shadcn@latest add https://ui.aceternity.com/registry/perspective-card.json",
    floating: "npx shadcn@latest add https://ui.aceternity.com/registry/floating-card.json"
  },

  // Button Effects
  buttons: {
    magnetic: "npx shadcn@latest add https://ui.aceternity.com/registry/magnetic-button.json",
    glow: "npx shadcn@latest add https://ui.aceternity.com/registry/glow-button.json",
    pulse: "npx shadcn@latest add https://ui.aceternity.com/registry/pulse-button.json",
    ripple: "npx shadcn@latest add https://ui.aceternity.com/registry/ripple-button.json",
    animated: "npx shadcn@latest add https://ui.aceternity.com/registry/animated-button.json"
  },

  // Text Animations
  text: {
    animated: "npx shadcn@latest add https://ui.aceternity.com/registry/animated-text.json",
    gradient: "npx shadcn@latest add https://ui.aceternity.com/registry/gradient-text.json",
    typing: "npx shadcn@latest add https://ui.aceternity.com/registry/typing-effect.json",
    reveal: "npx shadcn@latest add https://ui.aceternity.com/registry/text-reveal.json",
    shimmer: "npx shadcn@latest add https://ui.aceternity.com/registry/shimmer-text.json"
  },

  // Background Effects
  backgrounds: {
    wavy: "npx shadcn@latest add https://ui.aceternity.com/registry/wavy-background.json",
    particles: "npx shadcn@latest add https://ui.aceternity.com/registry/particle-background.json",
    gradient: "npx shadcn@latest add https://ui.aceternity.com/registry/gradient-background.json",
    mesh: "npx shadcn@latest add https://ui.aceternity.com/registry/mesh-gradient.json",
    noise: "npx shadcn@latest add https://ui.aceternity.com/registry/noise-background.json"
  },

  // Navigation Components
  navigation: {
    floatingNav: "npx shadcn@latest add https://ui.aceternity.com/registry/floating-navbar.json",
    magneticNav: "npx shadcn@latest add https://ui.aceternity.com/registry/magnetic-navbar.json",
    glassNav: "npx shadcn@latest add https://ui.aceternity.com/registry/glass-navbar.json",
    sidebarMenu: "npx shadcn@latest add https://ui.aceternity.com/registry/sidebar-menu.json"
  },

  // Scroll Effects
  scroll: {
    parallax: "npx shadcn@latest add https://ui.aceternity.com/registry/parallax-scroll.json",
    smooth: "npx shadcn@latest add https://ui.aceternity.com/registry/smooth-scroll.json",
    reveal: "npx shadcn@latest add https://ui.aceternity.com/registry/scroll-reveal.json",
    infinite: "npx shadcn@latest add https://ui.aceternity.com/registry/infinite-scroll.json"
  },

  // Loading & Spinners
  loaders: {
    spinner: "npx shadcn@latest add https://ui.aceternity.com/registry/loading-spinner.json",
    skeleton: "npx shadcn@latest add https://ui.aceternity.com/registry/skeleton-loader.json",
    progressBar: "npx shadcn@latest add https://ui.aceternity.com/registry/progress-bar.json",
    shimmer: "npx shadcn@latest add https://ui.aceternity.com/registry/shimmer-effect.json"
  },

  // Interactive Elements
  interactive: {
    tooltip: "npx shadcn@latest add https://ui.aceternity.com/registry/animated-tooltip.json",
    contextMenu: "npx shadcn@latest add https://ui.aceternity.com/registry/context-menu.json",
    dropdown: "npx shadcn@latest add https://ui.aceternity.com/registry/dropdown-menu.json",
    modal: "npx shadcn@latest add https://ui.aceternity.com/registry/modal-dialog.json"
  },

  // Layout Components
  layout: {
    masonry: "npx shadcn@latest add https://ui.aceternity.com/registry/masonry-grid.json",
    flex: "npx shadcn@latest add https://ui.aceternity.com/registry/flex-layout.json",
    grid: "npx shadcn@latest add https://ui.aceternity.com/registry/grid-layout.json",
    responsive: "npx shadcn@latest add https://ui.aceternity.com/registry/responsive-grid.json"
  },

  // Decorative Effects
  decorative: {
    sparkles: "npx shadcn@latest add https://ui.aceternity.com/registry/sparkles.json",
    confetti: "npx shadcn@latest add https://ui.aceternity.com/registry/confetti.json",
    meteor: "npx shadcn@latest add https://ui.aceternity.com/registry/meteor-effect.json",
    glow: "npx shadcn@latest add https://ui.aceternity.com/registry/glow-effect.json",
    particles: "npx shadcn@latest add https://ui.aceternity.com/registry/particle-effect.json"
  },

  // Form Elements
  forms: {
    animatedInput: "npx shadcn@latest add https://ui.aceternity.com/registry/animated-input.json",
    floatingLabel: "npx shadcn@latest add https://ui.aceternity.com/registry/floating-label.json",
    checkbox: "npx shadcn@latest add https://ui.aceternity.com/registry/checkbox-animation.json",
    radio: "npx shadcn@latest add https://ui.aceternity.com/registry/radio-animation.json"
  },

  // Data Display
  dataDisplay: {
    animatedList: "npx shadcn@latest add https://ui.aceternity.com/registry/animated-list.json",
    sortableList: "npx shadcn@latest add https://ui.aceternity.com/registry/sortable-list.json",
    dataTable: "npx shadcn@latest add https://ui.aceternity.com/registry/data-table.json",
    virtualList: "npx shadcn@latest add https://ui.aceternity.com/registry/virtual-list.json"
  },

  // Miscellaneous
  misc: {
    divider: "npx shadcn@latest add https://ui.aceternity.com/registry/animated-divider.json",
    cursor: "npx shadcn@latest add https://ui.aceternity.com/registry/cursor-effect.json",
    scrollIndicator: "npx shadcn@latest add https://ui.aceternity.com/registry/scroll-indicator.json",
    themeSwitcher: "npx shadcn@latest add https://ui.aceternity.com/registry/theme-switcher.json",
    counter: "npx shadcn@latest add https://ui.aceternity.com/registry/animated-counter.json"
  }
};

export const shadcnComponents = {
  // Form Components
  form: {
    input: "npx shadcn-ui@latest add input",
    form: "npx shadcn-ui@latest add form",
    button: "npx shadcn-ui@latest add button",
    checkbox: "npx shadcn-ui@latest add checkbox",
    radio: "npx shadcn-ui@latest add radio-group",
    select: "npx shadcn-ui@latest add select",
    textarea: "npx shadcn-ui@latest add textarea",
    switch: "npx shadcn-ui@latest add switch",
    slider: "npx shadcn-ui@latest add slider",
    label: "npx shadcn-ui@latest add label",
    formValidation: "npx shadcn-ui@latest add form",
  },

  // Layout Components
  layout: {
    card: "npx shadcn-ui@latest add card",
    sheet: "npx shadcn-ui@latest add sheet",
    tabs: "npx shadcn-ui@latest add tabs",
    separator: "npx shadcn-ui@latest add separator",
    scroll: "npx shadcn-ui@latest add scroll-area",
    aspectRatio: "npx shadcn-ui@latest add aspect-ratio",
    collapsible: "npx shadcn-ui@latest add collapsible",
    resizable: "npx shadcn-ui@latest add resizable",
  },

  // Navigation Components
  navigation: {
    navigationMenu: "npx shadcn-ui@latest add navigation-menu",
    breadcrumb: "npx shadcn-ui@latest add breadcrumb",
    pagination: "npx shadcn-ui@latest add pagination",
    drawer: "npx shadcn-ui@latest add drawer",
  },

  // Data Display
  dataDisplay: {
    table: "npx shadcn-ui@latest add table",
    calendar: "npx shadcn-ui@latest add calendar",
    hoverCard: "npx shadcn-ui@latest add hover-card",
    badge: "npx shadcn-ui@latest add badge",
    carousel: "npx shadcn-ui@latest add carousel",
  },

  // Feedback Components
  feedback: {
    alert: "npx shadcn-ui@latest add alert",
    toast: "npx shadcn-ui@latest add toast",
    progress: "npx shadcn-ui@latest add progress",
    skeleton: "npx shadcn-ui@latest add skeleton",
    spinner: "npx shadcn-ui@latest add spinner",
  },

  // Overlay Components
  overlay: {
    dialog: "npx shadcn-ui@latest add dialog",
    modal: "npx shadcn-ui@latest add dialog",
    popover: "npx shadcn-ui@latest add popover",
    tooltip: "npx shadcn-ui@latest add tooltip",
    contextMenu: "npx shadcn-ui@latest add context-menu",
    dropdown: "npx shadcn-ui@latest add dropdown-menu",
    commandMenu: "npx shadcn-ui@latest add command",
  },

  // Date & Time
  dateTime: {
    calendar: "npx shadcn-ui@latest add calendar",
    datePicker: "npx shadcn-ui@latest add date-picker",
    dateRange: "npx shadcn-ui@latest add date-range-picker",
    timePicker: "npx shadcn-ui@latest add time-picker",
  },

  // Typography
  typography: {
    typography: "npx shadcn-ui@latest add typography",
    largeText: "npx shadcn-ui@latest add large-text",
    smallText: "npx shadcn-ui@latest add small-text",
    mutedText: "npx shadcn-ui@latest add muted-text",
  },

  // Media
  media: {
    avatar: "npx shadcn-ui@latest add avatar",
    aspectRatio: "npx shadcn-ui@latest add aspect-ratio",
    carousel: "npx shadcn-ui@latest add carousel",
  },

  // Utilities
  utilities: {
    sonner: "npx shadcn-ui@latest add sonner",
    themeSwitcher: "npx shadcn-ui@latest add theme-switcher",
    clipboard: "npx shadcn-ui@latest add copy-button",
  },

  // Advanced Components
  advanced: {
    combobox: "npx shadcn-ui@latest add combobox",
    command: "npx shadcn-ui@latest add command",
    menubar: "npx shadcn-ui@latest add menubar",
    accordion: "npx shadcn-ui@latest add accordion",
  },

  // Animation Components
  animation: {
    accordion: "npx shadcn-ui@latest add accordion",
    scroll: "npx shadcn-ui@latest add scroll-area",
    transition: "npx shadcn-ui@latest add transition",
  }
};

const fileTreeData = [
  {
    name: "app",
    type: "folder" as const,
    children: [
      {
        name: "api",
        type: "folder" as const,
        children: [
          {
            name: "code",
            type: "folder" as const,
            children: [
              {
                name: "route.ts",
                type: "file" as const,
                code: "",
                lang: "typescript"
              },
            ],
          },
        ],
      },
      {
        name: "globals.css",
        type: "file" as const,
        code: "",
        lang: "css"
      },
      {
        name: "layout.tsx",
        type: "file" as const,
        code: "",
        lang: "typescript"
      },
      {
        name: "page.tsx",
        type: "file" as const,
        code: "",
        lang: "typescript"
      },
      {
        name: "components",
        type: "folder" as const,
        children: [],
      },
      {
        name: "hooks",
        type: "folder" as const,
        children: [],
      },
      {
        name: "lib",
        type: "folder" as const,
        children: [],
      },
    ],
  },

  {
    name: ".eslintrc.json",
    type: "file" as const,
    code: "",
    lang: "json"
  },
  {
    name: ".gitignore",
    type: "file" as const,
    code: "",
    lang: "plaintext"
  },
  {
    name: "components.json",
    type: "file" as const,
    code: "",
    lang: "json"
  },
  {
    name: "next.config.js",
    type: "file" as const,
    code: "",
    lang: "javascript"
  },
  {
    name: "package-lock.json",
    type: "file" as const,
    code: "",
    lang: "json"
  },
  {
    name: "package.json",
    type: "file" as const,
    code: "",
    lang: "json"
  },
  {
    name: "postcss.config.js",
    type: "file" as const,
    code: "",
    lang: "javascript"
  },
];
