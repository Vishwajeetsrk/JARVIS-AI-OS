import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const locations = [
  "Eiffel Tower, Paris",
  "Taj Mahal, India",
  "Statue of Liberty, New York",
  "Great Wall of China",
  "Machu Picchu, Peru",
  "Colosseum, Rome",
  "Pyramids of Giza, Egypt",
  "Sydney Opera House",
  "Mount Fuji, Japan",
  "Santorini, Greece",
  "Stonehenge, UK",
  "Petra, Jordan",
  "Burj Khalifa, Dubai",
  "Niagara Falls, Canada",
  "Mount Everest, Himalayas",
  "Golden Gate Bridge, San Francisco",
  "Acropolis of Athens",
  "Angkor Wat, Cambodia",
  "Sagrada Familia, Barcelona",
  "Venice Canals, Italy",
  "Victoria Falls, Zambia",
  "Galapagos Islands",
  "Easter Island statues",
  "Chichen Itza, Mexico",
  "Yellowstone Grand Prismatic Spring",
  "Aurora Borealis in Iceland",
  "Serengeti National Park, Tanzania",
  "Banff National Park, Canada",
  "Salar de Uyuni, Bolivia",
  "Bora Bora overwater bungalows",
  "Maldives beaches",
  "Christ the Redeemer, Brazil",
  "Table Mountain, South Africa",
  "Neuschwanstein Castle, Germany",
  "St. Basil's Cathedral, Moscow",
  "Forbidden City, Beijing",
  "Halong Bay, Vietnam",
  "Times Square, New York at night",
  "Grand Canyon, Arizona",
  "Big Ben, London",
  "Louvre Museum pyramid, Paris",
  "Blue Lagoon, Iceland",
  "Mount Kilimanjaro",
  "Cinque Terre, Italy",
  "Lake Como, Italy",
  "The Alhambra, Spain",
  "Cappadocia hot air balloons, Turkey",
  "Antelope Canyon, Arizona"
];

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  const result: Record<string, string> = {};
  
  for (let i = 0; i < locations.length; i += 10) {
    const batch = locations.slice(i, i + 10);
    console.log(`Processing batch ${i} to ${i + batch.length}...`);
    
    const prompt = `For each of the following locations, write exactly 3 to 4 paragraphs of detailed historical and cultural information.
    Format your response as a valid JSON object where the keys are the exact location strings provided, and the values are the paragraphs of text (using \\n\\n for paragraph breaks).
    
    Locations:
    ${batch.join('\n')}
    
    Return ONLY the valid JSON object. No markdown formatting, no backticks. Just the raw JSON.`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: prompt,
      });
      
      let text = response.text || '';
      text = text.replace(/```json/gi, '').replace(/```/g, '').trim();
      const batchResult = JSON.parse(text);
      Object.assign(result, batchResult);
    } catch (e) {
      console.error('Error on batch:', e);
    }
  }

  fs.writeFileSync('./src/locationInfo.json', JSON.stringify(result, null, 2));
  console.log('Successfully generated locationInfo.json');
}

main();
