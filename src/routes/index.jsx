import Header from "../layouts/Header/index.jsx";
import Main from "../layouts/Main/index.jsx";
import Footer from "../layouts/Footer/index.jsx";
import Landing from "../pages/Landing/index.jsx";
import Authentication from "../pages/Authentication/index.jsx";

const Routes = () => {
    const HomepageLayout = () => {
        return (
            <div className={"root-container"}>
                <Header/>
                <Main/>
            </div>
        )
    }

    return (
        <>
            {/*<Landing/>*/}
            {/*<Authentication/>*/}
            {/*<Footer/>*/}
            <HomepageLayout/>
        </>
    )
}

export default Routes
