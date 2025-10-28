import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const alert = {
  name: "alert",
  components: {
    Error: (
      <Alert variant="error">
        <AlertTitle>This is an alert-error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    ),
    Info: (
      <Alert variant="info">
        <AlertTitle>This is an alert-info</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    ),
    Success: (
      <Alert variant="success">
        <AlertTitle>This is an alert-success</AlertTitle>
        <AlertDescription>
          Your changes have been saved successfully.
        </AlertDescription>
      </Alert>
    ),
    Warning: (
      <Alert variant="warning">
        <AlertTitle>This is an alert-warning</AlertTitle>
        <AlertDescription>
          Please review your input before submitting.
        </AlertDescription>
      </Alert>
    ),
  },
};
