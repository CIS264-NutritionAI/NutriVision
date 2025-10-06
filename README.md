# NutriVision
Hello everyone, we're the developer team behind NutriVision, a web-based health app designed to educate users on potential harmful ingredients including nutrition facts and common allergens using computer vision, image processing, and optical character recognition.

# Situation
Recently, we learned about macronutrients such as proteins, carbohydrates, fats, sugars, and sodium in our biology lecture, and its impact on our health. This piqued our interest in nutrition and introduce company tricks that disguise harmful processed ingredients such as MSG as monosodium glutamate on a food label or preservative ingredients like disodium glycerophosphate. Even companies disguise common allergens with small texts, causing those with visual impairments to miss key words in the "may contain" and "contains" sections of food labels. In addition, many common allergens in US-born humans are linked to other "ghost allergens", or in other words, allergens commonly linked with other allergens. For example, a common ghost allergen paired with peanuts are sesames and walnuts, and sometimes, humans with peanut allergens may get allergic reactions to foods they have not tested "allergic" for, yet still receive an allergic reaction. 

# Task
We aim to create an AI-powered web application called NutriVision, utilizing computer vision, image processing, and optical character recognition to identify excessive intake of macronutrients and signs of common allergens to inform clients about potential risks on food nutrition labels. 

# Action 
In addition to allergens, we also intend to highlight users' intake of excessive amounts of various macronutrients according to the scanned nutrition label. For future installments, we intend to consider health issues such as diabetes and suggest warnings based on a human's dietary restrictions and health restrictions.

# Result

# Our Stack + Explanation
* Frontend: React, TypeScript, and Tailwind CSS
* Backend: Node, Express
* Database: MongoDB
* CV Tools: Hugging Face Transformers Model (DistilBERT), Tesseract.js
* Containerization & Deployment: Vercel
* Documentation & Testing: GitHub, Postman, Cypress

# Stack Decisions
Our team decided on using a typical MERN web stack, adding TypeScript and Tailwind CSS for a more modern styling alternative in addition to lowering the learning curve. We initially went with a PERN stack due to PostgreSQL's presence as an industry standard, but quickly switched back to MongoDB to lessen the learning curve. 

We also initially decided upon training the LLM from scratch, but due to other underlying factors such as school and life, we decided on imnplementing a pre-trained model in the form of DistilBERT, a well-known food-identifying LLM capable of identifying ingredients and macronutrients. We also intended to use Google Vision at the start, but at the end, we realized by implementing Tesseract.js, an open-sourced OCR project, the implementation of Google Vision Client would be redundant.


