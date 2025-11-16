import { Stack, Typography } from "@mui/material";
import { isRouteErrorResponse, Link, useRouteError } from "react-router";

const ErrorPage = () => {
    const error = useRouteError() as Error;

    if(isRouteErrorResponse(error)){
        return (
            <Stack height={'100vh'} justifyContent={'center'} alignItems={'center'}>
                <Typography variant="h1" letterSpacing={5} color="#FD8F5F">{error.status}</Typography>
                <Typography variant="h4" letterSpacing={6}>{error.statusText}</Typography>
                <Link to={'/'} style={{marginTop:'8px', color:'blue', textDecoration:'underline'}}>Go Back</Link>
            </Stack>
        )
    }else{
        <Stack alignItems={'center'}>
            <Typography variant="h6">Something went wrong</Typography>
            {error.message}
        </Stack>
    }
}

export default ErrorPage