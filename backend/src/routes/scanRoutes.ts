import { Router } from "express";
import Scan from '../models/Scan.js';

const router = Router(); 

// GET: get all scans
router.get('/', async function(req, res) { 
    try { 
        const scans = await Scan.find(); // Get scans from database 
        res.json(scans); // Send scans to frontend
    } catch(error) { 
        res.status(500).send("Could not find scans.");
    }
}); 

// POST: save all scans, When frontend sends scan, save it to database
router.post('/', async function(req, res) { 
    try { 
        const savedScans = await Scan.create(req.body); // Save scans 
        res.json(savedScans); // Send back the saved scans 
    } catch(error) { 
        res.status(500).send("Could not save scan.");
    }
});
    

export default router; 