import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question-container'>
            <h1>Commont Question</h1>
            <div className='questions'>
            <div className='question'>
                <h4>what is the difference between props and state ?</h4>
                <p>Props and State is totally  different, props  is like an argument of a function .
                    When we create a component and want render data. In this case .
                    we  use props for passing data from the source. Props comes from outside of a component On other hand.
                    The State occurs inside a component. State changed by  any kind of outer event or
                    the events that occurs bu the user or side. State has an initial value and it changes  due to over</p>
                <h4>How "useState "works ?</h4>
                <p>useState is a React hook that allows me to manage state in functional components.
                    It works by providing two values: the current state value and a function to update that value.
                    The useState hook takes an initial state value as an argument, and returns an array with two elements.
                    The first element is the current state value, and the second element is a function that can be used to update the state.
                </p>
            </div>
            <div className='question'>
                <h4>what is done by 'useEffect' besides data fetching ?</h4>
                <p>useEffect is a hook in React that allows you to perform side effects in function components.
                    While it's commonly used for data fetching, it can also be used for a wide range of tasks, such as manipulating the DOM,
                    setting up event listeners, or subscribing to a data source.
                    Here are a few examples of what you can do with useEffect besides data fetching:
                    Updating the document title: You can use useEffect to update the title of the document based on the state of your component</p>
                <h4>How does React work ?</h4>
                <p>React is a popular JavaScript library that allows developers to create reusable and efficient user interfaces.
                    Overall, React provides developers with a powerful and efficient way to build user interfaces that are easy to reason about and maintain.

                </p>
            </div>

        </div>
        </div>
    );
};

export default Question;