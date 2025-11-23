import { useEffect, useState } from "react"; 

interface Scan {
  _id: string;
  name: string;
  ingredients: string[];
  allergens: string[]; 
  scannedAt: string;
  imageURL: string; 
}

function History() {
   const [scans, setScans] = useState<Scan[]>([]); // State to hold scans
   
   useEffect(() => { // When page loads, get scans from backend
    getScanFromDatabase();
  }, []);
  
  const getScanFromDatabase = async () => { // Get scans from backend
    const response = await fetch('http://localhost:3000/api/scans');
    const data = await response.json();
    setScans(data); // Save scans to state
  }; 

  return (
    <div className="min-h-screen bg-cream px-4 py-8">
      <div className="max-w-6xl mx-auto text-center pt-5">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl mb-8">
          View Your Scan History
        </h1>
        
        {scans.length === 0 ? (
          <p className="text-gray-600">No scans yet. Go scan a product!</p>
        ) : (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px' 
          }}>
            {scans.map((scan) => (
              <div 
                key={scan._id} 
                style={{ 
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  textAlign: 'left'
                }}
              >
                <h2 style={{ 
                  fontSize: '24px', 
                  fontWeight: 'bold', 
                  marginBottom: '16px',
                  color: '#333'
                }}>
                  {scan.name}
                </h2>

                {/* ADD THIS IMAGE SECTION */}
                {scan.imageURL && (
                  <img 
                  src={scan.imageURL} 
                  alt={scan.name}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '12px'
                  }}
                />
              )}
                
                <p style={{ 
                  fontSize: '14px',
                  color: '#666',
                  marginBottom: '12px' 
                }}>
                  🗓 Scanned: {new Date(scan.scannedAt).toLocaleDateString()}
                </p>
                
                <div style={{ marginBottom: '12px' }}>
                  <p style={{ 
                    fontSize: '16px',
                    fontWeight: '600',
                    marginBottom: '4px'
                  }}>
                    🥗 Ingredients:
                  </p>
                  <p style={{ 
                    fontSize: '14px',
                    color: '#555',
                    paddingLeft: '24px'
                  }}>
                    {scan.ingredients.join(', ')}
                  </p>
                </div>
                
                {scan.allergens && scan.allergens.length > 0 && (
                  <div>
                    <p style={{ 
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#dc2626',
                      marginBottom: '4px'
                    }}>
                      ⚠️ Allergens:
                    </p>
                    <p style={{ 
                      fontSize: '14px',
                      color: '#dc2626',
                      paddingLeft: '24px',
                      fontWeight: '500'
                    }}>
                      {scan.allergens.join(', ')}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default History;