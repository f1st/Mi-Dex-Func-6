import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

const Pagination = ({ page, count, onChange }) => {
  return (
    <MuiPagination count={count} page={page} onChange={onChange} />
  );
};

export default Pagination;
