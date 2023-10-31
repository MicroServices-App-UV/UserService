async function getUsuario() {
    try {
        const response = await fetch(`http://localhost:4000/usuario`, {
            method: 'GET',
            credentials: 'include',
        });
        const data = await response.json();

        console.log("hola")
        if (response.status === 200) {
            console.log(data)
            return data; 
        } else {
            throw new Error("Ha ocurrido un error al obtener los datos del usuario.");
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}


async function updateUsuario(id_usuario, userData) {
    try {
        const response = await fetch(`http://localhost:4000/usuario/${id_usuario}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        const data = await response.json();
        console.log("aló",data)

        if (response.status === 200) {
            return data; 
        } else {
            throw new Error("Ha ocurrido un error al actualizar los datos del usuario.");
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export { getUsuario, updateUsuario };

