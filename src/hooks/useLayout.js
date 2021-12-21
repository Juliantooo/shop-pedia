import {Route} from 'react-router-dom'
import LayoutMain from '../layouts/LayoutMain';

const UseLayout = ({
    exact,  
    path,
    name ,
    useLayout,
    component : Component,
})=>{
        if(useLayout){
            return(
                <LayoutMain>
                    <Route
                        exact={exact}  
                        path={path} 
                        name={name} 
                        render={()=> <Component />}
                    />
                </LayoutMain>
            )
        }
        return(
            <Route
                exact={exact}  
                path={path} 
                name={name} 
                render={()=> <Component />}
            />
    )
}

export default UseLayout