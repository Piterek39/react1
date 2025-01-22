import React, { useState, useContext } from 'react';
import AppContext from '../data/AppContext';

function AddForm() {
    const { dispatch } = useContext(AppContext);
    const [formData, setFormData] = useState({
        name: '',
        regNumber: '',
        year: '',
        color: '',
        rating: '',
    });
    const [errors, setErrors] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = [];

        if (formData.name.length > 20) newErrors.push("Name can't be longer than 20 characters.");
        if (formData.regNumber.length > 10) newErrors.push("Registration number can't be longer than 10 characters.");
        if (!formData.year || isNaN(formData.year)) newErrors.push("Year must be a number.");
        if (formData.color.length > 15) newErrors.push("Color can't be longer than 15 characters.");

        if (newErrors.length) {
            setErrors(newErrors);
            return;
        }

        dispatch({ type: 'add', payload: { ...formData, id: Date.now() } });
        setFormData({ name: '', regNumber: '', year: '', color: '', rating: '' });
        setErrors([]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Car</h2>
            {errors.map((error, index) => <p key={index} className="error">{error}</p>)}

            <label>
                Car Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required maxLength="20" />
            </label>

            <label>
                Registration Number:
                <input type="text" name="regNumber" value={formData.regNumber} onChange={handleChange} required maxLength="10" />
            </label>

            <label>
                Year:
                <input type="number" name="year" value={formData.year} onChange={handleChange} required />
            </label>

            <label>
                Color:
                <input type="text" name="color" value={formData.color} onChange={handleChange} required maxLength="15" />
            </label>

            <label>
                Rating:
                <input type="number" name="rating" value={formData.rating} onChange={handleChange} required min="0" max="10" />
            </label>

            <button type="submit">Add Car</button>
        </form>
    );
}

export default AddForm;
