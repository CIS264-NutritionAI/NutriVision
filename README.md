# NutriVision

**NutriVision** is a web-based health application designed to educate users about potential harmful ingredients, nutrition facts, and common allergens using computer vision, image processing, and optical character recognition (OCR).  

---

## Overview  

Our motivation stems from a growing interest in nutrition and understanding macronutrients—proteins, carbohydrates, fats, sugars, and sodium—and their impact on human health. We also noticed that food labels often obscure harmful ingredients (e.g., MSG listed as monosodium glutamate) or allergens in small fonts, making them difficult to detect for visually impaired users. Additionally, some allergens are linked with “cross-reactive” or “ghost” allergens—for instance, individuals allergic to peanuts may also react to sesame or walnuts.  

NutriVision addresses these challenges by leveraging AI-powered image analysis to detect:  
- Excessive macronutrient intake based on nutrition labels  
- Presence of common allergens and related “ghost allergens”  

Future iterations may incorporate dietary restrictions and health conditions, such as diabetes, to provide personalized nutritional warnings.  

---

## Features  

- **Nutrition Analysis:** Detect excessive intake of macronutrients and provide warnings.  
- **Allergen Detection:** Identify common allergens and associated cross-reactive allergens using a combination of OCR and lookup tables.  
- **History Tracking:** Timestamped scan history for users.  

---

## Tech Stack  

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | React, TypeScript, Tailwind CSS | UI/UX, component-based architecture |
| Backend | Node.js, Express | REST API endpoints |
| Database | MongoDB (AWS) | NoSQL storage of user scan history and nutritional data |
| OCR & CV | Tesseract.js, Hugging Face Transformers (DistilBERT) | Text extraction and ingredient classification |
| Authentication | Firebase Auth | User authentication and management |
| Deployment | Vercel | Continuous deployment and hosting |
| Date Handling | Date-FNS | Timestamping and sorting scanned data |

---

## Stack Decisions & Rationale  

1. **Web Application vs Mobile Application:**  
   Initially, the team considered developing a mobile application using React Native in combination with Expo CLI. However, the steep learning curve and project timeline constraints made this approach less feasible. Mobile development would have enabled device-specific feature utilization and native camera integration, but distributing and showcasing the application through Expo Go introduced additional deployment complexity and accessibility limitations. Pivoting to a web application architecture allowed the team to significantly reduce overhead, focus on frontend development and UI/UX optimization, and deliver a more accessible platform without compromising on core functionality. Implementing a MERN-inspired stack with TypeScript and Tailwind CSS streamlined component development, reduced boilerplate code, and ensured maintainable, scalable architecture.  

2. **OCR and AI Integration:**  
   While Hugging Face Transformers provide advanced NLP and classification capabilities, direct integration with mobile device cameras introduced technical challenges and slowed rapid prototyping. To address the primary challenge of extracting and analyzing nutrition label data, Tesseract.js was selected as the OCR engine due to its open-source nature, ease of integration, and cost-effectiveness. Text extracted through Tesseract is subsequently processed with a pretrained DistilBERT model to classify ingredients and identify potential allergens. A supplementary lookup table is used to accurately detect common allergens and cross-reactive “ghost allergens,” ensuring robust identification without solely relying on machine learning predictions.  

3. **Authentication and Database Design:**  
   Firebase Auth was chosen for its low learning curve, reliability, and secure user authentication capabilities, enabling rapid implementation of a login system without sacrificing privacy or user experience. MongoDB was selected as the database solution due to its flexibility in storing semi-structured user data, including scan history and nutritional information. The NoSQL schema minimizes complexity, reduces development overhead, and allows easy adaptation for future feature expansions, such as health-specific dietary restrictions.  

4. **Testing and Documentation:**  
   End-to-end testing with Cypress and API testing with Postman were initially considered to ensure comprehensive quality assurance. However, to meet strict project deadlines and balance workload across team members, these tools were deferred in favor of focusing on core functionality for the MVP. Documentation is maintained through both GitHub (README.md) and Google Docs to ensure clarity, version control, and adherence to best practices for professional software projects.  

5. **Containerization and Deployment:**  
   While Docker and Kubernetes were explored to standardize local development environments and enable scalable deployment, full orchestration was deemed excessive for the project timeline. Instead, deployment focuses on Vercel for continuous integration and hosting, allowing the web application to remain accessible 24/7. Containerization may be revisited in future iterations to enhance development consistency and facilitate multi-environment deployment.  

6. **Timestamping and Data Management:**  
   Date-FNS was incorporated to generate precise timestamps for each scanned label, allowing users to track scan history and sort entries in descending order. This feature provides transparency, improves user experience, and lays the foundation for future data analytics, including trend analysis of nutrient intake over time.  

---

## Future Directions  

- Integration of dietary restrictions and health-specific warnings (e.g., diabetes, hypertension).  
- Optional mobile app version for camera-native scanning.  
- Enhanced AI-based ingredient recognition and allergen prediction.  
- User accounts with secure privacy-preserving protocols like zkTLS.  
