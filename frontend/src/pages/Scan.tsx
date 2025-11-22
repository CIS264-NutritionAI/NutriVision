import { useRef, useState } from "react";
import Webcam from "react-webcam";
import Tesseract from "tesseract.js";


const Scan = () => {
  const webcamRef = useRef<Webcam>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [text, setText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("environment");

  // Call AI 
  const callAI = async (text: string) => {
    const response = await fetch('http://localhost:3000/api/ingredients/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text }),
    });
    const data = await response.json();
    return data;
  };

  // Save scan to database
  const saveScanToDatabase = async (extractedText: string, image: string) => { 
    try { 
      const aiResults = await callAI(extractedText); // Use AI results
      const lines = extractedText.split('\n').filter(line => line.trim());

      const scanData = {
        name: lines[0] || "Unknown",
        ingredients: [extractedText],
        allergens: aiResults.flaggedAllergens,
        nutrition: {}, 
        imageURL: image,
      }; 

      // Send scan data to backend 
      const response = await fetch('http://localhost:3000/api/scans', {
        method: 'POST', 
        headers: { 
          'Content-Type': 'application/json', 
        }, 
        body: JSON.stringify(scanData),
      }); 
      if (response.ok) { 
        alert('Scan saved successfully'); 
      } else {
        alert('Failed to save scan'); 
      }
    } catch (error) {
      console.error('Error saving scan:', error); 
      alert('Error saving scan.');
    }
  }; 

  const scanImage = (image: string) => {
    setLoading(true);
    setText("");

    Tesseract.recognize(image, "eng", {
      logger: (m) => console.log(m),
    })
      .then(({ data: { text } }) => { 
        setText(text); 
        saveScanToDatabase(text, image); // Save scan to database after extracting text
      })
      .finally(() => setLoading(false));
  };

  const capture = () => {
    if (webcamRef.current) {
      const capturedImage = webcamRef.current.getScreenshot();
      if (capturedImage) {
        setImageSrc(capturedImage);
        scanImage(capturedImage);
      }
    }
  };

  const flipCamera = () => {
    setFacingMode(facingMode === "environment" ? "user" : "environment");
  };

  return (
    <div className="relative w-full overflow-hidden tracking-wide font-peppermint bg-cream min-h-screen flex flex-col items-center px-4">
      <h1 className="text-md sm:text-mg md:text-lg lg:text-xl pt-12 text-left flex justify-between">
        Analyze nutritional labels in seconds. Scan an image on desktop or mobile to get started. 
      </h1>

      {/* Webcam */}
      <div className="mt-6">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/png"
          className="rounded-lg shadow-md w-80 h-60 sm:w-96 sm:h-72"
          videoConstraints={{ facingMode }}
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <button
          onClick={capture}
          disabled={loading}
          className="border-2 border-matcha bg-matcha text-cream px-6 py-2 rounded-lg hover:bg-cream hover:text-matcha"
        >
          {loading ? "Scanning..." : "Scan with Camera"}
        </button>

        <button
          onClick={flipCamera}
          className="border-2 border-charcoal bg-charcoal text-cream px-6 py-2 rounded-lg hover:bg-cream hover:text-charcoal"
        >
          Flip Camera
        </button>
        
        {/* Upload image button */}
        <label className="border-2 border-blue-500 bg-blue-500 text-cream px-6 py-2 rounded-lg hover:bg-cream hover:text-blue-500 cursor-pointer text-center">
          Upload Image
          <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = (event) => {
                const imageData = event.target?.result as string;
                setImageSrc(imageData);
                scanImage(imageData);
              };
              reader.readAsDataURL(file);
            }
          }}
          className="hidden"
          />
        </label>
      </div>

      {/* Image Preview */}
      {imageSrc && (
        <div className="mt-6 w-80 sm:w-96">
          <h4 className="font-bold mb-2">Preview:</h4>
          <img src={imageSrc} alt="Captured" className="rounded shadow w-full" />
        </div>
      )}

      {/* Extracted Text */}
      {text && (
        <div className="mt-6 w-full max-w-xl bg-white p-4 rounded shadow">
          <h4 className="font-bold mb-2">Extracted Text:</h4>
          <p className="whitespace-pre-wrap">{text}</p>
        </div>
      )}
    </div>
  );
};

export default Scan;
