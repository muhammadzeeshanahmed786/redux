import Home from "../components/home";
import addDataReducers from "../services/reducer/reducer";
import {connect} from 'react-redux'
import { addData,removeData } from "../services/actions/action";
import { bindActionCreators } from "redux";


const mapStateToProps=state=>({
    state:state
})

const mapDispatchToProps=dispatch=>({
    addData:data=>dispatch(addData(data)),
    removeData:data=>dispatch(removeData(data))

})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;