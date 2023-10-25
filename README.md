# React + Tailwind + Vite + Typescript Base Project

This project is bootstrapped with Vite, and utilizes React version 18.2.0, Tailwind CSS version 3.3.3, and TypeScript version 5.

## Dependencies:

- react-router-dom
- react-dom

## Project Structure:

```plaintext
src/
|-- assets/                 # Static assets for the frontend
|-- components/             # Global system components
|-- context/                # Global system contexts
|   |-- AuthContext/        # Context for global auth management
|   |   |-- .context.ts     # Interface definition for createContext
|   |   |-- .provider.ts    # Provider implementation
|   |   |-- useAuthContext.tsx # useContext hook, with validation
|   |-- CoreContext/        # General project configuration
|       |-- .context.ts     # (similar structure as AuthContext)
|       |-- .provider.ts
|       |-- useCoreContext.tsx
|
|-- core/                   # Core system utilities (Amplitude, Axios, Storage, etc.)
|   |-- Storage/            # localStorage definition, with fallback to memory storage
|
|-- hooks/                  # Custom hooks across the web app
|-- utils/                  # Helper functions across the system
|-- modules/                # Separate sections of the system, e.g., Auth, Dashboard, Settings
|   |-- Auth/
|   |   |-- components/
|   |   |-- context/
|   |   |-- hooks/
|   |   |-- modules/
|   |   |-- Auth.tsx        # Contains routes for this module
|   |-- Dashboard/          # (similar structure)
|   |-- Settings/           # (similar structure)
|
```

## Lazy Loading:

Routes are loaded lazily, i.e., they are not loaded until they are requested.

## Auth Context:

Within the Auth Context, there is a component called `ProtectedRoute` which navigates to a specified `redirectPath` if the user is not logged in. This means that all protected routes or modules should be encapsulated within a `ProtectedRoute`. This is demonstrated in the `app.routes.ts` file as shown below:

```javascript
<BrowserRouter>
  <Routes>
    <Route
      path="/*"
      element={
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      }
    />
    <Route path="/auth/*" element={<AuthPage />} />
    <Route path="*" element={<p>There's nothing here: 404!</p>} />
  </Routes>
</BrowserRouter>
```
