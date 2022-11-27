const React = require('react')
const myStyle = {
    color: 'yellow',
    backgroundColor: 'teal',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};
class DefaultLayOut extends React.Component{
    render(){
        return(
            <html style={myStyle}>
                <head>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        )
    }
}
module.exports = DefaultLayOut