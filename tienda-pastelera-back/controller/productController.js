const pool = require('../config/database');

exports.obtenerTodosLosProductos = async (req, res) => {
    try {
        console.log('Consultando todos los productos...');
        const result = await pool.query('SELECT * FROM productos');
        res.status(200).json({ status: 'OK', result: result.rows });
    } catch (error) {
        console.error('Error en la consulta de productos:', error);
        res.status(500).json({ status: 'ERROR', message: 'Error en la consulta de productos' });
    }
}