import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export const HomeLoading: React.FC = ():JSX.Element => {
  return (
    <div>
      <CircularProgress />
    </div>
  );
}
