const React = require('react')
const DefaultLayOut = require('./layout/Default');
class Show extends React.Component{
    render(){
        const { log } = this.props
        return(
            <DefaultLayOut key='log'>
                <a href="./" style={{color: 'pink'}}>Home Page</a>
            <h2>Show Page</h2>
            <p>The {log.title}</p>
            <p>{log.entry}</p>
            {log.shipIsBroken? "Ship needs to be fixed" : "Ship is ready to sail"}<br />
            {log.timestamps}
            </DefaultLayOut>
        )
    }
}
module.exports = Show