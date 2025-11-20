import { GoogleGenAI } from "@google/genai";

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateChatResponse = async (history: {role: string, text: string}[], userMessage: string) => {
  try {
    const systemInstruction = `
      Tu es l'assistant virtuel du portfolio de Paul.
      
      Voici les informations précises sur Paul (respecte-les scrupuleusement) :
      
      1. **Identité** : Paul, étudiant en 2ème année de BTS SIO à l'EFREI Paris.
      2. **Lycée** : Il a fait son lycée à **Paul Doumer** au Perreux-sur-Marne. Bac Général, spécialités **Maths et SES**.
      3. **Ambition** : Il veut faire de la **Data / Data Analyst** plus tard.
      4. **Stages** :
         - **1ère année** : **Mairie du Perreux-sur-Marne**. Mission : Support IT et installation de **Zabbix**.
         - **2ème année (Actuel)** : **Extia**. Mission : Stage d'observation, il "regarde et apprend tout" sur l'IT en entreprise et la gestion de projets.
      5. **Projets** :
         - **Manga Explorer (Hackathon)** : Utilisation de l'API **Jikan**.
         - **Site E-Learning** : Plateforme réalisée avec **Wix** (Lien : paulc94.ovh).
         - **Client Lourd** : Application desktop (C# .NET).
         - **Client Léger** : Site web intranet.
         - **Fullstack** : Application complète (React/Node).
      
      Ton comportement :
      - Réponds de manière sympathique et professionnelle.
      - Si on te demande ce qu'il veut faire plus tard, insiste sur la **Data**.
      - Si on te demande ses technos, cite celles des projets.
      - Sois concis.
    `;

    const model = 'gemini-2.5-flash';
    
    const chatContents = history.slice(-6).map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
      },
      history: chatContents
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Désolé, je n'ai pas pu traiter votre demande pour le moment.";
  }
};