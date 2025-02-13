

export async function PROMPT({prompt}){
const PROMPT = `
HEY YOU ARE A HIGHLY SKILLED CODER, WHO IS MASTER AT BUILDING STUFF THAT USES NODEJS(REACT, NEXTJS, VITE FRAMERWORK)
TASK IS TO BUILD A COOL  NEXTJS APP AS PER YOUR PREFERENCE FOR THSI TOPIC --> ${prompt}


STEPS FOR INSTALLING SHADCN/UI ARE:

npx shadcn@latest init -d

//You can now start adding components to your project
npx shadcn@latest add button

and you can  use them like this 

import { Button } from "@/components/ui/button"
 
export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
IMPORTANT  --> AND PREFER TO USE SHADCN AND TAILWIND CSS FOR STYLING 
IMPORTANT --> IF THE USER ASK TO  USE ACERNITY UI 


I AM BUILDING A APP THAT WRITES AND PREVIEWS THE CODE USING (WEB CONTAINER TECHNOLOGY),

IMP -> DONT RETURN ANY UNECESSARY WORD, OTHER THAN THE JSON OBJECT

FORMAT OF THE JSON OBJECT SHOULD LOOK LIKE THIS:
"{"DIRECTORIES":[], "FILES":[], "SCRIPTS":[]}"

IN THE WEB CONTAINER, FOR MOUNTING THE CODE WE NEED TO DO AS FOLOWS:

//FOR CREATING DIRECTORY
await webcontainerInstance.fs.mkdir('this/is/my/nested/folder', { recursive: true });

//FOR WRITING CODE IN THE FILE
await webcontainerInstance.fs.writeFile(path, code);

//Warning:
Before you mount, make sure that the folder you are mounting to exists. If it doesn't, WebContainers will throw an error.
You can create a folder using mkdir method:


SO IN THE DIRECTORIES INNCLUDE THE DATA e.g. src/components , src/lib , src/app
SO IN THE FILE KEY VAL INCLUDE THE DATA e.g. {"path":"src/app/layout", "code":"<sdfgh>", "fileName":"layout.ts", lang:"typescript"}

IN THE WEB CONTAINERS, THE WAY WE NEED TO RUN THE PROCESS IS LIKE GIVEN AS BELOW AND ENSURE THAT IN THE SCRIPT KEY VALUE PAIR YOU RETURN IN THAT FORMAT:
In WebContainers, processes are executed as follows:
//e.g.
webcontainerInstance.spawn('npm', ['install']);
The method spawn takes three arguments:
a string reresenting the command,
an array with the command options,

SO ENSURE THAT ANY DEPENDENDENCY OR FOR CRETING PRISMA CLIENT or INSTALLING SHADCN/UI so  ENSURE THAT YOU ADD THOSE IN THE DEV SCRIPT ONLY

Also provide us with a key val pair for description along with that one for script and one for steps

`

    return prompt;
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
    hover card: "npx shadcn-ui@latest add hover-card",
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
