import React, { useState } from 'react';

import './AddNewExercise.css';

const AddNewExercise = (props) => {
    const [title, setTitle] = useState({
        val: '',
        touched: false,
        notCorrect: true,
        errorMsg: ''
    });
    const [imageUrl, setImageUrl] = useState({
        val: '',
        touched: false,
        notCorrect: true,
        errorMsg: ''
    });
    const [repeats, setRepeats] = useState({
        val: '',
        touched: false,
        notCorrect: true,
        errorMsg: ''
    });
    const [difficulty, setDifficulty] = useState({
        val: '',
        touched: false,
        notCorrect: true,
        errorMsg: ''
    });

    const handleInputChange = (event) => {
        if (event.target.name === 'title') {
            setTitle({
                    ...title,
                    val: event.target.value,
                    errorMsg: checkValidity(event.target.name, event.target.value)
                });
        } else if (event.target.name === 'imageUrl') {
            setImageUrl({
                ...imageUrl,
                val: event.target.value,
                errorMsg: checkValidity(event.target.name, event.target.value)
            });
        } else if (event.target.name === 'repeats') {
            setRepeats({
                ...repeats,
                val: event.target.value,
                errorMsg: checkValidity(event.target.name, event.target.value)
            });
        } else if (event.target.name === 'difficulty') {
            setDifficulty({
                ...difficulty,
                val: event.target.value,
                errorMsg: checkValidity(event.target.name, event.target.value)
            });
        }
    };

    const handleFocused = (event) => {
        if (event.target.name === 'title') {
            setTitle({
                    ...title,
                    touched: true
                });
        } else if (event.target.name === 'imageUrl') {
            setImageUrl({
                ...imageUrl,
                touched: true
            });
        } else if (event.target.name === 'repeats') {
            setRepeats({
                ...repeats,
                touched: true
            });
        } else if (event.target.name === 'difficulty') {
            setDifficulty({
                ...difficulty,
                touched: true
            });
        }
    }

    const checkValidity = (inputName, inputValue) => {
        if (inputValue === '') {
            return "Value is required!";
        }
        if (inputName === 'title' && inputValue.length < 3) {
            return "At least 3 symbols are required";
        } else if (inputName === 'title' && inputValue.length > 15) {
            return "Title is too long.";
        } else if (inputName === 'imageUrl' && inputValue.length > 200) {
            return "ImageURL too long";
        } else if (inputName === 'repeats' && +inputValue > 100) {
            return "Maximum repeats should be 100 or less";
        }else if (inputName === 'imageUrl' && !/^http/.test(inputValue)) {
            return "Please provide valid URL";
        }
        return '';
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if ((title.errorMsg === '' && title.touched) && (imageUrl.errorMsg === '' && imageUrl.touched) &&
        (repeats.errorMsg === '' && repeats.touched)) {
            // let userHandler = new UserHandler();
            // userHandler.registerUser({
            //     username: username.val, 
            //     email: email.val, 
            //     password: password.val
            // }).then(response => {
            //     props.history.push('/user/login');
            // });
        }
    };

    return (
        <div className="user-form">
            <h1>Add new exercise</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    className={(title.notCorrect || title.touched) ? '' : 'error'} 
                    type="text" 
                    name="title" 
                    placeholder="Title" 
                    onChange={handleInputChange}
                    onFocus={handleFocused} />
                {title.errorMsg ? <p className="errorMsg">{title.errorMsg}</p> : null}
                
                <input 
                    className={(imageUrl.notCorrect || imageUrl.touched) ? '' : 'error'} 
                    type="text" 
                    name="imageUrl" 
                    placeholder="Image URL" 
                    onChange={handleInputChange}
                    onFocus={handleFocused} />
                {imageUrl.errorMsg ? <p className="errorMsg">{imageUrl.errorMsg}</p> : null}

                <input
                    className={(repeats.notCorrect || repeats.touched) ? '' : 'error'}
                    type="number" 
                    name="repeats" 
                    placeholder="Number of repeats" 
                    onChange={handleInputChange} />
                {repeats.errorMsg ? <p className="errorMsg">{repeats.errorMsg}</p> : null}

                <select defaultValue="normal" name="difficulty" onChange={handleInputChange} >
                    <option value="easy">Easy</option>
                    <option value="normal">Normal</option>
                    <option value="hard">Hard</option>
                </select>     

                <button>Add exercise</button>
            </form>
        </div>
    );
}

export default AddNewExercise;