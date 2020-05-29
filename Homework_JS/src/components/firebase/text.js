import React from 'react';

const FirebaseText = React.createContext(null);

export const withFirebase = Component => props => (
    <FirebaseText.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseText.Consumer>
);

export default FirebaseText;