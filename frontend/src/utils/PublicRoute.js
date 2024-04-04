import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({ children, isAuthenticated }) => {
    return !isAuthenticated ? children : <Navigate to="/" />;
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(PublicRoute);