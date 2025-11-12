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
* Database: MongoDB (AWS)
* CV Tools: Hugging Face Transformers Model (DistilBERT), Tesseract.js
* Cybersecurity & Authentication: Firebase Auth
* Containerization & Deployment: Vercel
* Documentation & Testing: GitHub, Postman, Cypress

# Stack Decisions
Initially, our team planned to develop a mobile application using React Native with Expo CLI, but the steep learning curve within the limited project timeline led us to pivot toward a web application. Both approaches had trade-offs. While a mobile application would have facilitated local testing and device-specific feature development, distributing and showcasing the project via Expo Go posed significant deployment and accessibility challenges. By adopting a web application architecture, implemented with a MERN-inspired stack leveraging TypeScript and Tailwind CSS, we significantly reduced the learning curve and allowed the team to focus more on frontend development and UI/UX optimization rather than a backend-heavy mobile setup. Additionally, deploying the web application on Vercel ensures continuous deployment and scalable hosting, maximizing accessibility and audience reach.

In addition, we explored using Hugging Face Transformers for computer vision and OCR (optical character recognition) tasks; however, the steep learning curve and complexity of integrating the models directly with Expo Camera limited our ability to rapidly prototype. To address the core challenge of reading labels and extracting inaccessible data, we aim to combine Google Vision API with Tesseract OCR, which provides a more straightforward and reliable pipeline for image analysis while maintaining flexibility across different environments.

To streamline development and demonstrate readiness for industry-standard workflows, we intend to containerize the application using Docker and orchestrated services with Docker Compose. This setup allows team members to run the entire stack — frontend, backend, and OCR pipeline — locally with a single command, ensuring consistent environments across machines, simplified onboarding, and a scalable architecture suitable for both development and deployment.

After much consideration, implementation of Docker + Docker Compose or Kubernetes would overcomplicate the project considering the time frame and learning curve, and the plan was terminated. We intend on using React’s JSX in order to simplify operations combined with TypeScript and Tailwind CSS to form a powerful yet simple frontend structure. 

After much deliberation, our team decided to use a free alternative to Google Vision API due to its limit to 1000 units per month. During the researching process, we realized that both Google Vision and Tesseract.js are used for optical character recognition, or in other words, converting text in an image into proper formatting for our web application, and decided we only needed one or the other in the first place. Unlike Google Vision API, Tesseract is an open-source OCR engine that we can use to read nutrition labels, and it’s free. To process the text read by Tesseract, we will then implement a custom Hugging Face Transformer model to provide informative and detailed responses regarding nutrients, ingredients, and allergens. 

In addition to our current feature, we intend on implementing simple user logins with zkTLS to optimize user experience and protect user privacy. This would allow users to login in with a username and password to see their previous scanned results. In addition, since we believe this project can work out in the long-run, there may be rolling features following the submission of this project. To do this we’ll be implementing zkTLS and MongoDB, with the choice of NoSQL to minimize the learning curve in opposed to using PostgreSQL

After much deliberation with the team, in order to produce an MVP, we decided on using a pretrained AI model for summarization of text instead of coding our own model from scratch. As a result, it is estimated that this cut our programming time by roughly 80%. The pretrained model we decided upon using was DistilBERT which is specifically designed to identify food-based items and ingredients. However, to identify and highlight allergens, we use a lookup table rather than relying solely on machine learning. We also decided to add Cypress to the stack in order to test out how our web application works on the client’s end.
In addition, we decided on Firebase Auth for the lowest possible learning curve in order to produce a MVP suitable for the scale of our project. By using Vercel, we're able to develop a web application that not only hosts our website 24/7 but is extremely easy to set up and suits our learning curve. As for documentation and testing tools, we intend on using Google Docs for the assignment, but also using a README.md in the GitHub repository itself to demonstrate best documentation practices. Postman will be used to test backend endpoints, and Cypress will be used to test our web application from a client side point of view. We originally chose to implement Docker and Kubernetes alongside with the rest of the developer tools, but in order to produce a MVP in the remaining 4 weeks, we intend on using Docker and Kubernetes for containerization only if time allows.

We recently decided to remove Cypress, Postman, and zkTLS due to the deadline approaching soon, in addition to each of us being extremely busy with our other classes. Admittedly, choosing to do end-to-end testing with Cypress was a little overboard and is not mandatory for the functional demo. Postman was a difficult choice because it allows us to test our backend endpoints, but it is not necessary for the MVP. The decision to remove zkTLS was easy due to its advanced nature and implementing it would take too much time and add complexity without much value unless we intend to focus more on cryptography or cybersecurity, but our main goal is to utilize AI and machine learning to build an interactive web app.

We recently decided to add Date-FNS to take timestamps so that users are able to see when they scanned a nutrition label and it also allows us to sort in descending order.


