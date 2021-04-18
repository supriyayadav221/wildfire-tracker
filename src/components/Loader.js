import spinner from './spinner.gif'

 const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="Laoding"/>
            <h1> fetching Data</h1>
        </div>
    )
}
export default Loader