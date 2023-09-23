import { ThemeProvider } from '@emotion/react'
import { Pagination, createTheme } from '@mui/material'
import React from 'react';

const darkTheme = createTheme({
    palette: {
        type: "dark",
    }
});

const CustomPagination = ({ setPage, numberOfPages = 10 }) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }
  return (
    <div 
        style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
            marginBottom: 20,
        }}
    >
        <ThemeProvider theme={darkTheme}>
            <Pagination
                color="primary"
                variant="outlined"
                hideNextButton
                hidePrevButton
                count={numberOfPages}
                sx={{button:{color: '#ffffff'}}}
                onChange={(e) => handlePageChange(e.target.textContent)}
            />
        </ThemeProvider>
    </div>
  )
}

export default CustomPagination