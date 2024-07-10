import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useBackButtonHandler = (navigate) => {
    useEffect(() => {
        const handleBackButton = (event) => {
            event.preventDefault();
            if (window.history.length > 2) {  // Ensure there's history to go back to
                navigate(-1);
            } else {
                // Optionally, show a confirmation dialog before exiting
                if (window.confirm("Do you really want to exit?")) {
                    // Redirect to home or another default page
                    window.location.href = '/'; 
                }
            }
        };

        // Add event listener for the popstate event
        window.addEventListener('popstate', handleBackButton);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('popstate', handleBackButton);
        };
    }, [navigate]);
};

export default useBackButtonHandler;
