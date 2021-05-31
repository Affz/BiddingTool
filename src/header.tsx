export const Header = (props: any) => {
    return (
        <div className="row" id="header-row">
            <div className="col-md-12" id="header-col">
                {props.props.name}({props.props.number}/4 step)
            </div>
        </div>
    );
}