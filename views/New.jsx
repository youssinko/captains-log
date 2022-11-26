const React = require('react')

class New extends React.Component{

    render(){
        return (
            <div>
                <form action="/logs" method='POST'>
                   Title: <input type="text" name="title"/> <br />
                   Entry: <input type="textarea" name="entry"/> <br />
                   Ship is Broken: <input type="checkbox" name ="shipIsBroken" /><br />
                   <input type="submit" value="Create a Log" />


                </form>
            </div>
        )
    }
}
module.exports = New