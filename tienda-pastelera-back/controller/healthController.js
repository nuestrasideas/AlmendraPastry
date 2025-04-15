const pool = require('../config/database');

exports.ping = async (req, res) => {
    try {
        console.log('Consultando la base de datos para verificar la salud...');
        const result = await pool.query('SELECT 1');
        res.status(200).json({ status: 'OK', result: result.rows });
    } catch (error) {
        console.error('Error en la consulta de salud:', error);
        res.status(500).json({ status: 'ERROR', message: 'Error en la consulta de salud' });
    }
}