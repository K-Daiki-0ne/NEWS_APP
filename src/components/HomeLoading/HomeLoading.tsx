import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const HomeLoading: React.FC = ():JSX.Element => {
  return (
    <div>
      <CircularProgress 
        size={260}
      />
    </div>
  );
}

export default HomeLoading