// src/router.tsx
import {
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
} from "@tanstack/react-router";
import { CharacterList } from "./screens/CharacterList";
import { CharacterDetails } from "./screens/CharacterDetails";

// Define the root route
const rootRoute = createRootRoute({
  component: () => (
    <div style={{ padding: 20 }}>
      <h1>Rick & Morty SPA</h1>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  ),
});

// Define child routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: CharacterList,
});

const characterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/character/$id",
  component: CharacterDetails,
});

// Create router with all routes
export const router = createRouter({
  routeTree: rootRoute.addChildren([indexRoute, characterRoute]),
});

// Augment router type for TypeScript
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
