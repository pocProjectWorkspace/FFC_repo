// Types
export interface ActivationItem {
  title: string;
  description: string;
  duration: string;
}

export interface AgeGroupActivations {
  starters: ActivationItem[];
  mains: ActivationItem[];
  desserts: ActivationItem[];
}

// Monthly Themes Data
export const monthlyThemes = [
  { key: "september", label: "September" },
  { key: "october", label: "October" },
  { key: "november", label: "November" },
  { key: "december", label: "December" },
  { key: "january", label: "January" },
  { key: "february", label: "February" },
  { key: "march", label: "March" },
  { key: "april", label: "April" },
  { key: "may", label: "May" },
  { key: "june", label: "June" },
  { key: "july", label: "July" },
  { key: "august", label: "August" }
];

// Age Groups
export const ageGroups = [
  { key: "4-8", label: "4-8 years" },
  { key: "9-13", label: "9-13 years" },
  { key: "14-18", label: "14-18 years" }
];

// Complete Activations by Age Group
export const activationsByAge: Record<string, AgeGroupActivations> = {
  "4-8": {
    starters: [
      {
        title: "Magic Words Hunt",
        description: "Kids search around the café for hidden \"magic words\" like please, thank you, excuse me.",
        duration: "10 min"
      },
      {
        title: "Respect Tree Craft",
        description: "Decorate a big paper tree with leaves showing ways to show respect.",
        duration: "15 min"
      }
    ],
    mains: [
      {
        title: "Puppet Manners Show",
        description: "Children use puppets to roleplay good vs. disrespectful behavior.",
        duration: "25 min"
      },
      {
        title: "Kindness Crown",
        description: "Kids design crowns with drawings of kind actions they can do at home or school.",
        duration: "30 min"
      }
    ],
    desserts: [
      {
        title: "Compliment Cards Exchange",
        description: "Kids write/draw compliments for family members and share.",
        duration: "10 min"
      },
      {
        title: "Respect Bingo",
        description: "Bingo game with simple respectful actions (sharing, listening, saying thank you).",
        duration: "15 min"
      }
    ]
  },
  "9-13": {
    starters: [
      {
        title: "Café Etiquette Challenge",
        description: "Roleplay a café setting, practicing polite ordering and table manners.",
        duration: "15 min"
      },
      {
        title: "Respect Round Table",
        description: "Families take turns sharing examples of when they felt respected.",
        duration: "15 min"
      }
    ],
    mains: [
      {
        title: "Walk in Their Shoes",
        description: "Kids wear \"role cards\" (e.g., teacher, younger sibling, new student) and act out scenarios practicing respect.",
        duration: "30 min"
      },
      {
        title: "Story Swap",
        description: "Share short personal stories of respect/disrespect and discuss how it felt.",
        duration: "30 min"
      }
    ],
    desserts: [
      {
        title: "\"I See You\" Compliment Cards",
        description: "Each participant writes 1 positive note for every family member.",
        duration: "10 min"
      },
      {
        title: "Cultural Respect Parade",
        description: "Share traditions from different cultures (dress, greetings, foods).",
        duration: "20 min"
      }
    ]
  },
  "14-18": {
    starters: [
      {
        title: "Dignity Discussion Tiles",
        description: "Each tile has a scenario (e.g., interrupting, bullying, stereotyping). Teens discuss what respect/dignity looks like.",
        duration: "15 min"
      },
      {
        title: "Café Conversation Codes",
        description: "Families create a shared \"respect code\" of phrases and actions they want to use.",
        duration: "20 min"
      }
    ],
    mains: [
      {
        title: "Social Media Respect Lab",
        description: "Teens analyze real-life social posts to discuss dignity online.",
        duration: "30 min"
      },
      {
        title: "Respect & Dignity Podcast Recording",
        description: "Teens record short \"podcast snippets\" with their families sharing insights about respect.",
        duration: "40 min"
      }
    ],
    desserts: [
      {
        title: "Story Swap Café",
        description: "Teens and parents exchange short stories of times they felt truly respected.",
        duration: "15 min"
      },
      {
        title: "Compliment Café Wall",
        description: "Teens leave sticky-note compliments for peers/families on a shared wall.",
        duration: "10 min"
      }
    ]
  }
};

// Leadership Gemstones Content
export const leadershipGemstones = {
  title: "Leadership Gemstones",
  description: "Write a letter to a family member. This could be someone they haven't seen for some time, or a reflection of time spent over the vacation etc.",
  ageGroups: ["4-8"] // Which age groups should see this section
};