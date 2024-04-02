import Menu from "./Menu"

function Layout(props) {
    return (
        <div className="ui container">
            <Menu></Menu>
            { props.children }
        </div>
    )
}

export default Layout