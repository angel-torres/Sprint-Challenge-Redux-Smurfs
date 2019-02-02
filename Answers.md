1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    map, filter, map. Spread operator creates a new object and extends the properties of another. 

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    An action is an object created and dispatched by an action creator (which is a function that generates an action). The action gets passed down to the reducer. The reducer is a function that takes in an action and depending on the type of action, it changes the store. The store is where all data is kept. The data can only change if a reducer is triggered. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state would be something like redux where there is only on source of data for the whole app. Component state is when each react component handles it's own data and modifies it accordingly. Application state is convenient for a large scale application because it is easier to handle one state than many different states for each component. Component state is better for small applications. Both application and component state can be used together. You can have application state and pass down data to certain container components and let them be incharge of handling their own state. 

1.  What is middleware?

    Middleware function is a function that returns a function that returns a function

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk is middleware. It allows for us to make asynchronous calls in our action
    creators.

1.  Which `react-redux` method links up our `components` with our `redux store`?
    connect method. 
