import mongoose from 'mongoose'; 
const { Schema } = mongoose; 

// Define what a scan looks like 
interface ScanAttributes {
    _id: string; 
    name: string; 
    ingredients: string[]; // Array of strings
    allergens: string[]; 
    nutrition: { 
        calories?: number; 
        fat?: number; 
        cholesterol?: number; 
        sodium?: number; 
        carbohydrates?: number; 
        sugar?: number; 
        protein?: number; 
    }; 
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
    ingredients: { 
        type: [String], 
        default: [], 
    }, 
    allergens: { 
        type: [String], 
        default: [], 
    }, 
    nutrition: { 
        calories: { 
            type: Number, 
        }, 
        fat: { 
            type: Number, 
        }, 
        cholesterol: { 
            type: Number, 
        }, 
        sodium: {
            type: Number, 
        },
        carbohydrates: { 
            type: Number, 
        }, 
        sugar: { 
            type: Number, 
        }, 
        protein: { 
            type: Number, 
        }, 
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