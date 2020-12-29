import Data from "./Data";
import { ShowData } from "../../actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    isloading: state.isloading,
    checkbtn: state.checkbtn,
    todos: state.todos,
  };
};

const mapDispatchToProps = {
  ShowData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Data);
