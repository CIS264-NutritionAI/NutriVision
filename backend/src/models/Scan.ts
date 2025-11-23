import mongoose from 'mongoose'; 
const { Schema } = mongoose; 

// Define what a scan looks like 
interface ScanAttributes {
    _id: string; 
    name: string; 
    Nutrition: string[]; // Array of strings
    allergens: string[]; 
    imageURL: string; // Path to the saved image
    scannedAt: Date; 
    createdAt: Date; 
    updatedAt: Date; 
}

// Define the database schema (how MongoDB stores scans)
const scanSchema = new mongoose.Schema<ScanAttributes>({
    name: {
        type: String, 
        required: true, 
    }, 
    Nutrition: { 
        type: [String], 
        default: [], 
    }, 
    allergens: { 
        type: [String], 
        default: [], 
    }, 
    imageURL: { 
        type: String, 
        required: true,
    }, 
    scannedAt: { 
        type: Date, 
        default: Date.now, 
    }, 
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt
})

// Create the scan model (saving/getting scans from the databsse)
const Scan = mongoose.model<ScanAttributes>('Scan', scanSchema)

export default Scan; 