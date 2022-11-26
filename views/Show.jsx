const React = require('react')
class Show extends React.Component{
    render(){
        const { log } = this.props
        return(
            <div key='log'>
                <a href="./">Home Page</a>
            <h2>Show Page</h2>
            <p>The {log.title}</p>
            <p>{log.entry}</p>
            {log.shipIsBroken? "Ship needs to be fixed" : "Ship is ready to sail"}<br />
            {log.timestamps}
            </div>
        )
    }
}
module.exports = Show