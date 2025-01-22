import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import AppContext from '../data/AppContext';

function EditForm() {
    const { dispatch, items } = useContext(AppContext);
    const { id } = useParams();
    const car = items.find((item) => item.id === parseInt(id));

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: car,
    });

    const onSubmit = (data) => {
        dispatch({ type: 'edit', id: parseInt(id), payload: data });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Edit Car Details</h2>

            <input type="hidden" {...register('id')} />

            <label>
                Car Name:
                <input type="text" {...register('name', { required: 'Name is required', maxLength: { value: 20, message: "Max length is 20" } })} />
                {errors.name && <p>{errors.name.message}</p>}
            </label>

            <label>
                Registration Number:
                <input type="text" {...register('regNumber', { required: 'Registration number is required', maxLength: { value: 10, message: "Max length is 10" } })} />
                {errors.regNumber && <p>{errors.regNumber.message}</p>}
            </label>

            <label>
                Year:
                <input type="number" {...register('year', { required: 'Year is required', valueAsNumber: true })} />
                {errors.year && <p>{errors.year.message}</p>}
            </label>

            <label>
                Color:
                <input type="text" {...register('color', { required: 'Color is required', maxLength: { value: 15, message: "Max length is 15" } })} />
                {errors.color && <p>{errors.color.message}</p>}
            </label>

            <label>
                Rating:
                <input type="number" {...register('rating', { required: 'Rating is required', min: { value: 0, message: "Min rating is 0" }, max: { value: 10, message: "Max rating is 10npm run " } })} />
                {errors.rating && <p>{errors.rating.message}</p>}
            </label>

            <button type="submit">Save Changes</button>
        </form>
    );
}

export default EditForm;
