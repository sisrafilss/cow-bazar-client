import { FaSpinner } from 'react-icons/fa';
import PropTypes from 'prop-types';
import '../index.css';

const LoadingComponent = ({ message, isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="flex flex-col items-center">
        <FaSpinner className="animate-spin text-white text-6xl mb-4" />
        <p className="text-white text-lg">{message}</p>
      </div>
    </div>
  );
};

LoadingComponent.propTypes = {
  message: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default LoadingComponent;
