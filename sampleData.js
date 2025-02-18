
const data = {
    directories: ['src/app/components/ui', 'src/app/lib'],
    files: [
        { name: 'app', type: 'folder', children: [] },
        { name: '.eslintrc.json', type: 'file', code: '{}', lang: 'json' },
        { 
            name: '.gitignore',
            type: 'file',
            code: 'node_modules/\n' +
                '.next/\n' +
                'out/\n' +
                '.DS_Store\n' +
                '.env.local\n' +
                '.env.development.local\n' +
                '.env.test.local\n' +
                '.env.production.local',
            lang: 'plaintext'
        }
    ],
    scripts: [['npm install'], ['npm run dev']],
    description: 'A simple Next.js application structure with essential configuration files and directories setcation.',
    steps: [{ order: 1, path: 'app/layout.tsx' }]
};

data.directories.map((dir, index) => {
    console.log(dir); // Log each directory to the console
}); // Log the files array to the console

data.files.map((dir, index) => {
    console.log(dir.name); // Log each directory to the console
}); // Log the files array to the console

data.scripts.map((script, index) => {
    console.log(script[0]); // Log only the first command from each script array
}); // Log the files array to the console

console.log(data.description);


const shadcnComponents = {
    // Form Components
    form: {
      input: "npx shadcn@latest add input",
      form: "npx shadcn@latest add form",
      button: "npx shadcn@latest add button",
      checkbox: "npx shadcn@latest add checkbox",
      radio: "npx shadcn@latest add radio-group",
      select: "npx shadcn@latest add select",
      textarea: "npx shadcn@latest add textarea",
      switch: "npx shadcn@latest add switch",
      slider: "npx shadcn@latest add slider",
      label: "npx shadcn@latest add label",
      formValidation: "npx shadcn@latest add form",
    },
  
    // Layout Components
    layout: {
      card: "npx shadcn@latest add card",
      sheet: "npx shadcn@latest add sheet",
      tabs: "npx shadcn@latest add tabs",
      separator: "npx shadcn@latest add separator",
      scroll: "npx shadcn@latest add scroll-area",
      aspectRatio: "npx shadcn@latest add aspect-ratio",
      collapsible: "npx shadcn@latest add collapsible",
      resizable: "npx shadcn@latest add resizable",
    },
  
    // Navigation Components
    navigation: {
      navigationMenu: "npx shadcn@latest add navigation-menu",
      breadcrumb: "npx shadcn@latest add breadcrumb",
      pagination: "npx shadcn@latest add pagination",
      drawer: "npx shadcn@latest add drawer",
    },
  
    // Data Display
    dataDisplay: {
      table: "npx shadcn@latest add table",
      calendar: "npx shadcn@latest add calendar",
      hoverCard: "npx shadcn@latest add hover-card",
      badge: "npx shadcn@latest add badge",
      carousel: "npx shadcn@latest add carousel",
    },
  
    // Feedback Components
    feedback: {
      alert: "npx shadcn@latest add alert",
      toast: "npx shadcn@latest add toast",
      progress: "npx shadcn@latest add progress",
      skeleton: "npx shadcn@latest add skeleton",
      spinner: "npx shadcn@latest add spinner",
    },
  
    // Overlay Components
    overlay: {
      dialog: "npx shadcn@latest add dialog",
      modal: "npx shadcn@latest add dialog",
      popover: "npx shadcn@latest add popover",
      tooltip: "npx shadcn@latest add tooltip",
      contextMenu: "npx shadcn@latest add context-menu",
      dropdown: "npx shadcn@latest add dropdown-menu",
      commandMenu: "npx shadcn@latest add command",
    },
  
    // Date & Time
    dateTime: {
      calendar: "npx shadcn@latest add calendar",
      datePicker: "npx shadcn@latest add date-picker",
    },
  
   
  
    // Media
    media: {
      avatar: "npx shadcn@latest add avatar",
      aspectRatio: "npx shadcn@latest add aspect-ratio",
      carousel: "npx shadcn@latest add carousel",
    },
  
    // Utilities
    utilities: {
      sonner: "npx shadcn@latest add sonner",
      themeSwitcher: "npx shadcn@latest add theme-switcher",
      clipboard: "npx shadcn@latest add copy-button",
    },
  
    // Advanced Components
    advanced: {
      combobox: "npx shadcn@latest add combobox",
      command: "npx shadcn@latest add command",
      menubar: "npx shadcn@latest add menubar",
      accordion: "npx shadcn@latest add accordion",
    },
  
    // Animation Components
    animation: {
      accordion: "npx shadcn@latest add accordion",
      scroll: "npx shadcn@latest add scroll-area",
      transition: "npx shadcn@latest add transition",
    }
  }

  console.log(JSON.stringify(shadcnComponents,null,2));

 const aceternityUIComponents = {
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
       },
  
    // Button Effects
    buttons: {
      magnetic: "npx shadcn@latest add https://ui.aceternity.com/registry/magnetic-button.json",
      glow: "npx shadcn@latest add https://ui.aceternity.com/registry/glow-button.json",
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
  };
  
  console.log(JSON.stringify(aceternityUIComponents,null,2));
