import React from 'react'
import axios from 'axios'

class App extends React.Component{
    state = {
        selfcare: []
    }

    componentDidMount() {
        axios.get('/api/selfcare/').then(res => console.log(res))
    }

    render() {
        return (
            <div>
                hit
            </div>
        )
    }

}

export default App;
