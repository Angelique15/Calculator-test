// redux/auth/foodAction.js
import { setFoods } from './foodReducer';

import axios from 'axios';
// Acción para cargar alimentos según el tipo de sangre
export const loadFoodsByBloodType = (userBloodType) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:3001/api/not-allowed-foods/${userBloodType}`);
        const foods = response.data;

        // Despacha una acción para actualizar el estado con los alimentos
        dispatch(setFoods(foods)); // Utiliza la acción setFoods para actualizar el estado
    } catch (error) {
        console.error('Error al cargar alimentos:', error);
        dispatch({
            type: 'LOAD_FOODS_ERROR',
            payload: error.message,
        });
    }
};
