/**
 * Centralized error handler for Playsaurus network errors.
 */
class PlaysaurusErrorHandler {
    /**
     * Handles Playsaurus network errors and displays appropriate error messages to the user.
     * @param {Playsaurus.PlaysaurusNetworkError} error - The error to handle
     */
    handle(error) {
        let message;
        let onCloseAlert = null;

        if (error instanceof Playsaurus.PlaysaurusValidationError) {
            message = this.handleValidationError(error);
        } else if (error instanceof Playsaurus.PlaysaurusUnauthorizedError) {
            message = "Your session has expired. Please log in again.";
            onCloseAlert = playsaurusSdk.openAuthFrame.bind(playsaurusSdk);
        } else if (error instanceof Playsaurus.PlaysaurusForbiddenError) {
            message = error.serverMessage || "You don't have permission to perform this action.";
        } else if (error instanceof Playsaurus.PlaysaurusTooManyRequestsError) {
            message = "Please wait a moment before trying again.";
        } else if (error instanceof Playsaurus.PlaysaurusMaintenanceError) {
            message = error.serverMessage || "Server is under maintenance. Please try again later.";
        } else {
            message = error.serverMessage || "An unexpected error occurred. Please try again later.";
        }

        console.error(`${error.constructor.name}: ${error.message}`);
        alert(message, onCloseAlert);

        this._handleSideEffects(error);
    }

    /**
     * Handles the Playsaurus validation error.
     * @param {Playsaurus.PlaysaurusValidationError} error - The validation error
     * @returns {string} The error message to display
     */
    _handleValidationError(error) {
        return error.serverMessage || "There are problems with your input. Please check the fields and try again.";
    }

    /**
     * Handles side effects of certain errors, such as redirecting to login or email verification.
     * @param {Playsaurus.PlaysaurusNetworkError} error - The error to handle
     */
    _handleSideEffects(error) {
        // Some errors may require additional actions like redirecting the user
        // to the login screen or opening a specific UI panel.

        if (error instanceof Playsaurus.PlaysaurusUnauthorizedError) {
            // The Playsaurus SDK will log out the user automatically, you only need to prompt them to log in again
            // playsaurusSdk.openAuthFrame();
            return;
        }

        if (error instanceof Playsaurus.PlaysaurusForbiddenError && error.reason === "auth:email-not-verified") {
            // Prompt the user to verify their email address to use the feature
            // MyGame.openEmailVerificationScreen();
            return;
        }
    }
}