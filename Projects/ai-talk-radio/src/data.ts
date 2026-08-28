import { RadioShow, RawRadioShow } from './types';

function parseTimecode(time: string): number {
  const [mins, secs] = time.split(':').map(Number);
  return mins * 60 + secs;
}

export function transformShow(raw: RawRadioShow): RadioShow {
  const transcript = raw.timecoded_transcript.map((line, i, arr) => {
    const start = parseTimecode(line.timecode);
    const nextLine = arr[i + 1];
    const end = nextLine ? parseTimecode(nextLine.timecode) : parseTimecode(raw.show_duration);
    
    return {
      start,
      end,
      speaker: line.speaker,
      text: line.text,
    };
  });

  return {
    title: raw.show_title,
    duration: parseTimecode(raw.show_duration),
    summary: raw.two_sentence_summary,
    date: raw.date_of_generation,
    host: raw.timecoded_transcript[0]?.speaker || "Paul",
    coverImage: raw.coverImage || "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    audioUrl: raw.audioUrl || "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    notesUrl: raw.notesUrl,
    transcript,
  };
}

export const RAW_MOCK_SHOW: RawRadioShow = {
  "show_title": "The Jagged Frontier: Vibe Coding and Valve's Open Windows",
  "show_duration": "05:01",
  "two_sentence_summary": "Jordan leads a discussion on the rise of 'vibe coding' and the potential for agentic engineering to disrupt traditional software quality standards. The episode also covers Valve's decision to open-source Steam Controller hardware files and the endorsement of SQLite by the Library of Congress.",
  "date_of_generation": "2026-05-07",
  "coverImage": "https://www.gstatic.com/aistudio/starter-apps/assets/ai_radio/cover.jpg",
  "audioUrl": "https://www.gstatic.com/aistudio/starter-apps/assets/ai_radio/ai_radio.mp3",
  "notesUrl": "/shows/default/show_notes.json",
  "timecoded_transcript": [
    {
      "timecode": "00:00",
      "speaker": "Jordan",
      "text": "If you can go from writing two hundred lines of code a day to two thousand with an AI agent, are you actually a better engineer? Or are you just... vibing?"
    },
    {
      "timecode": "00:13",
      "speaker": "Jordan",
      "text": "Good afternoon. I’m Jordan, broadcasting from our London studio. Today we’re diving into the \"jagged frontier\" of vibe coding, Valve’s surprising move into open hardware files, and the Library of Congress’s favorite database. We start with the debate that’s set Hacker News ablaze: the rise of Agentic Engineering. Our first caller is Marcus from San Francisco."
    },
    {
      "timecode": "00:40",
      "speaker": "Marcus",
      "text": "Hey Jordan! Look, I... I think people are being way too precious about this. Like, Simon Willison’s point about \"vibe coding\" is spot on. If I’ve been writing Perl for thirty years and I just want to, you know, whip up a little JavaScript app for my wife... who cares if the internal design is \"perfect\"? My wife doesn't care about lines of code. If the AI can \"vibe\" that into existence... man, let it. It’s about the result, not the ritual."
    },
    {
      "timecode": "01:13",
      "speaker": "Jordan",
      "text": "An interesting take on utility. But what about the technical debt? Elena is calling from Berlin."
    },
    {
      "timecode": "01:24",
      "speaker": "Elena",
      "text": "Marcus is describing... uh... the normalization of deviance. It is dangerous. When you produce two thousand lines a day, the review burden doesn't disappear, it... it multiplies. These AIs, they get ninety percent there, but that last ten percent? It’s full of subtle edge cases. If the code compiles, people just... they just shrug and ship it. It’s not engineering anymore. It’s just... generating future disasters."
    },
    {
      "timecode": "02:01",
      "speaker": "Jordan",
      "text": "The \"jagged frontier\" indeed. Moving from the software we write to the hardware we hold—Valve has released the CAD files for the Steam Controller under a Creative Commons license. Chloe is on the line from Seattle."
    },
    {
      "timecode": "02:19",
      "speaker": "Chloe",
      "text": "This is a huge win! I mean, finally. I’ve got a 3D printer and my back panel broke—the battery cover thing? Now I can just... print a new one. And for the accessibility community? It’s massive. You can design custom \"puck\" holders or, like, \"controller sweaters\" for people with different grip needs. It’s Valve being the good guys again."
    },
    {
      "timecode": "02:41",
      "speaker": "Jordan",
      "text": "A win for the right-to-repair, certainly. But our next caller, Raj from Bangalore, has some reservations about the fine print."
    },
    {
      "timecode": "02:51",
      "speaker": "Raj",
      "text": "I mean... yeah, it’s \"friendly,\" but look at the license. It’s CC BY-NC-SA. That \"Non-Commercial\" clause is... uh... it’s a bit of a joke in the open-source world. You can’t really build a business helping people with these parts. And the controller itself? It still won't work on a desktop OS without Steam running. It’s a very... uh... comfortable walled garden, but it’s still a wall, you know?"
    },
    {
      "timecode": "03:22",
      "speaker": "Jordan",
      "text": "A \"walled garden\" with open windows, perhaps. Finally, a nod to the classics. SQLite has officially been recommended by the Library of Congress for digital preservation. We have Sam calling from Chicago."
    },
    {
      "timecode": "03:37",
      "speaker": "Sam",
      "text": "It’s about time! SQLite is... it’s basically the gold standard for \"it just works.\" No server, no complex setup. If I want my data to be readable in fifty years, I’m not putting it in some... proprietary cloud mess. I’m putting it in an .sqlite file. It’s readable, it’s OS-independent... it’s just solid engineering."
    },
    {
      "timecode": "04:03",
      "speaker": "Jordan",
      "text": "Solid for history, but maybe not for the modern server room? We finish with Sarah in Austin."
    },
    {
      "timecode": "04:10",
      "speaker": "Sarah",
      "text": "Look, I love SQLite for a local cache, but... ugh. In a corporate environment? It’s a nightmare. It makes it way too easy for some dev to, like, spin up a database that’s just a file on their laptop. Then that file gets copied to a thumb drive or... or Slack. If there’s PII—personal data—in there? You’ve just lost control of your security perimeter. It’s too portable for its own good."
    },
    {
      "timecode": "04:43",
      "speaker": "Jordan",
      "text": "From the longevity of our archives to the \"vibes\" of our IDEs, the tools are changing faster than our habits. I’d like to thank Marcus, Elena, Chloe, Raj, Sam, and Sarah for joining the conversation. I’m Jordan, and this is AI Radio. Stay curious, stay skeptical. Good night."
    }
  ]
};

export const MOCK_SHOW: RadioShow = transformShow(RAW_MOCK_SHOW);
