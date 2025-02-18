"use client"
import { useWebContainer } from "@/hooks/useWebContainer";
import { websiteUrlState } from "@/state/atom";
import { clsx, type ClassValue } from "clsx"
import { useRecoilState } from "recoil";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function startDevEnvironment() {
  const webcontainer = useWebContainer();
  try {
    const [url, setUrl] = useRecoilState(websiteUrlState);
    
    // Start install process
    const installProcess = await webcontainer?.spawn("npm", ["install"]);
    const installOutput = new TransformStream();
    installProcess?.output.pipeTo(installOutput.writable);

    // Start dev process
    const devProcess = await webcontainer?.spawn("npm", ["run", "dev"]);
    const devOutput = new TransformStream();
    devProcess?.output.pipeTo(devOutput.writable);

    // Handle server ready event
    webcontainer?.on("server-ready", (port, url) => {
      setUrl(url);
    });

    // return [
    //   {
    //     process: installProcess,
    //     output: installOutput.readable,
    //     exit: installProcess?.exit || Promise.resolve(1), // Default to error if no exit
    //     command: "npm install"
    //   },
    //   {
    //     process: devProcess,
    //     output: devOutput.readable,
    //     exit: devProcess?.exit || Promise.resolve(1),
    //     command: "npm run dev"
    //   }
    // ];
    return true;
  } catch (error) {
    console.error("Error in starting dev environment:", error);
    return false;
  }
}




export const formatBalance = (rawBalance: string) => {
  const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2)
  return balance
}

export const formatChainAsNum = (chainIdHex: string) => {
  const chainIdNum = parseInt(chainIdHex)
  return chainIdNum
}

export const formatAddress = (addr: string) => {
  const upperAfterLastTwo = addr.slice(0, 2) + addr.slice(2)
  return `${upperAfterLastTwo.substring(0, 5)}...${upperAfterLastTwo.substring(39)}`
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
}