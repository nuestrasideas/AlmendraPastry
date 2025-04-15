const obtenerProductos = async () => {
    try {
        const result = await pool.query('SELECT * FROM productos');
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        throw error;
    }
};