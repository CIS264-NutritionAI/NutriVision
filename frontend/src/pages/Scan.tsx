import { useRef, useState } from "react";
import Webcam from "react-webcam";
import Tesseract from "tesseract.js";

const Scan = () => {
  const webcamRef = useRef<Webcam>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [text, setText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("environment");

  const scanImage = (image: string) => {
    setLoading(true);
    setText("");

    Tesseract.recognize(image, "eng", {
      logger: (m) => console.log(m),
    })
      .then(({ data: { text } }) => setText(text))
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
        Analyze nutritional labels in seconds. Scan an image on desktop or mobile to get started. Make sure 
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
