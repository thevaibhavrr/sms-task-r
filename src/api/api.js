// pages/api/addSchool.js

import db from '../../utils/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, address, city, state, contact, email_id } = req.body;

    // Example: Validate the data
    if (!name || !address || !city || !state || !contact || !email_id) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      // Example: Insert data into the MySQL database
      const insertQuery = 'INSERT INTO schools (name, address, city, state, contact, email_id) VALUES (?, ?, ?, ?, ?, ?)';
      const result = await db.query(insertQuery, [name, address, city, state, contact, email_id]);

      // Check if the data was successfully inserted
      if (result.affectedRows === 1) {
        return res.status(200).json({ message: 'School added successfully' });
      } else {
        return res.status(500).json({ error: 'Failed to add school' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
