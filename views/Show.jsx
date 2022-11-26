const React = require('react')
class Show extends React.Component{
    render(){
        const { log } = this.props.log
        return(
            <div>
            <h2>Show Page</h2>
            <p>The {title}</p><br />
            <p>{entry}</p>
            {shipIsBroken? "Ship needs to be fixed" : "Ship is ready to sail"}<br />
            {timestamps}
            </div>
        )
    }
}
module.exports = Show